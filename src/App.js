import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';

import './App.css';
import { views } from './helpers/constants.js';
import { useState } from 'react';

//views
import { 
  ConnectAccount,
  DeployOrAttach,
  SetWager,
  Deploying,
  WaitForAttacher,
  AcceptWager,
  Attaching,
  WaitForTurn,
  PlayTurn,
  Timeout,
  SeeWinner
} from './views/';

const reach = loadStdlib('ALGO');
reach.setWalletFallback(reach.walletFallback( { providerEnv: 'TestNet', MyAlgoConnect } ));
const { standardUnit } = reach;

function App() {
  const [ view, setView ] = useState(views.SEE_WINNER);
  const [ isAlice, setIsAlice ] = useState(true);


  return (
    <div className="App">

      <div className='topnav'>
        <h1>Price Is Right</h1>
      </div>
      
      {
        view === views.CONNECT_ACCOUNT &&
        <ConnectAccount />
      }

      {
        view === views.DEPLOY_OR_ATTACH &&
        <DeployOrAttach />
      }

      {
        view === views.SET_WAGER &&
        <SetWager />
      }

      {
        view === views.DEPLOYING &&
        <Deploying />
      }

      {
        view === views.WAIT_FOR_ATTACHER &&
        <WaitForAttacher />
      }

      {
        view === views.ACCEPT_WAGER &&
        <AcceptWager />
      }

      {
        view === views.ATTACHING &&
        <Attaching />
      }

      {
        view === views.WAIT_FOR_TURN &&
        <WaitForTurn />
      }

      {
        view === views.PLAY_TURN && 
        <PlayTurn />
      }

      {
        view === views.TIME_OUT &&
        <Timeout />
      }

      {
        view === views.SEE_WINNER &&
        <SeeWinner />
      }
    </div>
  );
}

export default App;
