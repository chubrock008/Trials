"use strict";

// - Create an array variable named `firstArrayOfNumbers`
//   with the following content: `[1, 2, 3]`
// - Create an array variable named `secondArrayOfNumbers`
//   with the following content: `[4, 5]`
// - Print "secondArrayOfNumbers is longer" if `secondArrayOfNumbers`
//   has more elements than `firstArrayOfNumbers`
// - Otherwise print: "firstArrayOfNumbers is the longer one"

function compareLength(): void {
  // Write your code here:
  let firstArrayOfNumbers = [1, 2, 3];
  let secondArrayOfNumbers = [4, 5];

  if (firstArrayOfNumbers.length < secondArrayOfNumbers.length) {
    
    console.log('secondArrayOfNumbers is longer');    
    
  } else {
    console.log('firstArrayOfNumbers is the longer one');    
    
  }

}

compareLength();

export { compareLength };