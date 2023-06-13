'use strict';

// - Create a number variable named `baseNumber` and
//   assign it the value of `123`
// - Create a function called `doubleNumber()` that doubles
//   its number input parameter and returns that doubled value
// - Don't forget to write `export` before the function
// - Log the result of `doubleNumber(baseNumber)` to the console

let baseNumber = 123;

export function doubleNumber (number: number) {
    
    let result = number * 2;
    
    console.log(result);

}

doubleNumber(baseNumber)

