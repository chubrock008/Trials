'use strict';

// Write a program that prints the numbers from 1 to 100 to separate lines
// but for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”
// For numbers which are multiples of both three and five print “FizzBuzz”

export function fizzBuzz() {
  // write your code here for Gradescope testing
  for (let index = 1; index <= 100; index++) {
    //const element = array[index];
    if (index%3 === 0 && index%5 === 0 ) {
      console.log("FizzBuzz");      
    }
    else if (index%3 === 0 ) {
      console.log("Fizz");      
    }
    else if (index%5 === 0) {
      console.log("Buzz");      
    }    
    else {
      console.log(index);      
    }
  }
}

fizzBuzz()