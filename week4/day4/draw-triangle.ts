'use strict';

// change the number here to test out different sizes
const height: number = 4;

// Write a program that draws a triangle of the specified height
//
// Example output when height is 4:
//
// *
// **
// ***
// ****

/**
 * dont really know how i solved this, all i know is that i copied most
 * of the code from the web and i edited.
 * there are two for statements and my guess is that one is for making the
 * outer shell (i.e 'the height'). the 2nd 'for loop' was used to generate 
 * the stars in the shell. FYI this is a guess, will check it out with more 
 * iterations.
 */

export function drawTriangle(height: number): void {

  for (let index = 1; index <= height; index++) { //for the shell(height)
          let result: string = '';
          for (let j = 1; j <= index; j++) { //for the contents of the shell
            result = result + '*'; //result += ' *' (better way to write);                                  
          }
    console.log(result);    
  }
}
drawTriangle(height)




