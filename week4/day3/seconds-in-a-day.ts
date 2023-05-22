'use strict';

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

function secondsInADay(): void {
  // Write your code here:

  let timeInHours: number = 14;
  let timeInMinutes: number = 34;
  let timeInSeconds: number = 42;
  let totalDailyHours: number = 24;
  
  let hoursToSeconds: number = timeInHours * 60 * 60;
  let minutesToSeconds: number = timeInMinutes * 60;
  let totatTimeInSeconds: number = (hoursToSeconds + minutesToSeconds + timeInSeconds);
  let totalSecondsInDay: number = totalDailyHours * 60 * 60;

  console.log(totatTimeInSeconds);
  console.log(totalSecondsInDay);  
  console.log(totalSecondsInDay-totatTimeInSeconds);
}

secondsInADay();

export {secondsInADay }