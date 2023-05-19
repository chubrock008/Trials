'use strict';

let favoriteNumber: number = 8

// Store your favorite number in a variable (as a number)
// And print it like this: 'My favorite number is: 8'

function printMyFavoriteNumber(): void {
    let b = String(favoriteNumber);
    let c: string = "My favorite number is: ";
    console.log(c+b);
  
}

printMyFavoriteNumber();

export { printMyFavoriteNumber }

