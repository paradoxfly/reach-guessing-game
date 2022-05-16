// Automatically generated with Reach 0.1.10 (c0bba7d2)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (c0bba7d2)';
export const _backendVersion = 15;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc2, ctc1],
      11: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc2, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Address;
  
  
  const v319 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v320 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v323 = stdlib.protect(ctc0, await interact.getRandom(), {
    at: './index.rsh:87:54:application',
    fs: ['at ./index.rsh:84:13:application call to [unknown function] (defined at: ./index.rsh:84:17:function exp)'],
    msg: 'getRandom',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v320, v319, v323],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:89:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0],
    pay: [v320, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v325, v326, v327], secs: v329, time: v328, didSend: v33, from: v324 } = txn1;
      
      sim_r.txns.push({
        amt: v325,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v338 = stdlib.add(v328, v326);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v325, v326, v327], secs: v329, time: v328, didSend: v33, from: v324 } = txn1;
  ;
  const v338 = stdlib.add(v328, v326);
  stdlib.protect(ctc1, await interact.waitingForAttacher(), {
    at: './index.rsh:93:36:application',
    fs: ['at ./index.rsh:93:36:application call to [unknown function] (defined at: ./index.rsh:93:36:function exp)', 'at ./index.rsh:93:36:application call to "liftedInteract" (defined at: ./index.rsh:93:36:application)'],
    msg: 'waitingForAttacher',
    who: 'Alice'
    });
  
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: ['time', v338],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v324, v325, v326, v327, v338],
      evt_cnt: 0,
      funcNum: 2,
      lct: v328,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v537, time: v536, didSend: v285, from: v535 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v324,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v537, time: v536, didSend: v285, from: v535 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:80:29:application',
      fs: ['at ./index.rsh:79:9:application call to [unknown function] (defined at: ./index.rsh:79:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:78:28:function exp)', 'at ./index.rsh:102:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [v345], secs: v347, time: v346, didSend: v48, from: v344 } = txn2;
    const v349 = stdlib.add(v325, v325);
    ;
    const v350 = stdlib.add(v327, v345);
    let v351 = stdlib.checkedBigNumberify('./index.rsh:106:35:decimal', stdlib.UInt_max, '0');
    let v352 = stdlib.checkedBigNumberify('./index.rsh:106:37:decimal', stdlib.UInt_max, '0');
    let v353 = stdlib.checkedBigNumberify('./index.rsh:106:33:decimal', stdlib.UInt_max, '3');
    let v354 = v346;
    let v361 = v349;
    
    while (await (async () => {
      const v365 = stdlib.eq(v351, v350);
      const v367 = stdlib.eq(v352, v350);
      const v368 = v367 ? false : true;
      const v369 = v365 ? false : v368;
      const v370 = stdlib.gt(v353, stdlib.checkedBigNumberify('./index.rsh:109:58:decimal', stdlib.UInt_max, '0'));
      const v371 = v369 ? v370 : false;
      
      return v371;})()) {
      const v378 = stdlib.add(v354, v326);
      stdlib.protect(ctc1, await interact.informNewRound(), {
        at: './index.rsh:113:34:application',
        fs: ['at ./index.rsh:113:34:application call to [unknown function] (defined at: ./index.rsh:113:34:function exp)', 'at ./index.rsh:113:34:application call to "liftedInteract" (defined at: ./index.rsh:113:34:application)'],
        msg: 'informNewRound',
        who: 'Alice'
        });
      
      const v384 = stdlib.protect(ctc0, await interact.getHand(), {
        at: './index.rsh:116:42:application',
        fs: ['at ./index.rsh:115:15:application call to [unknown function] (defined at: ./index.rsh:115:19:function exp)'],
        msg: 'getHand',
        who: 'Alice'
        });
      const v385 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:53:31:application',
        fs: ['at ./index.rsh:118:56:application call to "makeCommitment" (defined at: reach standard library:52:8:function exp)', 'at ./index.rsh:115:15:application call to [unknown function] (defined at: ./index.rsh:115:19:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v386 = stdlib.digest(ctc2, [v385, v384]);
      
      const txn3 = await (ctc.sendrecv({
        args: [v324, v325, v326, v344, v350, v353, v361, v378, v386],
        evt_cnt: 1,
        funcNum: 4,
        lct: v354,
        onlyIf: true,
        out_tys: [ctc3],
        pay: [stdlib.checkedBigNumberify('./index.rsh:123:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v389], secs: v391, time: v390, didSend: v89, from: v388 } = txn3;
          
          ;
          const v399 = stdlib.add(v390, v326);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v378],
        tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0, ctc3],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v324, v325, v326, v344, v350, v353, v361, v378],
          evt_cnt: 0,
          funcNum: 5,
          lct: v354,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v466, time: v465, didSend: v201, from: v464 } = txn4;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v344,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v466, time: v465, didSend: v201, from: v464 } = txn4;
        ;
        const v467 = stdlib.addressEq(v324, v464);
        const v468 = stdlib.addressEq(v344, v464);
        const v469 = v467 ? true : v468;
        stdlib.assert(v469, {
          at: 'reach standard library:189:11:dot',
          fs: ['at ./index.rsh:124:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:80:29:application',
          fs: ['at ./index.rsh:79:9:application call to [unknown function] (defined at: ./index.rsh:79:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:78:28:function exp)', 'at ./index.rsh:124:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v389], secs: v391, time: v390, didSend: v89, from: v388 } = txn3;
        ;
        const v392 = stdlib.addressEq(v324, v388);
        stdlib.assert(v392, {
          at: './index.rsh:123:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v399 = stdlib.add(v390, v326);
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc0],
          timeoutAt: ['time', v399],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v324, v325, v326, v344, v350, v353, v361, v389, v399],
            evt_cnt: 0,
            funcNum: 7,
            lct: v390,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v448, time: v447, didSend: v167, from: v446 } = txn5;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v324,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc0, ctc3, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v448, time: v447, didSend: v167, from: v446 } = txn5;
          ;
          const v449 = stdlib.addressEq(v324, v446);
          const v450 = stdlib.addressEq(v344, v446);
          const v451 = v449 ? true : v450;
          stdlib.assert(v451, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./index.rsh:133:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:80:29:application',
            fs: ['at ./index.rsh:79:9:application call to [unknown function] (defined at: ./index.rsh:79:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:78:28:function exp)', 'at ./index.rsh:133:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v405], secs: v407, time: v406, didSend: v99, from: v404 } = txn4;
          ;
          const v408 = stdlib.addressEq(v344, v404);
          stdlib.assert(v408, {
            at: './index.rsh:132:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v415 = stdlib.add(v406, v326);
          const txn5 = await (ctc.sendrecv({
            args: [v324, v325, v326, v344, v350, v353, v361, v389, v405, v415, v385, v384],
            evt_cnt: 2,
            funcNum: 8,
            lct: v406,
            onlyIf: true,
            out_tys: [ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:140:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v420, v421], secs: v423, time: v422, didSend: v109, from: v419 } = txn5;
              
              ;
              const v427 = stdlib.sub(v353, stdlib.checkedBigNumberify('./index.rsh:145:36:decimal', stdlib.UInt_max, '1'));
              const cv351 = v421;
              const cv352 = v405;
              const cv353 = v427;
              const cv354 = v422;
              const cv361 = v361;
              
              await (async () => {
                const v351 = cv351;
                const v352 = cv352;
                const v353 = cv353;
                const v354 = cv354;
                const v361 = cv361;
                
                if (await (async () => {
                  const v365 = stdlib.eq(v351, v350);
                  const v367 = stdlib.eq(v352, v350);
                  const v368 = v367 ? false : true;
                  const v369 = v365 ? false : v368;
                  const v370 = stdlib.gt(v353, stdlib.checkedBigNumberify('./index.rsh:109:58:decimal', stdlib.UInt_max, '0'));
                  const v371 = v369 ? v370 : false;
                  
                  return v371;})()) {
                  const v378 = stdlib.add(v354, v326);
                  sim_r.isHalt = false;
                  }
                else {
                  let v482;
                  const v483 = stdlib.eq(v351, v350);
                  const v484 = stdlib.eq(v352, v350);
                  const v485 = v484 ? false : true;
                  const v486 = v483 ? v485 : false;
                  if (v486) {
                    v482 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                    }
                  else {
                    const v490 = v483 ? false : v484;
                    if (v490) {
                      v482 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                      }
                    else {
                      v482 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1');
                      }
                    }
                  const v494 = stdlib.eq(v482, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                  if (v494) {
                    
                    sim_r.txns.push({
                      kind: 'from',
                      to: v324,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'from',
                      to: v344,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }
                  else {
                    const v510 = stdlib.eq(v482, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
                    if (v510) {
                      const v511 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:41:14:decimal', stdlib.UInt_max, '2'), v325);
                      sim_r.txns.push({
                        kind: 'from',
                        to: v324,
                        tok: undefined /* Nothing */
                        });
                      
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }
                    else {
                      const v523 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:47:14:decimal', stdlib.UInt_max, '2'), v325);
                      sim_r.txns.push({
                        kind: 'from',
                        to: v344,
                        tok: undefined /* Nothing */
                        });
                      
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }}}})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v415],
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v324, v325, v326, v344, v350, v353, v361, v389, v405, v415],
              evt_cnt: 0,
              funcNum: 9,
              lct: v406,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v430, time: v429, didSend: v133, from: v428 } = txn6;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v344,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc0, ctc3, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v430, time: v429, didSend: v133, from: v428 } = txn6;
            ;
            const v431 = stdlib.addressEq(v324, v428);
            const v432 = stdlib.addressEq(v344, v428);
            const v433 = v431 ? true : v432;
            stdlib.assert(v433, {
              at: 'reach standard library:189:11:dot',
              fs: ['at ./index.rsh:141:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:80:29:application',
              fs: ['at ./index.rsh:79:9:application call to [unknown function] (defined at: ./index.rsh:79:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:78:28:function exp)', 'at ./index.rsh:141:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v420, v421], secs: v423, time: v422, didSend: v109, from: v419 } = txn5;
            ;
            const v424 = stdlib.addressEq(v324, v419);
            stdlib.assert(v424, {
              at: './index.rsh:140:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v425 = stdlib.digest(ctc2, [v420, v421]);
            const v426 = stdlib.digestEq(v389, v425);
            stdlib.assert(v426, {
              at: 'reach standard library:58:17:application',
              fs: ['at ./index.rsh:142:20:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const v427 = stdlib.sub(v353, stdlib.checkedBigNumberify('./index.rsh:145:36:decimal', stdlib.UInt_max, '1'));
            const cv351 = v421;
            const cv352 = v405;
            const cv353 = v427;
            const cv354 = v422;
            const cv361 = v361;
            
            v351 = cv351;
            v352 = cv352;
            v353 = cv353;
            v354 = cv354;
            v361 = cv361;
            
            continue;}
          
          }
        
        }
      
      }
    let v482;
    const v483 = stdlib.eq(v351, v350);
    const v484 = stdlib.eq(v352, v350);
    const v485 = v484 ? false : true;
    const v486 = v483 ? v485 : false;
    if (v486) {
      v482 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
      }
    else {
      const v490 = v483 ? false : v484;
      if (v490) {
        v482 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
        }
      else {
        v482 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1');
        }
      }
    const v494 = stdlib.eq(v482, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    if (v494) {
      stdlib.protect(ctc1, await interact.seeOutcome(v482), {
        at: './index.rsh:35:26:application',
        fs: ['at ./index.rsh:34:9:application call to [unknown function] (defined at: ./index.rsh:34:27:function exp)', 'at ./index.rsh:151:12:application call to "payWinner" (defined at: ./index.rsh:32:48:function exp)'],
        msg: 'seeOutcome',
        who: 'Alice'
        });
      
      ;
      ;
      return;
      }
    else {
      const v510 = stdlib.eq(v482, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
      if (v510) {
        const v511 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:41:14:decimal', stdlib.UInt_max, '2'), v325);
        ;
        stdlib.protect(ctc1, await interact.seeOutcome(v482), {
          at: './index.rsh:43:26:application',
          fs: ['at ./index.rsh:42:9:application call to [unknown function] (defined at: ./index.rsh:42:27:function exp)', 'at ./index.rsh:151:12:application call to "payWinner" (defined at: ./index.rsh:32:48:function exp)'],
          msg: 'seeOutcome',
          who: 'Alice'
          });
        
        return;
        }
      else {
        const v523 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:47:14:decimal', stdlib.UInt_max, '2'), v325);
        ;
        stdlib.protect(ctc1, await interact.seeOutcome(v482), {
          at: './index.rsh:49:26:application',
          fs: ['at ./index.rsh:48:9:application call to [unknown function] (defined at: ./index.rsh:48:27:function exp)', 'at ./index.rsh:151:12:application call to "payWinner" (defined at: ./index.rsh:32:48:function exp)'],
          msg: 'seeOutcome',
          who: 'Alice'
          });
        
        return;
        }}}
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v325, v326, v327], secs: v329, time: v328, didSend: v33, from: v324 } = txn1;
  ;
  const v338 = stdlib.add(v328, v326);
  stdlib.protect(ctc1, await interact.acceptWager(v325), {
    at: './index.rsh:97:25:application',
    fs: ['at ./index.rsh:96:11:application call to [unknown function] (defined at: ./index.rsh:96:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v343 = stdlib.protect(ctc0, await interact.getRandom(), {
    at: './index.rsh:98:52:application',
    fs: ['at ./index.rsh:96:11:application call to [unknown function] (defined at: ./index.rsh:96:15:function exp)'],
    msg: 'getRandom',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v324, v325, v326, v327, v338, v343],
    evt_cnt: 1,
    funcNum: 1,
    lct: v328,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v325, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v345], secs: v347, time: v346, didSend: v48, from: v344 } = txn2;
      
      const v349 = stdlib.add(v325, v325);
      sim_r.txns.push({
        amt: v325,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v350 = stdlib.add(v327, v345);
      const v351 = stdlib.checkedBigNumberify('./index.rsh:106:35:decimal', stdlib.UInt_max, '0');
      const v352 = stdlib.checkedBigNumberify('./index.rsh:106:37:decimal', stdlib.UInt_max, '0');
      const v353 = stdlib.checkedBigNumberify('./index.rsh:106:33:decimal', stdlib.UInt_max, '3');
      const v354 = v346;
      const v361 = v349;
      
      if (await (async () => {
        const v365 = stdlib.eq(v351, v350);
        const v367 = stdlib.eq(v352, v350);
        const v368 = v367 ? false : true;
        const v369 = v365 ? false : v368;
        const v370 = stdlib.gt(v353, stdlib.checkedBigNumberify('./index.rsh:109:58:decimal', stdlib.UInt_max, '0'));
        const v371 = v369 ? v370 : false;
        
        return v371;})()) {
        const v378 = stdlib.add(v354, v326);
        sim_r.isHalt = false;
        }
      else {
        let v482;
        const v483 = stdlib.eq(v351, v350);
        const v484 = stdlib.eq(v352, v350);
        const v485 = v484 ? false : true;
        const v486 = v483 ? v485 : false;
        if (v486) {
          v482 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
          }
        else {
          const v490 = v483 ? false : v484;
          if (v490) {
            v482 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
            }
          else {
            v482 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1');
            }
          }
        const v494 = stdlib.eq(v482, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        if (v494) {
          
          sim_r.txns.push({
            kind: 'from',
            to: v324,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v344,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          const v510 = stdlib.eq(v482, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
          if (v510) {
            const v511 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:41:14:decimal', stdlib.UInt_max, '2'), v325);
            sim_r.txns.push({
              kind: 'from',
              to: v324,
              tok: undefined /* Nothing */
              });
            
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v523 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:47:14:decimal', stdlib.UInt_max, '2'), v325);
            sim_r.txns.push({
              kind: 'from',
              to: v344,
              tok: undefined /* Nothing */
              });
            
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v338],
    tys: [ctc4, ctc0, ctc0, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v324, v325, v326, v327, v338],
      evt_cnt: 0,
      funcNum: 2,
      lct: v328,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v537, time: v536, didSend: v285, from: v535 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v324,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v537, time: v536, didSend: v285, from: v535 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:80:29:application',
      fs: ['at ./index.rsh:79:9:application call to [unknown function] (defined at: ./index.rsh:79:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:78:28:function exp)', 'at ./index.rsh:102:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [v345], secs: v347, time: v346, didSend: v48, from: v344 } = txn2;
    const v349 = stdlib.add(v325, v325);
    ;
    const v350 = stdlib.add(v327, v345);
    let v351 = stdlib.checkedBigNumberify('./index.rsh:106:35:decimal', stdlib.UInt_max, '0');
    let v352 = stdlib.checkedBigNumberify('./index.rsh:106:37:decimal', stdlib.UInt_max, '0');
    let v353 = stdlib.checkedBigNumberify('./index.rsh:106:33:decimal', stdlib.UInt_max, '3');
    let v354 = v346;
    let v361 = v349;
    
    while (await (async () => {
      const v365 = stdlib.eq(v351, v350);
      const v367 = stdlib.eq(v352, v350);
      const v368 = v367 ? false : true;
      const v369 = v365 ? false : v368;
      const v370 = stdlib.gt(v353, stdlib.checkedBigNumberify('./index.rsh:109:58:decimal', stdlib.UInt_max, '0'));
      const v371 = v369 ? v370 : false;
      
      return v371;})()) {
      const v378 = stdlib.add(v354, v326);
      stdlib.protect(ctc1, await interact.informNewRound(), {
        at: './index.rsh:112:32:application',
        fs: ['at ./index.rsh:112:32:application call to [unknown function] (defined at: ./index.rsh:112:32:function exp)', 'at ./index.rsh:112:32:application call to "liftedInteract" (defined at: ./index.rsh:112:32:application)'],
        msg: 'informNewRound',
        who: 'Bob'
        });
      
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc2],
        timeoutAt: ['time', v378],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v324, v325, v326, v344, v350, v353, v361, v378],
          evt_cnt: 0,
          funcNum: 5,
          lct: v354,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v466, time: v465, didSend: v201, from: v464 } = txn4;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v344,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v466, time: v465, didSend: v201, from: v464 } = txn4;
        ;
        const v467 = stdlib.addressEq(v324, v464);
        const v468 = stdlib.addressEq(v344, v464);
        const v469 = v467 ? true : v468;
        stdlib.assert(v469, {
          at: 'reach standard library:189:11:dot',
          fs: ['at ./index.rsh:124:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:80:29:application',
          fs: ['at ./index.rsh:79:9:application call to [unknown function] (defined at: ./index.rsh:79:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:78:28:function exp)', 'at ./index.rsh:124:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v389], secs: v391, time: v390, didSend: v89, from: v388 } = txn3;
        ;
        const v392 = stdlib.addressEq(v324, v388);
        stdlib.assert(v392, {
          at: './index.rsh:123:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v399 = stdlib.add(v390, v326);
        const v403 = stdlib.protect(ctc0, await interact.getHand(), {
          at: './index.rsh:129:50:application',
          fs: ['at ./index.rsh:128:13:application call to [unknown function] (defined at: ./index.rsh:128:17:function exp)'],
          msg: 'getHand',
          who: 'Bob'
          });
        
        const txn4 = await (ctc.sendrecv({
          args: [v324, v325, v326, v344, v350, v353, v361, v389, v399, v403],
          evt_cnt: 1,
          funcNum: 6,
          lct: v390,
          onlyIf: true,
          out_tys: [ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:132:9:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v405], secs: v407, time: v406, didSend: v99, from: v404 } = txn4;
            
            ;
            const v415 = stdlib.add(v406, v326);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v399],
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc0, ctc2, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v324, v325, v326, v344, v350, v353, v361, v389, v399],
            evt_cnt: 0,
            funcNum: 7,
            lct: v390,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v448, time: v447, didSend: v167, from: v446 } = txn5;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v324,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v448, time: v447, didSend: v167, from: v446 } = txn5;
          ;
          const v449 = stdlib.addressEq(v324, v446);
          const v450 = stdlib.addressEq(v344, v446);
          const v451 = v449 ? true : v450;
          stdlib.assert(v451, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./index.rsh:133:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:80:29:application',
            fs: ['at ./index.rsh:79:9:application call to [unknown function] (defined at: ./index.rsh:79:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:78:28:function exp)', 'at ./index.rsh:133:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v405], secs: v407, time: v406, didSend: v99, from: v404 } = txn4;
          ;
          const v408 = stdlib.addressEq(v344, v404);
          stdlib.assert(v408, {
            at: './index.rsh:132:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v415 = stdlib.add(v406, v326);
          const txn5 = await (ctc.recv({
            didSend: false,
            evt_cnt: 2,
            funcNum: 8,
            out_tys: [ctc0, ctc0],
            timeoutAt: ['time', v415],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v324, v325, v326, v344, v350, v353, v361, v389, v405, v415],
              evt_cnt: 0,
              funcNum: 9,
              lct: v406,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v430, time: v429, didSend: v133, from: v428 } = txn6;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v344,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc0, ctc2, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v430, time: v429, didSend: v133, from: v428 } = txn6;
            ;
            const v431 = stdlib.addressEq(v324, v428);
            const v432 = stdlib.addressEq(v344, v428);
            const v433 = v431 ? true : v432;
            stdlib.assert(v433, {
              at: 'reach standard library:189:11:dot',
              fs: ['at ./index.rsh:141:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:80:29:application',
              fs: ['at ./index.rsh:79:9:application call to [unknown function] (defined at: ./index.rsh:79:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:78:28:function exp)', 'at ./index.rsh:141:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v420, v421], secs: v423, time: v422, didSend: v109, from: v419 } = txn5;
            ;
            const v424 = stdlib.addressEq(v324, v419);
            stdlib.assert(v424, {
              at: './index.rsh:140:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v425 = stdlib.digest(ctc3, [v420, v421]);
            const v426 = stdlib.digestEq(v389, v425);
            stdlib.assert(v426, {
              at: 'reach standard library:58:17:application',
              fs: ['at ./index.rsh:142:20:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            const v427 = stdlib.sub(v353, stdlib.checkedBigNumberify('./index.rsh:145:36:decimal', stdlib.UInt_max, '1'));
            const cv351 = v421;
            const cv352 = v405;
            const cv353 = v427;
            const cv354 = v422;
            const cv361 = v361;
            
            v351 = cv351;
            v352 = cv352;
            v353 = cv353;
            v354 = cv354;
            v361 = cv361;
            
            continue;}
          
          }
        
        }
      
      }
    let v482;
    const v483 = stdlib.eq(v351, v350);
    const v484 = stdlib.eq(v352, v350);
    const v485 = v484 ? false : true;
    const v486 = v483 ? v485 : false;
    if (v486) {
      v482 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
      }
    else {
      const v490 = v483 ? false : v484;
      if (v490) {
        v482 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
        }
      else {
        v482 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1');
        }
      }
    const v494 = stdlib.eq(v482, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    if (v494) {
      stdlib.protect(ctc1, await interact.seeOutcome(v482), {
        at: './index.rsh:35:26:application',
        fs: ['at ./index.rsh:34:9:application call to [unknown function] (defined at: ./index.rsh:34:27:function exp)', 'at ./index.rsh:151:12:application call to "payWinner" (defined at: ./index.rsh:32:48:function exp)'],
        msg: 'seeOutcome',
        who: 'Bob'
        });
      
      ;
      ;
      return;
      }
    else {
      const v510 = stdlib.eq(v482, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
      if (v510) {
        const v511 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:41:14:decimal', stdlib.UInt_max, '2'), v325);
        ;
        stdlib.protect(ctc1, await interact.seeOutcome(v482), {
          at: './index.rsh:43:26:application',
          fs: ['at ./index.rsh:42:9:application call to [unknown function] (defined at: ./index.rsh:42:27:function exp)', 'at ./index.rsh:151:12:application call to "payWinner" (defined at: ./index.rsh:32:48:function exp)'],
          msg: 'seeOutcome',
          who: 'Bob'
          });
        
        return;
        }
      else {
        const v523 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:47:14:decimal', stdlib.UInt_max, '2'), v325);
        ;
        stdlib.protect(ctc1, await interact.seeOutcome(v482), {
          at: './index.rsh:49:26:application',
          fs: ['at ./index.rsh:48:9:application call to [unknown function] (defined at: ./index.rsh:48:27:function exp)', 'at ./index.rsh:151:12:application call to "payWinner" (defined at: ./index.rsh:32:48:function exp)'],
          msg: 'seeOutcome',
          who: 'Bob'
          });
        
        return;
        }}}
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiARAAFgAgkgCAcoC1CIAVgFkAFoOCYDAQABAQAiNQAxGEEFZCpkSSJbNQEhBls1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIQ0MQAJFSSEHDEABPUkhBgxAAONJIQQMQABWIQQSRCEJNAESRDQESSISTDQCEhFEKGQpZFBJNQNXMCA1/4AEogVmjrAyBjQDIQ5bD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMkW7III7IQNP+yB7NCBHpIIQk0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/STUFSSJbNf4hBls1/YAENRoq0DT+FlA0/RZQsDIGNAMhDlsMRDT/MQASRDQDV2ggNP4WNP0WUAESRDT/NAMhBVs0AyEIWzQDVzAgNAMhCls0/TQDIQtbNAMhDFsjCTIGNAMkW0IDDkghBDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABOIbs6mwMgY0AyELWw9ENP8xABI0A1cwIDEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgOhSYEGDEAAqkghBDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSlcAIDX/IQVbNf4hCFs1/VcwIDX8IQpbNfshDFs1+iRbNflXaCA1+Ek1BRc194AEcO3vejT3FlCwMgY0AyELWwxENPwxABJEMgY0/Qg19jT/NP4WUDT9FlA0/FA0+xZQNPoWUDT5FlA0+FA09xZQNPYWUChLAVcAf2cpSwFXfxlnSCEJNQEyBjUCQgMMSCEHNAESRDQESSISTDQCEhFEKGRJNQNXMCA1/4AEzJmSXLAyBjQDIQ9bD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMkW7III7IQNP+yB7NCAqBJJQxAAONJgQQMQACcSCEHNAESRDQESSISTDQCEhFEKGRJNQNJSkpJVwAgNf8hBVs1/iEIWzX9VzAgNfwhCls1+yEMWzX6JFs1+Uk1BTX4gAQ4sCMtNPhQsDIGNAMhD1sMRDT/MQASRDIGNP0INfc0/zT+FlA0/RZQNPxQNPsWUDT6FlA0+RZQNPhQNPcWUChLAVcAf2cpSwFXfxFnSCEENQEyBjUCQgITJRJEIzQBEkQ0BEkiEkw0AhIRRChkNQOABEGxQE2wMgY0AyEQWw9EsSKyATQDIQVbsggjshA0A1cAILIHs0IBt0kjDEAAXUgjNAESRDQESSISTDQCEhFEKGRJNQMhBVs1/0k1BRc1/oAE1RUZFDT+FlCwMgY0AyEQWwxENP+IAdA0A1cAIDT/NAMhCFsxADQDgTBbNP4IIiKBAzIGNP9JCEIAbkiBoI0GiAGlIjQBEkQ0BEkiEkw0AhIRREk1BUlJIls1/yEGWzX+gRBbNf2ABPdxE000/xZQNP4WUDT9FlCwNP+IAWoyBjT+CDX8MQA0/xZQNP4WUDT9FlA0/BZQKEsBVwBAZ0gjNQEyBjUCQgECNf81/jX9Nfw1+zX6Nfk1+DX3NfY0+zT6EjX1NPw0+hJJNfQUNfM09RQ08xA0/SINEEEANzT+NPgINfI09jT3FlA0+BZQNPlQNPoWUDT9FlA0/xZQNPIWUChLAVcAcGdIIQc1ATIGNQJCAJc09TTzEEEABiU18kIAEjT1FDT0EEEABiI18kIAAyM18jTyIxJBACOxIrIBNPeyCCOyEDT2sgezsSKyATT3sggjshA0+bIHs0IAMTTyJRJBABWxIrIBJTT3C7III7IQNPayB7NCABWxIrIBJTT3C7III7IQNPmyB7NCAAAxGSENEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/wzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 152,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v325",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v326",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v327",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v325",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v326",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v327",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v345",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v389",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v405",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v420",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v421",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v345",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v389",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v405",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v420",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v421",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001eba38038062001eba83398101604081905262000026916200026b565b600080805543600355604080516020808201835292815281513381528451818501528484015180518285015293840151606082015292909101516080830152907fe875e0d974175d3036d72bf8b57156a0f70f8e5f5279acd8e22aae589e0748e69060a00160405180910390a1602082015151620000a8903414600762000164565b6020808301510151620000bc904362000302565b81526040805160a08082018352600060208084018281528486018381526060808701858152608080890187815233808b528d8801805151885280518901518752518c015184528c518252600198899055439098558a51808801989098529451878b0152925191860191909152519084015251828401528451808303909301835260c0909101909352805191926200015a92600292909101906200018e565b5050505062000366565b816200018a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200019c9062000329565b90600052602060002090601f016020900481019282620001c057600085556200020b565b82601f10620001db57805160ff19168380011785556200020b565b828001600101855582156200020b579182015b828111156200020b578251825591602001919060010190620001ee565b50620002199291506200021d565b5090565b5b808211156200021957600081556001016200021e565b604051606081016001600160401b03811182821017156200026557634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200027f57600080fd5b604080519081016001600160401b0381118282101715620002b057634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002ca57600080fd5b620002d462000234565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600082198211156200032457634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200033e57607f821691505b602082108114156200036057634e487b7160e01b600052602260045260246000fd5b50919050565b611b4480620003766000396000f3fe60806040526004361061009a5760003560e01c80638e314769116100615780638e31476914610115578063980b6eac14610128578063a209ad4e1461013b578063ab53f2c61461014e578063bf2c5b2414610171578063de7369981461018457005b80631e93b0f1146100a35780637eea518c146100c757806383230757146100da5780638328d4c4146100ef578063873779a11461010257005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100d5366004611625565b610197565b3480156100e657600080fd5b506001546100b4565b6100a16100fd366004611648565b610315565b6100a1610110366004611625565b610556565b6100a1610123366004611625565b610712565b6100a1610136366004611625565b6108ad565b6100a1610149366004611625565b610b15565b34801561015a57600080fd5b50610163610da3565b6040516100be92919061165a565b6100a161017f366004611625565b610e40565b6100a1610192366004611625565b610fd8565b6101a7600160005414600d61112f565b6101c1813515806101ba57506001548235145b600e61112f565b6000808055600280546101d3906116b7565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff906116b7565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b50505050508060200190518101906102649190611772565b90506102788160800151431015600f61112f565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516102a99291906117f5565b60405180910390a16102bd3415600c61112f565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156102fa573d6000803e3d6000fd5b5060008080556001819055610311906002906114c9565b5050565b610325600b60005414602761112f565b61033f8135158061033857506001548235145b602861112f565b600080805560028054610351906116b7565b80601f016020809104026020016040519081016040528092919081815260200182805461037d906116b7565b80156103ca5780601f1061039f576101008083540402835291602001916103ca565b820191906000526020600020905b8154815290600101906020018083116103ad57829003601f168201915b50505050508060200190518101906103e29190611832565b90506103f68161012001514310602961112f565b604080513381528335602080830191909152840135818301529083013560608201527f71b5093cb50f6a6c807d17b0994efe213c21a3f7fc6bd14bf50facf7ea99022e9060800160405180910390a16104513415602461112f565b8051610469906001600160a01b03163314602561112f565b604080516104b59161048f91602080870135928701359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8260e0015114602661112f565b6104bd611506565b815181516001600160a01b03918216905260208084015183518201526040808501518451820152606080860151855194169301929092526080808501518451909101528083018051928601359092526101008401519151015260a0820151610527906001906118dd565b6020820180516040019190915280514360609091015260c083015190516080015261055181611154565b505050565b610566600160005414600961112f565b6105808135158061057957506001548235145b600a61112f565b600080805560028054610592906116b7565b80601f01602080910402602001604051908101604052809291908181526020018280546105be906116b7565b801561060b5780601f106105e05761010080835404028352916020019161060b565b820191906000526020600020905b8154815290600101906020018083116105ee57829003601f168201915b50505050508060200190518101906106239190611772565b905061063681608001514310600b61112f565b7f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f722533836040516106679291906118f4565b60405180910390a161068081602001513414600861112f565b610688611506565b815181516001600160a01b03909116905260208083015182518201526040808401518351909101528151336060918201528301516106c9918501359061191b565b815160800152602080820180516000908190528151830152805160036040909101525143606090910152820151610700908061191b565b60208201516080015261055181611154565b610722600760005414601761112f565b61073c8135158061073557506001548235145b601861112f565b60008080556002805461074e906116b7565b80601f016020809104026020016040519081016040528092919081815260200182805461077a906116b7565b80156107c75780601f1061079c576101008083540402835291602001916107c7565b820191906000526020600020905b8154815290600101906020018083116107aa57829003601f168201915b50505050508060200190518101906107df9190611933565b90506107f38160e00151431015601961112f565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33836040516108249291906117f5565b60405180910390a16108383415601561112f565b805161086c906001600160a01b031633146108625760608201516001600160a01b03163314610865565b60015b601661112f565b80606001516001600160a01b03166108fc8260c001519081150290604051600060405180830381858888f193505050501580156102fa573d6000803e3d6000fd5b6108bd600960005414601c61112f565b6108d7813515806108d057506001548235145b601d61112f565b6000808055600280546108e9906116b7565b80601f0160208091040260200160405190810160405280929190818152602001828054610915906116b7565b80156109625780601f1061093757610100808354040283529160200191610962565b820191906000526020600020905b81548152906001019060200180831161094557829003601f168201915b505050505080602001905181019061097a91906119df565b90506109926040518060200160405280600081525090565b6109a48261010001514310601e61112f565b7fa2ddd0bc62239facbd79cdab1df75ee0cb72af9166d4371e62852a98cb4ca19c33846040516109d59291906118f4565b60405180910390a16109e93415601a61112f565b6060820151610a04906001600160a01b03163314601b61112f565b6040820151610a13904361191b565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c0808601519084015260e08086015190840152858101356101008401528351610120840152600b600055436001559051610aea91839101611a68565b60405160208183030381529060405260029080519060200190610b0e929190611574565b5050505050565b610b25600760005414601261112f565b610b3f81351580610b3857506001548235145b601361112f565b600080805560028054610b51906116b7565b80601f0160208091040260200160405190810160405280929190818152602001828054610b7d906116b7565b8015610bca5780601f10610b9f57610100808354040283529160200191610bca565b820191906000526020600020905b815481529060010190602001808311610bad57829003601f168201915b5050505050806020019051810190610be29190611933565b9050610bfa6040518060200160405280600081525090565b610c0b8260e001514310601461112f565b7f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc03384604051610c3c9291906118f4565b60405180910390a1610c503415601061112f565b8151610c68906001600160a01b03163314601161112f565b6040820151610c77904361191b565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c080860151908401528581013560e084015283516101008401526009600055436001559051610aea9183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0828101519082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b600060606000546002808054610db8906116b7565b80601f0160208091040260200160405190810160405280929190818152602001828054610de4906116b7565b8015610e315780601f10610e0657610100808354040283529160200191610e31565b820191906000526020600020905b815481529060010190602001808311610e1457829003601f168201915b50505050509050915091509091565b610e50600960005414602161112f565b610e6a81351580610e6357506001548235145b602261112f565b600080805560028054610e7c906116b7565b80601f0160208091040260200160405190810160405280929190818152602001828054610ea8906116b7565b8015610ef55780601f10610eca57610100808354040283529160200191610ef5565b820191906000526020600020905b815481529060010190602001808311610ed857829003601f168201915b5050505050806020019051810190610f0d91906119df565b9050610f22816101000151431015602361112f565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610f539291906117f5565b60405180910390a1610f673415601f61112f565b8051610f9b906001600160a01b03163314610f915760608201516001600160a01b03163314610f94565b60015b602061112f565b805160c08201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156102fa573d6000803e3d6000fd5b610fe8600b60005414602c61112f565b61100281351580610ffb57506001548235145b602d61112f565b600080805560028054611014906116b7565b80601f0160208091040260200160405190810160405280929190818152602001828054611040906116b7565b801561108d5780601f106110625761010080835404028352916020019161108d565b820191906000526020600020905b81548152906001019060200180831161107057829003601f168201915b50505050508060200190518101906110a59190611832565b90506110ba816101200151431015602e61112f565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd33836040516110eb9291906117f5565b60405180910390a16110ff3415602a61112f565b805161086c906001600160a01b031633146111295760608201516001600160a01b0316331461112c565b60015b602b5b816103115760405163100960cb60e01b81526004810182905260240160405180910390fd5b6040805160a081018252600080825260208083018281529383018290526060830182905260808084019290925284518201518582018051519091148452855190920151915101511491829052906111ac5760016111af565b60005b1515604082015280516111c65780604001516111c9565b60005b6111d45760006111e1565b6000826020015160400151115b15611364578151604001516020830151606001516111ff919061191b565b81606001818152505061126260405180610100016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b8251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015190931683850152855160809081015181860152828701805183015160a087015251015160c08501529184015160e0840152600760005543600155905161133a9183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b6040516020818303038152906040526002908051906020019061135e929190611574565b50505050565b8051611371576000611377565b80604001515b1561138857600260808201526113b4565b805161139857806020015161139b565b60005b156113ac57600060808201526113b4565b600160808201525b60018160800151141561144557815180516020909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611401573d6000803e3d6000fd5b50815160608101516020909101516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156102fa573d6000803e3d6000fd5b60028160800151141561149f57815180516020909101516001600160a01b03909116906108fc90611477906002611aef565b6040518115909202916000818181858888f193505050501580156102fa573d6000803e3d6000fd5b8160000151606001516001600160a01b03166108fc83600001516020015160026114779190611aef565b5080546114d5906116b7565b6000825580601f106114e5575050565b601f01602090049060005260206000209081019061150391906115f8565b50565b6040805160e0810182526000918101828152606082018390526080820183905260a0820183905260c0820192909252908190815260200161156f6040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b905290565b828054611580906116b7565b90600052602060002090601f0160209004810192826115a257600085556115e8565b82601f106115bb57805160ff19168380011785556115e8565b828001600101855582156115e8579182015b828111156115e85782518255916020019190600101906115cd565b506115f49291506115f8565b5090565b5b808211156115f457600081556001016115f9565b60006040828403121561161f57600080fd5b50919050565b60006040828403121561163757600080fd5b611641838361160d565b9392505050565b60006060828403121561161f57600080fd5b82815260006020604081840152835180604085015260005b8181101561168e57858101830151858201606001528201611672565b818111156116a0576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806116cb57607f821691505b6020821081141561161f57634e487b7160e01b600052602260045260246000fd5b604051610140810167ffffffffffffffff8111828210171561171e57634e487b7160e01b600052604160045260246000fd5b60405290565b604051610120810167ffffffffffffffff8111828210171561171e57634e487b7160e01b600052604160045260246000fd5b80516001600160a01b038116811461176d57600080fd5b919050565b600060a0828403121561178457600080fd5b60405160a0810181811067ffffffffffffffff821117156117b557634e487b7160e01b600052604160045260246000fd5b6040526117c183611756565b8152602083015160208201526040830151604082015260608301516060820152608083015160808201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461182357600080fd5b80604085015250509392505050565b6000610140828403121561184557600080fd5b61184d6116ec565b61185683611756565b8152602083015160208201526040830151604082015261187860608401611756565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152508091505092915050565b634e487b7160e01b600052601160045260246000fd5b6000828210156118ef576118ef6118c7565b500390565b6001600160a01b038316815260608101611641602083018480358252602090810135910152565b6000821982111561192e5761192e6118c7565b500190565b600061010080838503121561194757600080fd5b6040519081019067ffffffffffffffff8211818310171561197857634e487b7160e01b600052604160045260246000fd5b8160405261198584611756565b815260208401516020820152604084015160408201526119a760608501611756565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b600061012082840312156119f257600080fd5b6119fa611724565b611a0383611756565b81526020830151602082015260408301516040820152611a2560608401611756565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b81516001600160a01b03168152610140810160208301516020830152604083015160408301526060830151611aa860608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525092915050565b6000816000190483118215151615611b0957611b096118c7565b50029056fea2646970667358221220e2a13754cf03ab4940b79020bbe7483b684387e09f76eb017c44a988de87425964736f6c634300080c0033`,
  BytecodeLen: 7866,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:91:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:102:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:156:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:156:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:156:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:110:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:124:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:125:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:133:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:134:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:141:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
