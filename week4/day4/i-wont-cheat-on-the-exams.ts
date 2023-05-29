'use strict';

// Create a program that writes this line 100 times:
// "I won't cheat on the exam!"

function iWontCheatOnTheExams(): void {
  // Write your code here:
  for (let i: number = 0; i < 101; i++) {
    console.log("I won't cheat on the exam!"); // Prints the numbers from 0 to 99
  }

}

iWontCheatOnTheExams();

export { iWontCheatOnTheExams }