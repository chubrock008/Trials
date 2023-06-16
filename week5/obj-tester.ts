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

// console.log(rest);
// console.log(arr3);

let arr4 = [a, b, ...[c,d]] //= [10, 20, 30, 40, 50, 70, , 90];
// console.log([c,d]);

let mixOfWords = {};
mixOfWords = {a: 1, b: 2}
console.log(mixOfWords);
console.log(Object.keys(mixOfWords));

mixOfWords = {foodId: 100, nameId: 2, 1: 'yelp', 0: 'Geralt & Roach'}

console.log(mixOfWords);
console.log(typeof(mixOfWords));

let mixOfWhat = {name: String, docNumber: Number, duration: Number, class: Number}

console.log(mixOfWhat.name);




