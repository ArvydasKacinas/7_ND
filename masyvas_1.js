'use-script';

let masyvas1=[];
let papildymas;
document.querySelector('#spausti').addEventListener('click',function(){

papildymas = parseInt(document.querySelector("#input").value);

for(let i=0; i<1; i++) {
    masyvas1.push(papildymas);
    console.log(masyvas1);
}
});
