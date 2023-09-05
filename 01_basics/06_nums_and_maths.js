const score = 400 
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.8958

// console.log(otherNumber.toPrecision(4));

const hundres = 100000

// console.log(hundres.toLocaleString('en-IN'))

//+++++++++++++++++++++ Math ++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(4.5525));
// console.log(Math.ceil(4.5525));
// console.log(Math.floor(4.5525));

// console.log(Math.min(4,.5,88,25));
// console.log(Math.max(4,.5,88,25));

// console.log((Math.random()*10) + 1);
const min = 1
const max = 6

const value = Math.floor(Math.random() * (max - min +1)) + min
console.log(value);