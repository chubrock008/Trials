"use strict";

// Create an empty object where the keys are integers and the values are characters d
// Assign the type Record<number, string> to the object d
// Print out whether the object is empty or not d
// Add the following key-value pairs to the object
//  | Key | Value |
//  | 97  | a     |
//  | 98  | b     |
//  | 99  | c     |
//  | 65  | A     |
//  | 66  | B     |
//  | 67  | C     |
// Print all the keys
// Print all the values
// Add value D with the key 68
// Print how many key-value pairs are in the object
// Print the value that is associated with key 99
// Remove key 97 from the object
// Print whether there is an associated value with key 100 or not
// Remove all the key-value pairs
// Print how many key-value pairs are in the object
//
// Expected output
//
// true
// [ '65', '66', '67', '97', '98', '99' ]
// [ 'A', 'B', 'C', 'a', 'b', 'c' ]
// 7
// c
// false
// 0

export function mapIntroduction1() {
  // write your code here
  
  type input = Record <number, string>; // this describes the type for the input.

  let myObject: input = {97: 'a', 98: 'b', 99: 'c', 65: 'A', 66: 'B',  67: 'C'}; // the type of the expected input is after the object name.

  if (Object.keys(myObject).length != 0) {
      console.log('Object is not empty');
  } 
  else {
      console.log('Object is empty');    
  }

  console.log(Object.keys(myObject));
  console.log(Object.values(myObject));

 myObject [68] = 'D';     // when using numbers as keys, i think its better to use square brackets as the addition method.
 // console.log(Object.keys(myObject));
 console.log((Object.keys(myObject)).length); 
 console.log("The result is: " + myObject[99]);
 // console.log((Object.values(myObject[99])));

 delete myObject [97];
  
console.log(myObject.hasOwnProperty(100));

for (var val in myObject) {
  delete myObject[val];  // the val can be any name eg mop, head, etc
  // console.log(myObject[index]);
  
}

// myObject = {}; // is also a solution to deleting the entire object elements.

console.log((Object.keys(myObject)).length);

}

mapIntroduction1();
