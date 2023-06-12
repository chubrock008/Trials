let strArr1: string[] = ['Hello', 'world']; //creates an array with the listed contents;
let strArr2: Array<string> = ['Hello', 'world']; // another syntax for creating arrays like above

let anyArr: any[] = ['Hello', 10, true]; // this allows the array to contain any combination of data

// A tupple is a special type of array that lets you specify what type array can carry 

let myTupple: [string, number] = ['Hi', 10]; // this means only strings and numbers are allowed in the array

let word: any[] = [];

//word[4] = CR008;
myTupple[1] = 100;
console.log(myTupple[1]);

word[0] = 'rainbow';
word[3] = 'ginseng';
word[4] = 'cocoa';





