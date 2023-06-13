'use strict';

// - Create a string variable named `typo` and assign the value `Chinchill` to it
// - Write a function called `appendAFunc()` that gets a string as an input,
//   appends an 'a' character to its end and returns with a string
// - Don't forget to write `export` before the function
// - Print the result of `appendAFunc(typo)` to the console

let typo: string = 'Chinchill';

export function appendAFunc(input: string) {

    console.log(input + 'a');    

}

appendAFunc(typo);