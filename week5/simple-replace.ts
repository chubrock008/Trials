"use strict";

// Below is a famous sentence from the beginning of a famous movie, but it has a problem.
// Someone played a prank on us and replaced the word "galaxy" with "dishwasher".
// Please fix the sentence so that the code prints "In a galaxy far, far away" to the console

function simpleReplace() {
  // write your code here
  
  let example = "In a dishwasher far, far away";
  let newExample = example.replace((/Dishwasher/gi), 'galaxy');

  //console.log(example);
  console.log(newExample);  
}

simpleReplace();

export { simpleReplace };