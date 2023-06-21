"use strict";

// "Saturn" is missing from the planetList below
// Insert it into the correct position (should go between Jupiter and Uranus)
// Create a function called "putSaturn()" which has an array parameter and returns the correct array

const planetList: string[] = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Uranus",
  "Neptune",
];

export function putSaturn(planetList: string[]) {
    planetList.splice(5, 0, 'Saturn');
    console.log(planetList); 
    
}

putSaturn(planetList);

{ putSaturn };