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
          sides += '';
          
          if (i===0 || i===size-1 ) {
            sides += '%';
                              
          } else if ((i>0 && j<1) || (i>0 && j===size-1)) {
            sides += '%';
            
          } else {
            sides += ' ';
            
          }            
        }

    console.log(sides);
    
  }
}

drawSquare(size)