"use strict";

// - Create an array variable named `orders`
//   with the following content: `["first", "second", "third"]`
// - Swap the first and the third element of `orders` programmatically
// - Print the swapped array into the console:
//   [third, second, first]

function swapElements(): void {
  // Write your code here:
  let orders: any[] = ["first", "second", "third"];
  [orders[0], orders[2]] = [orders[2], orders[0]];

  console.log(orders);  
}

swapElements();

export { swapElements };