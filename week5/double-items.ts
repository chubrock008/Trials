"use strict";

// - Create an array variable named `drinks` with the following content:
//   `['Gin', 'Whiskey', 'Wine', 'Beer']`
// - Double all the strings in the array, and print the result.
// - Use a built in array method instead of a loop
// - It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`

function doubleItems(): void {
  // Write your code here:
  let drinks:string [] = ['Gin', 'Whiskey', 'Wine', 'Beer'];

  let map1 = drinks.map(x => x+x);
    console.log(map1);
}

doubleItems();

export { doubleItems };