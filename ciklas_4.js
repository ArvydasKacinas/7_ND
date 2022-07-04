'use-script';

let a=200; //input variantas kai mygtuko paspaudimu gautume kiekis skaiciu ekrane
let b=4000; //input variantas
let kiekis=0;

for(let i=a; i<b; i++) {
    if (i%2===0 && i%3===0) {
        kiekis++
        console.log(i);
    }
};

console.log(kiekis);