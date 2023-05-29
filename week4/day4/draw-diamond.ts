'use strict';

// change the number here to test out different sizes
const height: number = 4;

// Write a program that draws a diamond of the specified height
//
// Example output when height is 4:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// Note: the height of the diamond is taken from its base
// (where it is the widest) to the top.
// The total number of lines produced is 2 * height - 1

export function drawDiamond(height: number): void {
  // Write your code here
  for (let i = 0; i < height; i++) {
    let row: string = '';

      for (let j = 0; j < height -i -1; j++) {
        row += ' ';        
      }    
    
    for (let k = 0; k < (2*i) +1; k++) {
      row += '*';      
    }

    console.log(row);    
  }

  for (let i = 1; i < height; i++) {
    let row: string = '';
        
        for (let j = 0; j < i; j++) {
          row += ' ';          
        }
    
    for (let k = 0; k < (2 *height) - (2*i + 1); k++) {
      row += '*';      
    }

    console.log(row);   
    
  }
}

drawDiamond(height)