"use strict";

// Create a function "reverseString" which takes a string input and returns it's reverse
// Use it on the reversed string below to check it!

// add your code here

let toBeReversed = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;

function reverseString(toBeReversed :string) {
    let arrayOfStringToReverse = toBeReversed.split("");
    let arrayOfReverse = arrayOfStringToReverse.reverse();
    
    let reverse = arrayOfReverse.join("");
    console.log(reverse);    
}

reverseString(toBeReversed);

export { reverseString };