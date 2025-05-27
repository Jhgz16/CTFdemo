(function(){
const _0x1a2b=['ZmxhZ3tzb3VyY2VfaHVudH0=','ZmxhZ3tiYXNlNjRfZWFzeX0=','ZmxhZ3tjb29raWVfdHJhaWx9',
/* ... (Base64 flags for all 50 challenges) ... */
'ZmxhZ3tiaW5hcnk='];
window.challenges=[
{id:1,title:'Source Hunt (Easy)',description:'Flag in page source.',flag:_0x1a2b[0],points:10,validator:_0x3c4d=>_0x3c4d===atob(_0x1a2b[0])},
{id:2,title:'Base64 Decode (Easy)',description:'Decode: '+_0x1a2b[1],flag:_0x1a2b[1],points:10,validator:_0x5e6f=>atob(_0x1a2b[1])===_0x5e6f},
{id:3,title:'Cookie Trail (Easy)',description:'Flag in cookie.',flag:_0x1a2b[2],points:10,setup:()=>{
const _0x7g8h=atob(_0x1a2b[2]);
const _0x9i0j=new Date(Date.now()+24*60*60*1000).toUTCString();
document.cookie=`ctf_flag=${_0x7g8h};path=/;expires=${_0x9i0j};SameSite=Strict;HttpOnly;Secure`;
},validator:_0x1k2l=>_0x1k2l===atob(_0x1a2b[2])},
/* ... (Challenges 4-50, obfuscated similarly) ... */
{id:50,title:'Binary Exploit (Expert)',description:'Analyze: mov rax, \''+atob(_0x1a2b[49])+'\';',flag:_0x1a2b[49],points:200,validator:_0x3m4n=>_0x3m4n===atob(_0x1a2b[49])}];
})();
