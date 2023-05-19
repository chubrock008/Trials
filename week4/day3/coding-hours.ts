'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

function codingHours(): void {
  let a = 6; // daily coding hours.
  let b = 17; // semester lenght in weeks.
  let c = (5*a); // weekly coding hours.
  let d = 52; // updated working weeks.

  console.log((b*c), "hours");
  console.log((b*d),"hours");

}

codingHours();

export { codingHours }