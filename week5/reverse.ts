"use strict";

// - Create a variable named `numbers`
//   with the following content: `[3, 4, 5, 6, 7]`
// - Reverse the order of the elements of `numbers` with one of the methods below
//    - do it with the built in method
//    - do it with creating a new temp array and a loop
// - Print the elements of the reversed `numbers`:
//   [7, 6, 5, 4, 3]

function reverse(): void {
  // Write your code here:
  let numbers: number [] = [3,4,5,6,7];

  let num2 = numbers.reverse();
  console.log(num2);

  
}

reverse();

export { reverse };




