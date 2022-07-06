'use-script';

let pradziaIntervalas=1;
let pabaigaIntervalas=51;
let lyginisMasyvas=[];
let nelyginisMasyvas=[];
let penkiDalmuoMasyvas=[];

for(i=pradziaIntervalas; i<pabaigaIntervalas; i++) {
    if (i%2===1) {
        nelyginisMasyvas.push(i);
    } else if (i%2===0) {
        lyginisMasyvas.push(i);
        }
    if (i%5===0) {
        penkiDalmuoMasyvas.push(i);
    }
};

console.log(lyginisMasyvas);
console.log(nelyginisMasyvas);
console.log(penkiDalmuoMasyvas);