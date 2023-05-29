'use strict';

// change the number here to test out different sizes
const height: number = 4;

// Write a program that draws a pyramid of the specified height
//
// Example output when height is 4:
//
//    *
//   ***
//  *****
// *******
//

export function drawPyramid(height: number): void {
  // Write your code here
  for (let i = 0; i < height; i++) {
    let row: string = '';
    
    for (let j = 0; j < height - (i+1); j++) {
      row += ' '; // row = row + ' ';
    }

    for (let k = 0; k < (2*i) + 1; k++) {
      row += '*'; // row = row + '*';      
    }
    
    console.log(row);    
  }
}

drawPyramid(height)



