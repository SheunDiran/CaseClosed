import test from 'node:test';
import assert from 'node:assert/strict';
import {initialState,restoreState,visibleFrom,cameraSightline,verifyCamera,evaluateTheory} from '../public/game/engine.js';
const solved={...initialState(),collected:['ledger','archive','photo','power','condition','display','reconstruction'],tested:true,uncropped:true,cameraVerified:true,cameraChecks:['helix','spare']};
test('A witness at the entrance cannot see past the opaque partition',()=>{assert.equal(visibleFrom(65),false);assert.equal(visibleFrom(170),false);assert.equal(visibleFrom(265),true);});
test('A lie about position does not convict an innocent witness',()=>{assert.equal(evaluateTheory({suspect:'Mara',window:'early',evidence:['ledger','archive','reconstruction']},solved).ok,false);});
test('Correct suspect with the wrong time window is insufficient',()=>{assert.equal(evaluateTheory({suspect:'Nia',window:'blackout',evidence:['ledger','archive','reconstruction']},solved).type,'time');});
test('Independent timing and opportunity records support the correct theory',()=>{assert.equal(evaluateTheory({suspect:'Nia',window:'early',evidence:['ledger','archive','reconstruction']},solved).ok,true);});
test('Cannot attach evidence never collected',()=>{assert.equal(evaluateTheory({suspect:'Nia',window:'early',evidence:['ledger','archive','reconstruction']},initialState()).type,'uncollected');});
test('A correct guess without the key records is not a proof',()=>{assert.equal(evaluateTheory({suspect:'Nia',window:'early',evidence:['condition','power','reconstruction']},solved).type,'proof');});
test('Corrupt or old saved data safely starts a new case',()=>{assert.deepEqual(restoreState('{broken'),initialState());assert.deepEqual(restoreState('{"version":0}'),initialState());assert.deepEqual(restoreState('{"version":2,"collected":["archive","bogus","archive"]}').collected,['archive']);});

test('Two original records cannot solve the case without reconstructed provenance',()=>{const raw={...solved,cameraVerified:false,collected:['ledger','archive','condition']};assert.equal(evaluateTheory({suspect:'Nia',window:'early',evidence:['ledger','archive','condition']},raw).type,'geometry');});
test('The spare is blocked from C2 while HELIX is directly visible',()=>{assert.equal(cameraSightline('spare').visible,false);assert.equal(cameraSightline('helix').visible,true);});
test('Both hypotheses must be tested before deriving the frame identity',()=>{assert.equal(verifyCamera({...solved,cameraChecks:['helix']},'helix'),false);assert.equal(verifyCamera(solved,'spare'),false);assert.equal(verifyCamera(solved,'helix'),true);});
