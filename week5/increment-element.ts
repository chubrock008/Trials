"use strict";

// - Create a variable named `numbers`
//   with the following content: `[1, 2, 3, 4, 5]`
// - Increment the third element simply by accessing it
// - Log the third element to the console

function incrementElement(): void {
  // Write your code here:
  let numbers: number [] = [1, 2, 3, 4, 5];
    
    numbers[2]= ++numbers[2];

    console.log(numbers[2]);    
    
}

incrementElement();

export { incrementElement };




