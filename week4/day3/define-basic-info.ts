'use strict';

// Define several things as a variable, then print their values
// Your name as a string
// Your age as a number
// Your height in meters as a number
// Whether you are married or not as a boolean

function printBasicInfo(): void {
    let name: string = 'chubrock';
    let age: number = 34;
    let height: number = 1.88;
    let married: boolean = true;

    console.log(name);
    console.log(age);
    console.log(height);
    
    
    if (married) {
        console.log("Yes i'm married");        
    } else {
        console.log("No i'm single");
        
    }
    

}

printBasicInfo();

export { printBasicInfo }