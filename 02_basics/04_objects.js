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
// const obj3 = Object.assign({},  obj1,obj2) // assign(target,source)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users =[
  {
  id:1,
  email:"h@gmail.com",
},
  {
  id:1,
  email:"h@gmail.com",
},
{
  id:1,
  email:"h@gmail.com",
},{
  id:1,
  email:"h@gmail.com",
},{
  id:1,
  email:"h@gmail.com",
},{
  id:1,
  email:"h@gmail.com",
},
] 

// console.log(users[1].email);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser), Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

