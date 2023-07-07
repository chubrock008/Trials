"use strict";

// While saving this quote a disk error has occured. Please fix it!
// Insert the words "always takes longer than" between the words "It" and "you"!

export function takesLonger() {
  let quote = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;
  
  // write your code here
  let addedQuote = "always takes longer than";
  let arrayOfQuote = quote.split(" ");

  arrayOfQuote.splice(3, 0, addedQuote);

  quote = arrayOfQuote.join(" "); //i added the space in the parenthesis so the elements arent seperated by a comma. if we put a special character within the parenthesis, that will be the seperator
  console.log(quote);
    
}

takesLonger();