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

const course = {
  courseName:"js in hindi",
  price: 999,
  courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course
console.log(instructor);

// {
//   "name": "hitesh",
//   "course":"js in hindi",
//   "price": "free" 
// }

// URL = https://api.github.com/users/hiteshchoudhary

// {"results":[{"gender":"female","name":{"title":"Mademoiselle","first":"Cristina","last":"Aubert"},"location":{"street":{"number":7778,"name":"Avenue Joliot Curie"},"city":"Misery-Courtion","state":"Graubünden","country":"Switzerland","postcode":3972,"coordinates":{"latitude":"-56.6005","longitude":"101.7751"},"timezone":{"offset":"+11:00","description":"Magadan, Solomon Islands, New Caledonia"}},"email":"cristina.aubert@example.com","login":{"uuid":"307fc195-807d-4a81-837c-04154552bbc3","username":"smallbear344","password":"james007","salt":"dC1PHfVo","md5":"9cd0655e8218f930ec911bd0983f22c1","sha1":"952c22f73f1f2dbec206e8b591fc801b365fd884","sha256":"56be4727fce296f94a7d1eb3c00395a0d14bd6289e5373ec304b03742aeaa7f0"},"dob":{"date":"1948-07-22T22:27:58.458Z","age":75},"registered":{"date":"2009-04-03T04:32:10.279Z","age":14},"phone":"075 777 27 41","cell":"076 709 65 00","id":{"name":"AVS","value":"756.0794.5822.27"},"picture":{"large":"https://randomuser.me/api/portraits/women/28.jpg","medium":"https://randomuser.me/api/portraits/med/women/28.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/28.jpg"},"nat":"CH"}],"info":{"seed":"8c6781440f23bbc1","results":1,"page":1,"version":"1.4"}}