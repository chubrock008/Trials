"use strict";

// 1) Create an object with the following initial values
//    | Key               | Value                   |
//    | ----------------- | ----------------------- |
//    | 978-1-60309-452-8 | A Letter to Jo          |
//    | 978-1-60309-459-7 | Lupus                   |
//    | 978-1-60309-444-3 | Red Panda and Moon Bear |
//    | 978-1-60309-461-0 | The Lab                 |
// 2) Assign the type Record<string, string> to the created object
// 3) Print all the key-value pairs in the following format:
//
// A Letter to Jo (ISBN: 978-1-60309-452-8)
// Lupus (ISBN: 978-1-60309-459-7)
// Red Panda and Moon Bear (ISBN: 978-1-60309-444-3)
// The Lab (ISBN: 978-1-60309-461-0)
//
// 4) Remove the key-value pair with key "978-1-60309-444-3"
// 5) Remove the key-value pair with value The Lab
// 6) Add the following key-value pairs to the map
//    | Key               | Value                 |
//    | :---------------- | :-------------------- |
//    | 978-1-60309-450-4 | They Called Us Enemy  |
//    | 978-1-60309-453-5 | Why Did We Trust Him? |
// 7) Print whether there is an associated value with key "478-0-61159-424-8" or not
// 8) Print the value associated with key "978-1-60309-453-5"

// The full output of your `main` method should be the following:
//
// A Letter to Jo (ISBN: 978-1-60309-452-8)
// Lupus (ISBN: 978-1-60309-459-7)
// Red Panda and Moon Bear (ISBN: 978-1-60309-444-3)
// The Lab (ISBN: 978-1-60309-461-0)
// false
// Why Did We Trust Him?

export function mapIntroduction2() {
  // write your code here
  type input = Record <string, string>;

  let myObject: input = {
    '978-1-60309-452-8' : 'A Letter to Jo',
    '978-1-60309-459-7' : 'Lupus',
    '978-1-60309-444-3' : 'Red Panda and Moon Bear',
    '978-1-60309-461-0' : 'The Lab'
  }

  let printOut = Object.values(myObject) + ' ISBN: ' + Object.keys(myObject) //'myObject value + (ISBN: myObject key)';
  // console.log(printOut);
  

  for (const [key, value] of Object.entries(myObject)) {
    // console.log(`${value} ${' (ISBN: '} ${key} ${')'}`);
    console.log(value + " (ISBN: "+ key + ")");
  } // method 1;

  Object.entries(myObject).forEach(([key, value]) => {
    // console.log(value + " (ISBN: " + key +")");
  }) // method 2;

  delete myObject['978-1-60309-444-3'];

  Object.entries(myObject).forEach(([key,value]) => { // so i used the array method, by applying the Object.entries(objName). 
     if (value === "The Lab") {
      return key;
      
     } else {
      delete myObject[key]      
     }    
  })

  myObject['978-1-60309-450-4'] = 'They Called Us Enemy';
  myObject['978-1-60309-453-5'] = 'Why Did We Trust Him?';  

  console.log(myObject.hasOwnProperty("478-0-61159-424-8")); // logs a boolean showing if there's a value attached to the key in question.

  console.log(myObject["978-1-60309-453-5"]);  
  
}

mapIntroduction2();