
"use strict";

let words = ['rainbow','heart','purple','ginseng',''];

let alpha = ["a", "b","c"];
let num1 = [[1], 2, [3]];
let num2 = [4, [5]];
let num3 = [6, 7, 8, 9];

let alphaNumeric = num1.concat(num2);


console.log(alphaNumeric);

num1[3] = 9;

console.log(num1);

console.log('===============================================');

num1.forEach(element => {
    console.log(element);    
});

let map1 = num3.map(x => x *2);

console.log(map1);

let map2 = num3.map(x => x*3);

let map3 = num3.map(x => x);

console.log(map2);
console.log(map3);

num3[4] = 2; // added a 4th index to num3;

console.log(num3);



let filtered = [6, 7, 8, 9].filter(isBigEnough);
console.log(filtered);






//console.log(word);