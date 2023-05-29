'use strict';

// Write a program that calculates the sum and the average from 1 to a given number
// Example input: 5
// Example output: Sum: 15, Average: 3

function parametricAverage(numbers: number): void {
  // Write your code here:
  for (let index: number = 1; index <= numbers; index++) {
    const sum = (index*(index+1))/2;
    const average = ((index+1)/2);    
         
    if (index===numbers) {
      console.log(`Sum: ${sum}, Average: ${average}`);      
    }
       
  }

}

parametricAverage(5);

export { parametricAverage }

