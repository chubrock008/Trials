// simple array

/**
 * let arr = [6,7,8]
console.log(arr);
console.log(Object.keys(arr));
 */

//let obj = { 0: 50, 1: 60, 2: function () {}, };

//console.log(Object.keys(obj));



// getFoo is a non-enumerable property

/**
 * let myObj = Object.create(
    {}, 
    {
    getFoo: {
        value() {
            return this.foo;
        }
    }
});

myObj.foo = 1;
console.log(myObj);

// console.log(Object.keys("fatcat"));
// console.log(Object.keys(myObj));
 */


let obj1 = { 0: 50, 1: 60, 2: function () {}, 3: "abracadabra", testIndex: 99, 5: 33, app:54};

//console.log(Object.keys(obj1));

//console.log(Object.values(obj1));

let myObj = Object.create(
    {}, 
    {
    getFoo: {
        value() {
            return this.foo;
        }
    }
});

myObj.foo = 1;
//console.log(myObj);

// console.log(Object.keys(myObj));
// console.log(Object.values(myObj));

let arr2 = [6,7,8]

//arr2.pop();
//console.log(arr2);


// console.log(arr2.hasOwnProperty(1));

// console.log(myObj.hasOwnProperty("foo"));

// let myDate = new Date(); // this logs the current time
// console.log(myDate);
// console.log(myDate.getUTCMonth());

let personPrototype = {
    greet() {
        return("hello");  // return = console.log()
        
    },
}

let carl = Object.create(personPrototype);

//console.log(personPrototype.greet);
// console.log(carl.greet());

//let x = Object.create(null);
//console.log(x);

let a, b, b1, c, d, rest, pop, push;
[a, b] = [10, 20];
let arr3 = [a, b, ...rest] = [10, 20, 30, 40, 50, 70, , 90];

// console.log([a,b,...arr3]);
// console.log(a,b,c);

// [a,b] = [a*a, b*b];
// console.log([a,b]);

// console.log(rest);
// console.log(arr3);

let arr4 = [a, b, ...[c,d]] //= [10, 20, 30, 40, 50, 70, , 90];
// console.log([c,d]);

let mixOfWords = {};
mixOfWords = {a: 1, b: 2}
// console.log(mixOfWords);
// console.log(Object.keys(mixOfWords));

mixOfWords = {foodId: 100, nameId: 2, 1: 'yelp', 0: 'Geralt & Roach'}

// console.log(mixOfWords);
// console.log(typeof(mixOfWords));

let firstName: string = 'chuck';
let lastName: string = 'bass';
let docNumber: Number = 0;
let duration: Number = 0
let group: string = 'A'

let mixOfWhat = {
    firstName: firstName,
    lastName: lastName,
    docNumber: docNumber,
    duration: duration,
    group: group,
 };

 let jug = {firstName, lastName, docNumber, duration, group};
  // console.log(jug);
  // console.log(Object.keys(jug));
  // console.log(Object.values(jug));
 
 
// console.log(mixOfWhat);
// console.log(Object.keys(mixOfWhat));
// console.log(Object.values(mixOfWhat));

// let clonedObj = {...mixOfWords};
// console.log(clonedObj);
// console.log(mixOfWords);

//const { a: a1 = aDefault, b = bDefault } = obj;
// let a: number = 1, b = 6, a1= 7;
// let obj = { a: a1 = b + b, b = a1 + (b - a) };

let mixOfWords2 = {a: 1, b: {c: 2}}
// console.log(Object.keys(mixOfWords2));
// console.log(Object.values(mixOfWords2));
c=6;
// console.log(Object.keys(mixOfWords2.b));

let newObj = {b,c}; // so we cant put values directly into objects, to do that,we will have to add ':' to put into the object array.
// console.log(Object.keys(newObj));
// console.log(Object.values(newObj));

let houseHoldItems = ['Table', 'Chair', 'fan', 1];

// console.log(Object.keys(houseHoldItems));
// console.log(houseHoldItems);

let k;
[k = 30] = [];

let obj = {a:1, b: 2, c: 3};

// let keys = Object.keys(obj);
// let propNames = Object.getOwnPropertyNames(obj);
// let amax = Object.getOwnPropertyDescriptors(obj);
// let bmax = Object.values(obj);

// console.log(keys);
// console.log(propNames);
// console.log(amax);
// console.log(bmax);
for(let property in obj) {
    console.log(`obj.${property}`); 
}

obj = {a: 5, b: 6, c: 7};
// console.log(obj);


let o = { p: 42, q: true };
let { p: foo, q: bar } = o;
console.log(foo); // 42
console.log(bar); // true










