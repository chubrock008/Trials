"use strict";

const size: number = 4;

// Write a program creates that a two-dimensional array (of numbers)
// of the specified size with the value of 1 on the main diagonal
// and the value of 0 everywhere else.
// Print the 2d array into the output
//
// Example:
//
// 1 0 0 0
// 0 1 0 0
// 0 0 1 0
// 0 0 0 1

export function createMatrix(size: number): number[][] {
  // write your code to create an n×n matrix
  // of the given size here
  for (let i =0; i<size; i++) {
    let array1 = new Array (size);

    for (let j = 0; j < size; j++) {

        if (i !== j) {
            array1[j] = 0;
        } else {
            array1[j] = 1;
        }
    }       
    console.log(array1);
      
}  


}

export function printMatrix(matrix: number[][]): void {
  // write your code to print the given matrix
  // into the (standard) output here
}

let matrix: number[][] = createMatrix(size);
printMatrix(matrix);