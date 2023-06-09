"use strict";

// Create an empty array which will contain names (strings)
// Assign the type string[] to the array
// Print out the number of elements in the array
// Add "William" to the array
// Print out whether the array is empty or not
// Add "John" to the array
// Add "Amanda" to the array
// Print out the number of elements in the array
// Print out the 3rd element
// Iterate through the array and print out each name one by one
// Iterate through the array again and print all values with an index number
// Remove the 2nd element
// Iterate through the list in a reversed order and print out each name
// Remove all elements
// Print out the number of elements in the list

// The result should look like this in the console:
// 0
// false
// 3
// Amanda
// William
// John
// Amanda
// 1. William
// 2. John
// 3. Amanda
// Amanda
// William
// 0

export function listIntroduction1() {
  // add your code here
  let newArray: string [] = [];
  console.log(newArray.length);

  newArray.push('William');
  if (newArray.length > 0) {
    console.log("it is not empty");
  }

  newArray.push("John");
  newArray.push("Amanda");
  console.log(newArray.length);
  console.log(newArray[2]);  

for (let x=0; x < newArray.length; x++) {
    
    let index = newArray.indexOf(newArray[x]);
    let value = newArray[x];

    console.log(index + '. ' + value);        
  }

// Iterate through the list in a reversed order and print out each name
newArray.splice(1, 1);
// console.log(newArray.reverse());
let reverseArray: string [] = newArray.reverse();

reverseArray.forEach(element => {
  console.log(element);  
});

newArray.splice(0,2);
console.log(newArray.length);
  
}

listIntroduction1();