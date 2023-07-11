"use strict";

// Things are a little bit messed up here
// Your job is to decode the "notSoCrypticMessage" by using the "lookupTable" object
// Assemble the fragments into the "result" variable

export function heWillNever() {
  let result = "";
  const notSoCrypticMessage: number[] = [
    1, 12, 1, 2, 11, 1, 7, 11, 1, 49, 1, 3, 11, 1, 50, 11,
  ];

  const lookupTable: Record<number, string> = {
    7: "run around and desert you",
    50: "tell a lie and hurt you ",
    49: "make you cry, ",
    2: "let you down",
    12: "give you up, ",
    1: "Never gonna ",
    11: "\n",
    3: "say goodbye ",
  };

  // write your code here
  /**
   * function compareNumbers (a: number, b: number) {
    return a - b; // this function helps me sort through numbers in arithmetic progression;
  }  
    let sortedMessage = notSoCrypticMessage.sort(); // sorts the elements in simple order
    sortedMessage = notSoCrypticMessage.sort(compareNumbers); // sorts the elements in arithmetic order with the help of the function compareNumbers  
   */    
  for (let x=0; x <notSoCrypticMessage.length; x++) {
    
    result = result + lookupTable[notSoCrypticMessage[x]];
    
  }
  console.log(result);  
  
  
  
}

heWillNever();