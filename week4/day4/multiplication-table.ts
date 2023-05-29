'use strict';

// Create a program which prints the multiplication table
// for a specified number
//
// Example:
// The number 15 should print:
//
// 1 * 15 = 15
// 2 * 15 = 30
// 3 * 15 = 45
// 4 * 15 = 60
// 5 * 15 = 75
// 6 * 15 = 90
// 7 * 15 = 105
// 8 * 15 = 120
// 9 * 15 = 135
// 10 * 15 = 150

export function multiplicationTable(n: number):void {
  // write your code here for Gradescope testing
  
  for (let i: number = 1; i <= 10; i++)    
    {
      const result = i*n;

      console.log(`${i} * ${n} = ${result}`);   //prints output 1*15 = 15;   
    } 
}

multiplicationTable(15);