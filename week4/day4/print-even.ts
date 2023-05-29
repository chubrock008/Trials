"use strict";

// Create a program that prints all the even numbers between 0 and 500 (both included)
// Each number should be on a new line

function printEven(): void {
  // Write your code here:
  for (let even: number = 0; even <= 500; even++) 
    if (even%2===0) {
      console.log(even);      
    } 


}

printEven();

export { printEven }