const size: number = 4;

// Write a program creates that a two-dimensional array (of numbers)
// of the specified size with the value of 1 on the main diagonal
// and the value of 0 everywhere else.
// Print the 2d array into the output
//
// Example:
//
// 1 0 0 0
// 0 1 0 0
// 0 0 1 0
// 0 0 0 1






export function createMatrix(size: number): number[][] {
    // write your code to create an n×n matrix
    // of the given size here
    
    for (let i =0; i<size; i++) {
        let array1 = new Array (size);
    
        for (let j = 0; j < size; j++) {
    
            if (i !== j) {
                array1[j] = 0;
            } else {
                array1[j] = 1;
            }
        }       
        return array1;  
    }  
     
  }
  
  export function printMatrix(matrix: number[][]): void {
    // write your code to print the given matrix
    // into the (standard) output here
  }




/**
 * for (let j=0; j<size; j++) {

        array1[j] = [];

        if (j===i) {
            array1[j] = [1];
        } else {
            array1[j] = [0];
        }   

    }
 */

//============================================



// array1.push([]);
// array1[i].push(0);


//    let array1 = new Array(size)
//    for (let i = 0; i < array1.length; i++) {

//     let result = '';

//     for (let j = 0; j < array1.length; j++) {

//         result += ' ';
//         //when 0<i<height
//         // when i =j && i>0 || i<height 
        
//         if (i!=j ) {
//             result += 'o';

//         } else {
//             result += '1';
//         }
        
        
        
//     }

    // console.log(result);
    //console.log(array1);
    
    
    

// }


   //let array1:number [] []  =[];

//  array1[0] =[1];
//  array1.push([2]);
    
    //console.log(array1);
    
   