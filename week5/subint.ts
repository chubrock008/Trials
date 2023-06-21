"use strict";

// Create a `findMatchingIndexes` function that takes a number (a digit)
// and an array of numbers as parameters and returns the indices of the numbers in the array
// which contain the given digit or returns an empty array
// (if no number in the array contains the given digit)
// Don't forget to write `export` before the function

// Example
// console.log(findMatchingIndexes(1, [1, 11, 34, 52, 61]));
// should print: `[0, 1, 4]`

// console.log(findMatchingIndexes(9, [1, 11, 34, 52, 61]));
// should print: '[]'

export function findMatchingIndexes(digit: number, firstArrayOfNumbers: number[]) {
    //let found: number = b.find(element => element = 1)
    //console.log(numberListToCheck.findIndex(element => element == digit));
    //a = 1;
    //b = [1, 11, 34, 52, 61];
    //let found = b.find(element => element = a)
    //console.log(found);
    // array.join(separator)

    let words = firstArrayOfNumbers.toString();

    let check = digit.toString();
    
    //let output: [] = [];

    let result = words.indexOf(check); 

       
    
    for (let index = 0; index < firstArrayOfNumbers.length; index++) {
        
        if (index!=digit) {

            console.log(index);
            
        }
        
        //let output = words.indexOf(check);
        //let output = firstArrayOfNumbers.indexOf(digit);
        //output.push()        
        
        //console.log(output);        
        
    }

    //console.log(words);
    //console.log(result);
    //console.log(found);   
    
}

findMatchingIndexes(1, [1, 11, 34, 52, 61]);