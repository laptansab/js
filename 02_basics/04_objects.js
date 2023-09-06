const tinderUser = new Object();
// let tinderUser = {}

tinderUser.id = "123abv";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@some.com",
  fullName: {
    firstName: "sushil",
    lastName: "chaulagain",
  },
};

// console.log(regularUser.fullName.firstName);

let obj1 = {
  1: "a",
  2: "b",
};
let obj2 = {
  4: "c",
  3: "d",
};

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign(obj1,obj2)
const obj3 = Object.assign({},  obj1,obj2) // assign(target,source)
console.log(obj3);
