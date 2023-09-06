// singleton 
// Object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Sushil", // process as "name": "Sushil"
    "full name":"sushil chaulagain",
    [mySym]: "mykey1",
    age: 22,
    location: "Jaipur",
    email: "sushil@google.com",
    isLoggedIn: false,
    lastLofinDays: ['Monday',"Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// Object.freeze(jsUser)
// jsUser["email"] = "suraj@chat.com"

// console.log(jsUser);

// jsUser.greeting = function(){
//     console.log("Hello js user");
// }
// jsUser.greeting2 = function () {
//     console.log(`Hello js user,${this.name}`);
// }

// console.log(jsUser.greeting());
// console.log(jsUser.greeting2());

/*
// Object literal to define a person object with properties and values
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isEmployed: true,
    hobbies: ["reading", "golf", "cooking"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        zipCode: "12345"
    }
};

// Using a for...in loop to iterate over object properties
// for (let key in person) {
//     if (person.hasOwnProperty(key)) {
//         console.log(`${key}: ${person[key]}`);
//     }
// }


// function displayNestedProperties(obj, indent = 0) {
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             if (typeof obj[key] === 'object' && obj[key] !== null) {
//                 console.log(`${' '.repeat(indent)}${key}:`);
//                 displayNestedProperties(obj[key], indent + 4); // Increase the indentation for nested properties
//             } else {
//                 console.log(`${' '.repeat(indent)}${key}: ${obj[key]}`);
//             }
//         }
//     }
// }
// displayNestedProperties(person);

//output
// firstName: John
// lastName: Doe
// age: 30
// address:
//     street: 123 Main St
//     city: Anytown
//     zipCode: 12345
*/
