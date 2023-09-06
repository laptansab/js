// array

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const myHeros = ["Shaktiman", "naagraj"];
const myArray2 = new Array(1, 2, 3, 4, 5);
// for (let i = 0; i < myArray2.length; i++) {
//     const element = myArray2[i];
//     console.log(element);
// }
// console.log(myArray[0]);

// Array Method

// myArray.push(10)
// console.log(myArray);
// myArray.pop()
// console.log(myArray);
// myArray.unshift(12)
// console.log(myArray);
// myArray.shift()
// console.log(myArray);

// console.log(myArray.includes(5));
// console.log(myArray.indexOf(5));

const newArray = myArray.join();

// console.log(myArray);
// console.log(typeof myArray);

// console.log(newArray);
// console.log(typeof newArray);


// slice, splice
console.log("A",myArray);

const myn1 = myArray.slice(1,3)
console.log(myn1);
console.log("B",myArray);

const myn2 = myArray.splice(1,3)
console.log(myn2);
console.log("C",myArray); 

