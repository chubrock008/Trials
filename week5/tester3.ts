function getAverage (a :number, b :number) {

    let average = (a+b)/2;
    //console.log(average);
    return average;

}

getAverage(5,6);

console.log(getAverage(5,6));


//let myResult = getAverage(5,6)


for (var i = 0; i < 10; i++) {
    // capture the current state of 'i'
    // by invoking a function with its current value
    (function (i) {
      setTimeout(function () {
        console.log(i);
      }, 100 * i);
    })(i);
  }