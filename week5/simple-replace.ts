"use strict";

// Below is a famous sentence from the beginning of a famous movie, but it has a problem.
// Someone played a prank on us and replaced the word "galaxy" with "dishwasher".
// Please fix the sentence so that the code prints "In a galaxy far, far away" to the console

function simpleReplace() {
  let example = "In a dishwasher far, far away";

  // write your code here
  // 
  //create index after each word 
  // call the index and replace with new one

  let example2 = example.replace((/diswasher/gi), 'galaxy');


  console.log(example);
  console.log(example2);
  
}

simpleReplace();

export { simpleReplace };