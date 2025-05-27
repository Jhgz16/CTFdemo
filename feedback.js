(function(){
const _0x2b3c={1:'Check page source.',2:'Use atob().',3:'Inspect cookies in DevTools.',
/* ... (Hints for all 50 challenges) ... */
50:'Analyze assembly.'};
window.showHint=function(_0x4d5e){
const _0x6f7g=document.getElementById('hint-modal');
const _0x8h9i=document.getElementById('modal-title');
const _0x0j1k=document.getElementById('modal-content');
if(_0x6f7g&&_0x8h9i&&_0x0j1k){
const _0x2l3m=window.challenges.find(_0x4n5o=>_0x4n5o.id===_0x4d5e);
if(_0x2l3m){
_0x8h9i.textContent=`Hint: ${_0x2l3m.title}`;
_0x0j1k.textContent=_0x2b3c[_0x4d5e]||'No hint.';
_0x6f7g.style.display='flex';
}
}
};
window.closeModal=function(){
const _0x5p6q=document.getElementById('hint-modal');
if(_0x5p6q)_0x5p6q.style.display='none';
};
window.getInstructions=function(_0x7r8s){
return _0x2b3c[_0x7r8s]||'No instructions.';
};
window.showConfirmation=function(_0x9t0u,_0x1v2w,_0x3x4y){
const _0x5z6a=document.getElementById('hint-modal');
const _0x7b8c=document.getElementById('modal-title');
const _0x9d0e=document.getElementById('modal-content');
if(_0x5z6a&&_0x7b8c&&_0x9d0e){
_0x7b8c.textContent=_0x1v2w?'Success':'Error';
_0x9d0e.textContent=_0x9t0u+(_0x3x4y?`\nInstructions: ${_0x3x4y}`:'');
_0x5z6a.style.display='flex';
}
};
})();
