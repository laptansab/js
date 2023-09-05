/*
let score = "33abc"
let score = null
let score = undefined
let score = true

const {scored} = req.bosy

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber);
*/
//"33" => 33
//"33sbc" => NaN(not a number)
// tue => 2; false =>0
//null => 0
// undefined = NaN

/*
 let isLoggedIn = "sushil"
 let booleanIsLoggedIn = Boolean(isLoggedIn)

 console.log(booleanIsLoggedIn);
*/
//1 => true
//0 => false
//"" => false
//"sushil" => true

let someNumber = 333;

let strringNumber = String(someNumber);
// console.log(strringNumber);
// console.log(typeof strringNumber);

// ************************** Operation****************

let value = 3;
let negValue = -value;
// console.log(negValue);
// console.log(2+2);
// console.log(2*2);
// console.log(2**2);
// console.log(2**5);
// console.log(2/5);
// console.log(2%3);

let str1 = "hello ";
let str2 = "sushil";

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2); ==> 12
// console.log(1+ "2"); // ==> 12
// console.log("1"+"2"); // ==> 12
// console.log("1" + 2 + 2);// ==> 122
// console.log(1 + 2 + "2");// ==> 32
// console.log(3+((4*5)%3)); // for 3+4*5%3 ==> 5
// console.log(3+(4*(5%3))); // ==> 11

// console.log(+true); // ==> 1
// console.log(+""); // ==> 0

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

let gameCounter = 100
gameCounter++
console.log(gameCounter);

// link to stydy 
// http://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-vconversion
