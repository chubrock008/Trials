"use strict";

// -  Create a two dimensional list (of strings)
//    which can contain the different shades of specified colors
// -  In `colors[0]` store the shades of green:
//    `"lime", "forest green", "olive", "pale green", "spring green"`
// -  In `colors[1]` store the shades of red:
//    `"orange red", "red", "tomato"`
// -  In `colors[2]` store the shades of pink:
//    `"orchid", "violet", "pink", "hot pink"`
// - Print the colors in the following format:
//
//   lime, forest green, oline, pale green, spring green
//   orange red, red, tomato
//   orchid, violet, pink, hot pink

function colors(): void {
  // Write your code here:
  let a:string [] = ["lime", "forest green", "olive", "pale green", "spring green"];
  let b:string [] = ["orange red", "red", "tomato"];
  let c:string [] = ["orchid", "violet", "pink", "hot pink"];
  
  
  let colors:string [] []  =[];
  
  colors.push(a)
  colors.push(b)
  colors.push(c)
  //console.log(colors); //this produces the colors total array;

    for (let i = 0; i < colors.length; i++) {
        
    //    console.log(colors[i]+ ' ');  // the addition of the paranthesis converted the output to a string. the function below does the same but in a better way;

        console.log(colors[i].toString());
        
        
    }
  

}

colors();

export { colors };