"use strict";

// - Create an array variable named `animals`
//   with the following content:
//   `["koal", "pand", "zebr", "anacond", "bo", "chinchill", "cobr",
//     "gorill", "hyen", "hydr", "iguan", "impal", "pum", "tarantul", "piranh"]`
//
// - Add an `"a"` at the end of all elements (use a loop!)
// - Print the 'fixed' array to the console:
//   [koala, panda, zebra, anaconda, boa, ..., puma, tarantula, piranha]

function appendA(): void {
  // Write your code here:
  let animals: string [] = ["koal", "pand", "zebr", "anacond", "bo", "chinchill", "cobr",
  "gorill", "hyen", "hydr", "iguan", "impal", "pum", "tarantul", "piranh"];

  animals.forEach(element => { console.log(element+ 'a');
  });
}

appendA();

export { appendA };