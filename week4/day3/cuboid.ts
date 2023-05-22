'use strict';

// Write a program that stores 3 sides of a cuboid as variables (numbers)
// The program should write the surface area and volume of the cuboid.
//
// Set the 3 sides to 10.4, 13.5, 8.2 and your program should
// produce the following output:
//
// Surface Area: 672.76
// Volume: 1151.28

function cuboid(): void {
    let side1:number = 10.4; //used as lenght
    let side2: number = 13.5; // used as width
    let side3: number = 8.2; // used as height

    let surfaceArea: number = 2*((side1*side2)+(side2*side3)+(side1*side3)); 
    let volume: number = (side1*side2*side3); 
    
    console.log(surfaceArea);
    console.log(volume);  
        

}

cuboid();

export { cuboid }