"use strict";

// - Create an array variable named `numbers`
//   with the following content: `[1, 2, 3, 8, 5, 6]`
// - Change the value of the fourth element (8) to 4
// - Print the fourth element

function changeElement(): void {
  // Write your code here:
  let numbers: number[] = [1, 2, 3, 8, 5, 6]

  numbers[3] = 4;
  console.log(numbers[3]);  
}

changeElement();

export { changeElement };

//Numbers.push(1);