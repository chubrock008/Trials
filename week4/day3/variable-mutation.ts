'use strict';

function variableMutation(): void {
  let a: number = 3;
  // increase the value of variable "a" by 10
    a = a+10;
  console.log(a);

  let b: number = 100;
  // decrease the value of b by 7

  b = b - 7;
  console.log(b);

  let c: number = 44;
  // double the value of c

  c = c * 2;  //or c *= 2 (gives same result)
  console.log(c);
  
  let d: number = 125;
  // divide the value of d by 5

  d *= 5; // or d = d/5;
  console.log(d);

  let e: number = 8;
  // cube the value of e

  e = e * e * e;
  console.log(e);

  let f1: number = 123;
  let f2: number = 345;
  // determine if f1 is greater than f2 (print as a boolean)

  let fg: Boolean = true;
  let fl: boolean = false; 

  if (f1 > f2){
    console.log(fg);    
  } else {
    console.log(fl);    
  }


  let g1: number = 350;
  let g2: number = 200;
  // determine if double the value of g2 is greater
  // than g1 (print as a boolean)
  let g2Greater: boolean = true;
  g2 = g2 * 2;
  if (g2 > g1) {
    console.log(g2Greater);    
  }

  let h: number = 1357988018575474;
  // determine if h has 11 as a divisor (print as a boolean) 
   
  if (h % 11 === 0) {
    console.log(`Yes it is ${true} 11 is a divisor of 'h'`);    
  } else {
    console.log("No 11 is not a divisor of 'h'");    
  }  
  

  let i1: number = 10;
  let i2: number = 3;
  // determine if i1 is greater than i2 squared and smaller than i2 cubed
  // (print as a boolean)
  let i2Squared: number = i2 * i2;
  let i2Cubed: number = i2Squared * i2;
  if (i1>i2Squared && i1<i2Cubed) {
    console.log("Yes the condition is true");    
  } else {
    console.log("No the condition is false");    
  }
//solution 2 gives answer in boolean
  let j: number = 1521;
  // determine if j is divisible by 3 or 5 (print as a boolean)
  if (j/3===0) {
    console.log("j is divisible by 3");    
  }
  else if (j/5===0) {
    console.log("j is divisible by 5");    
  }
  else {
    console.log("None are divisors");
    
  }

  let k: number = 1521;
  // determine if j is divisible by 3 or 5 (print as a boolean)
  let k3: Boolean = true;
  let k5: Boolean = true;
  if (k%3===0) {
    console.log(k3);    

  } else if (k%5===0){
    console.log(k5);    
  }
}

variableMutation();

export { variableMutation }