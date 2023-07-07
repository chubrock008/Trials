"use strict";

// Add "My todos:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText applying an extra 4 space indention

// Expected output:

// My todos:
//  - Buy milk
//  - Download games
//      - Diablo

export function todoPrint() {    
    // write your code here
    let emptySpace = "    "
    let todoText = " - Buy milk\n - Download games\n" + emptySpace + "- Diablo";

  console.log(todoText);
}

todoPrint();