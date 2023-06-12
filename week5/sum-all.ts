"use strict";

// - Create an array variable named `numbers`
//   with the following content: `[3, 4, 5, 6, 7]`
// - Print the sum of the elements of `numbers`

function sumAll(): void {
  // Write your code here:
  let numbers: number [] = [3, 4, 5, 6, 7];

  let sum: number = 0;

/**
 * for (let i = 0; i<numbers.length; i++) {

    sum += numbers[i]; // sum = sum + numbers[i]


}
 */

numbers.forEach((number) => {
    sum += number
})


console.log(sum);

}

sumAll();

export { sumAll };


