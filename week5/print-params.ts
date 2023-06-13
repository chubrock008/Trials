'use strict';

// - Create a function called `printParams`
//   which logs to the console the input parameters in separate lines
//   (can have multiple number of arguments)
// - Don't forget to write `export` before the function
// 
// Example calls:
// - printParams('one', 'two');
// - printParams(1, 2, 3);
// - printParams();

export function printParams(x: string, y: string) {
    console.log(x,y);
    
}

printParams('one', 'two')


export function printParams1(a:number, b:number, c:number) {
    console.log(a,b,c);   

}

printParams1(1, 2, 3)



export function printParams2(a?:any) {
    console.log(a);
    
}
printParams2()
