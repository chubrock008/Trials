'use strict';

// - Create a function called `calculateFactorial()`
//   that returns the factorial of its input
// - Don't forget to write `export` before the function
//
// - Example: calculateFactorial(5) should return 120, because 1 * 2 * 3 * 4 * 5 = 120

export function calculateFactorial(x: number) {

    let factorial = 1;

    for (let i = 1;  i <= x; i++) {

        factorial *= i; 

    }

    console.log(factorial);
    

}

calculateFactorial(5);