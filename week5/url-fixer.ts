"use strict";

// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots".
// Also, the URL is missing a crucial component, find out what it is and insert it too!

export function urlFixer() {
  let url = "https//www.reddit.com/r/nevertellmethebots";
 
  // write your code here
    let word = 'odds'; 
    let missingPart = 'https:';
    let url2 = url.substr(0, 38);
    
    let newUrl2 = url2.concat(word);
    url = newUrl2 

    let url3 =url.substring(5, 42);
    let newUrl3 = missingPart.concat(url3);
    
    url = newUrl3;
   
  console.log(url);
}

urlFixer();