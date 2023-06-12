"use strict";

// - Create a variable named `numbers` with the following content: `[4, 5, 6, 7]`
// - Log each the element of `numbers` to the console in separate lines*
//   * hint: use a loop, console.log(numbers) won't cut it
// - bonus for using the correct built in array method

function printAll(): void {
  // Write your code here:
  let numbers: number[] = [4, 5, 6, 7];

  numbers.forEach(element => {
    console.log(element);
    
  });
}

printAll();

export { printAll };


