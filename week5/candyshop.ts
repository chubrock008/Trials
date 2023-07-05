"use strict";

const sweets: any[] = ["Cupcake", 2, "Brownie", false];

// Accidentally we added "2" and "false" to the sweets array
// Your task is to change the "2" to "Croissant" and the "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called repairSweets() which takes an array as a parameter
// and returns the fixed array

// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

let firstSwap = 'Croissant';
let secondSwap = 'Ice cream';

function repairSweets (firstSwap :string, secondSwap :string) {
    sweets[1] = firstSwap;
    sweets[3] = secondSwap;
    console.log(sweets);
}

repairSweets(firstSwap, secondSwap)

export { repairSweets };