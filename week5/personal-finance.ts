"use strict";

// Create an array with the following values: 500, 1000, 1250, 175, 800 and 120
// Create an application which prints out the answers to the following questions:
// - How much did we spend altogether?
// - Which was our greatest expense?
// - Which was our cheapest spending?
// - What was the average amount of our spendings?
//
// Expected output
//
// 3845
// 1250
// 120
// 640.8333333333334

export function personalFinance() {
  // write your code here
  let expenseArray: number[] = [500, 1000, 1250, 175, 800, 120];
  let totalExpenditure: number = 0;
  let greatestExpense: number = 0;
  let cheapestSpending: number = 0;
  let getAverage: number = 0;

  for (let x=0; x<expenseArray.length; x++) {
    getAverage += expenseArray[x];

  }
  let averageAmount: number = getAverage/expenseArray.length;
  
  for (let x=0; x<expenseArray.length; x++) {
    totalExpenditure += expenseArray[x];
    if(expenseArray[0] < expenseArray[x]){
        expenseArray[0] = expenseArray[x];
        greatestExpense = expenseArray[0];

    }   
  }

  for (let x=0; x<expenseArray.length; x++) {
    if(expenseArray[0] > expenseArray[x]){
        expenseArray[0] = expenseArray[x];
        cheapestSpending = expenseArray[0];
    }   

  }  

  console.log(totalExpenditure);  
  console.log(greatestExpense);
  console.log(cheapestSpending);
  console.log(averageAmount);

}

personalFinance();