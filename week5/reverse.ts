"use strict";

// - Create a variable named `numbers`
//   with the following content: `[3, 4, 5, 6, 7]`
// - Reverse the order of the elements of `numbers` with one of the methods below
//    - do it with the built in method
//    - do it with creating a new temp array and a loop
// - Print the elements of the reversed `numbers`:
//   [7, 6, 5, 4, 3]

function reverse(): void {
  // Write your code here:
  let numbers: number [] = [3,4,5,6,7];

  let num2 = numbers.reverse();
  console.log(num2);

  
}

reverse();

export { reverse };

let numbers: number [] = [3,4,5,6,7];

for (let i = numbers.length;  i >= 0; i--) {
  console.log(numbers[i]);
  
}








/**
 * function reverse1(): void {
  // Write your code here:

  let numbers: number [] = [3,4,5,6,7];
  for (let i = 0; i < 1; i++ ) {

    let result = new Array (numbers.length);

    let result2 = numbers.map(x => x);

    // map1 = arrayName.map(x => x);
    
    console.log(result);
    console.log(result2);       
  }
}
reverse1();
export { reverse1 };

 */



/**
 * for (let i = 0; i < 1; i++) {

  let array: number [] = [3,4,5,6,7];

  for (let j = array.length; j >= 0; j--) {

    let myResult = new Array(array.length);

    //console.log(myResult);  
  }
  console.log(array);  
}
 */


/**
 * let numbers1: number [] = [3,4,5,6,7];
  
    let map1 = numbers1.map(x => x);
    
    //console.log(map1);

    for (let x = map1.length; x>=0; x--) {

        console.log(map1[x]);        

    }
 */




  /**
   * function reverseArray (arr) {
    var newArr = [];
    for (var i = 0, j = arr.length - 1; i < arr.length; i++, j--) {      
        newArr[i] = arr[j];
    }   
    return newArr;
}
console.log(reverseArray(["A", "B", "C", "D", "E", "F"]));
   */


//for (let i = 0; j = map1.length; i < 1; i++, j--) {}


/**
 * function sumMatrix(matrix: number[][]) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    var currentRow = matrix[i];
    for (let i = 0; i < currentRow.length; i++) {
      sum += currentRow[i];
    }
  }
  return sum;
}
 */