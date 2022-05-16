"reach 0.1";

const [ isOutcome, B_WINS, DRAW, A_WINS ] = makeEnum(3); 

const winner = (getResult1,hand1, hand2) => {
  const x = getResult1;
  if (hand1 == x && hand2 != x){
    return A_WINS;
  }
  else if(hand1 != x  && hand2 == x){
    return B_WINS;
  }
  else if (hand1 == x && hand2 == x){
    return DRAW;
  }
  else  return DRAW;

};

const combineRandom = (randomAlice, randomBob) => {
  const result = randomAlice + randomBob;
  return result;
};

/*
forall(UInt, hand1 =>
  forall(UInt, hand2 =>
    forall(UInt, getResult1=>
      assert(isOutcome(winner(getResult1,hand1, hand2))))));
*/

const payWinner = (outcome, wager, Alice, Bob) => {
  if (outcome == DRAW) {
    each([Alice, Bob], () => {
      interact.seeOutcome(outcome)
    });
    transfer(wager).to(Alice);
    transfer(wager).to(Bob);
  }
  else if(outcome == A_WINS) {
    transfer(2*wager).to(Alice);
    each([Alice, Bob], () => {
      interact.seeOutcome(outcome);
    });
  }
  else {
    transfer(2*wager).to(Bob);
    each([Alice, Bob], () => {
      interact.seeOutcome(outcome);
    });
  }
}



const Player = {
  ...hasRandom,
  getHand: Fun([], UInt),
  seeOutcome: Fun([UInt], Null),
  informTimeout: Fun([], Null),
  informNewRound: Fun([], Null),
  getRandom: Fun([], UInt),
};

export const main = Reach.App(() => {
  const Alice = Participant('Alice', {
    ...Player,
    wager: UInt, // atomic units of currency
    deadline: UInt, // time delta (blocks/rounds)
    waitingForAttacher: Fun([], Null)
  });
  const Bob   = Participant('Bob', {
    ...Player,
    acceptWager: Fun([UInt], Null),
  });
  init();

  const informTimeout = () => {
    each([Alice, Bob], () => {
      interact.informTimeout();
    });
  };

  Alice.only(() => {
    const wager = declassify(interact.wager);
    const deadline = declassify(interact.deadline);
    const randomAlice = declassify(interact.getRandom());
  });
  Alice.publish(wager, deadline, randomAlice)
    .pay(wager);
  commit();

  Alice.interact.waitingForAttacher();


  Bob.only(() => {
    interact.acceptWager(wager);
    const randomBob = declassify(interact.getRandom());
  });
  Bob.publish(randomBob)
  .pay(wager)
    .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));

  const random = combineRandom(randomAlice, randomBob);

  var [stage, hand1, hand2 ] = [3,0,0];
  invariant( balance() == 2 * wager);

  while ((hand1!= random && hand2 != random) && (stage > 0)) {
    commit();

    Bob.interact.informNewRound();
    Alice.interact.informNewRound();

    Alice.only(() => {
      const _handAlice = interact.getHand();
      
      const [_commitAlice, _saltAlice] = makeCommitment(interact, _handAlice);
      const commitAlice = declassify(_commitAlice);
      

    });
    Alice.publish(commitAlice)
      .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
    commit();

    unknowable(Bob, Alice(_handAlice, _saltAlice));
    Bob.only(() => {
      const handBob = declassify(interact.getHand());
      
    });
    Bob.publish(handBob)
      .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
    commit();

    Alice.only(() => {
      const saltAlice = declassify(_saltAlice);
      const handAlice = declassify(_handAlice);
    });
    Alice.publish(saltAlice, handAlice)
      .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
    checkCommitment(commitAlice, saltAlice, handAlice);
    
  //outcome = winner(getResult1,handAlice, handBob);
    [stage, hand1, hand2] = [stage-1, handAlice, handBob];
    continue;

  }
  const outcome = winner(random, hand1, hand2); 

  payWinner(outcome,wager, Alice, Bob);

 

  
  commit();

 
});