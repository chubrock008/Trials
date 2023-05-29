'use strict';

// change the number here to test out different sizes
const size: number = 8;

// Write a program that draws a chess table of the specified size
//
// Example output when size is 8:
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//
export function drawChessTable(size: number): void {
  // Write your code here
  for (let i = 0; i < size; i++) {
    let result: string = '';

        for (let j = 0; j < size/2; j++) {
          result += ' ';
          
          if (i%2 !=0) {
            result += ' ' + '%';
            
          } else {
            result += '%'
            
          }          
        }

    console.log(result);
    
    
  }
}

drawChessTable(size)