"use strict";

// Write a function that joins the two lists by matching one girl with one boy into a new list
// If someone has no pair, he/she should be added to the list on his/her own
// Expected output: ["Eve-Joe", "Ashley-Fred", "Claire-Tom", "Kat-Todd", "Jane-Neef", "Jeff"]

// write your code here

const girls: string[] = ["Eve", "Ashley", "Claire", "Kat", "Jane"];
const boys: string[] = ["Joe", "Fred", "Tom", "Todd", "Neef", "Jeff"];



function makeMatches (girls :string[], boys :string[]) {
    let makeMatches: string[] = [];

    for (let x=0; x < boys.length; x++) {
        
        if (girls[x] != undefined) {        
            makeMatches.push(girls[x] + '-' + boys[x]); // so what i want is to push each iteration into an array/object and log them together as one array/object element;
        } else {
            makeMatches.push(boys[x])
        }
    }
    console.log(makeMatches);    
}

(makeMatches(girls, boys));

export { makeMatches };








