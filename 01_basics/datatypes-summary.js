//  Primitive

// 7 catagory : String, Number, Boolean, Null, Undefined, Symbol, BigInt


// is js static or dynamic typed?
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 1234567897897979478787n // BigInt


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"]
let obj ={
    name: "sushil",
    age: 23,
}
const myFunction = function () {
    console.log("Hello World");
}

// https://262.ecma-international.org/5.1/#sec-11.4.3