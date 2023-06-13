'use strict';

// Write a function called `sum()` that returns the sum of numbers
// from zero to the given parameter (as a number)
// Don't forget to write `export` before the function
//
// Example: sum(5) should return 15, because 0 + 1 + 2 + 3 + 4 + 5 = 15

export function sum(x:number) {
    
    let sum = 0;

    for (let i = 0; i <= x; i++) {

        sum += i;
    }
    console.log(sum);
    
}

sum(5);