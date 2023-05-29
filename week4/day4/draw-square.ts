'use strict';

// change the number here to test out different sizes
const size: number = 6

// Write a program that draws a square of the specified size
//
// Example output when size is 6:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
export function drawSquare(size: number): void {
  // Write your code here
  for (let i = 0; i < size; i++) {
    let sides: string = '';
        for (let j = 0; j < size; j++) {
          sides += '%';
          
        }

    console.log(sides);
    
    
  }
}

drawSquare(size)