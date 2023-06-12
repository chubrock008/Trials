"use strict";

// - Create an array variable named `numbers`
//   with the following content: `[54, 23, 66, 12]`
// - Print the sum of the second and the third element

function sumElements(): void {
  // Write your code here:
  let numbers: number[] = [54, 23, 66, 12]

  let sumElements = numbers[1] + numbers[2];

  console.log(sumElements);
  
}

sumElements();

export { sumElements };