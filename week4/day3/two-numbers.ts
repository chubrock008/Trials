'use strict';

// Create a program that prints a few operations on two numbers: 22 and 13
// Print the result of 13 added to 22
// Print the result of 13 substracted from 22
// Print the result of 22 multiplied by 13
// Print the result of 22 divided by 13 (as a decimal fraction)
// Print the remainder of 22 divided by 13



let a = 22;
let b = 13;

function twoNumbers(): void {
  console.log(b + a);
  console.log(a - b);
  console.log(a * b);
  console.log(a / b);
  console.log(5 % 2);
  console.log((a/b) - Math.floor(a/b));
}

twoNumbers();

export { twoNumbers }