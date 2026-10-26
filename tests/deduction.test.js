import test from 'node:test';
import assert from 'node:assert/strict';
import {initialState,restoreState,assessDeduction,nextLead,proofWithout} from '../public/game/engine.js';
const ready={...initialState(),collected:['photo','power','ledger','archive','reconstruction'],uncropped:true,tested:true,cameraVerified:true,cameraChecks:['helix','spare']};
test('A matching judgement without its independent records is not a valid deduction',()=>{
 assert.equal(assessDeduction('timing','contradicted',['archive'],ready).ok,false);
 assert.equal(assessDeduction('timing','contradicted',['archive','reconstruction','power'],ready).ok,true);
});
test('An unopened crop cannot establish the full-photo deduction',()=>{
 assert.equal(assessDeduction('photo','contradicted',['photo','power'],{...ready,uncropped:false}).ok,false);
 assert.equal(assessDeduction('photo','contradicted',['photo','power'],ready).ok,true);
});
test('A witness contradiction does not support guilt',()=>{
 assert.equal(assessDeduction('witness','supported',['ledger'],ready).ok,false);
 assert.equal(assessDeduction('witness','insufficient',['ledger'],ready).ok,true);
});
test('Deduction checks reject unknown claims and records without changing progress',()=>{
 const before=JSON.stringify(ready);
 assert.equal(assessDeduction('unknown','supported',[],ready).ok,false);
 assert.equal(assessDeduction('photo','contradicted',['photo','fake'],ready).ok,false);
 assert.equal(JSON.stringify(ready),before);
});
test('Next lead adapts without prematurely naming the culprit',()=>{
 assert.equal(nextLead(initialState()).clue,'photo');
 assert.equal(nextLead({...ready,collected:['photo']}).clue,'archive');
 assert.equal(nextLead({...ready,cameraVerified:false}).page,'lab');
 assert.equal(nextLead(ready).page,'board');
 assert.equal(nextLead({...ready,deductions:{photo:true,witness:true,timing:true}}).page,'theory');
});
test('Removing a proof pillar explains a missing link without mutating the notebook',()=>{
 const before=JSON.stringify(ready);
 for(const id of ['ledger','archive','reconstruction'])assert.equal(proofWithout(id).holds,false);
 assert.equal(proofWithout('photo').holds,true);
 assert.equal(JSON.stringify(ready),before);
});
test('Existing saves migrate safely; invented solved deductions are discarded',()=>{
 const old=restoreState(JSON.stringify({...ready,hunch:undefined,deductions:undefined}));
 assert.equal(old.hunch,'');assert.deepEqual(old.deductions,{});
 const invalid=restoreState(JSON.stringify({...ready,uncropped:false,deductions:{photo:true,unknown:true},hunch:'<img>',attempts:-5}));
 assert.deepEqual(invalid.deductions,{});assert.equal(invalid.hunch,'');assert.equal(invalid.attempts,0);
 const valid=restoreState(JSON.stringify({...ready,hunch:'Eli',deductions:{photo:true},attempts:2}));
 assert.equal(valid.hunch,'Eli');assert.equal(valid.deductions.photo,true);assert.equal(valid.attempts,2);
});
