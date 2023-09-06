const marvelHeros = ["thor", "ironman", "spiderman"];
const dcHeros = ["superman", "flash", "batman"];

// marvelHeros.push(dcHeros)

// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

// const heros =  marvelHeros.concat(dcHeros)
// console.log(heros);

// const allHeors = [...marvelHeros,...dcHeros]
// console.log(allHeors);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

let realAnotherArr = anotherArray.flat(Infinity);
// console.log(realAnotherArr);

// console.log(Array.isArray("sus"));
// console.log(Array.from("sus"));
// console.log(Array.from({name:"sus"})); // interesting

let score1 = 100,
  score2 = 200,
  score3 = 300;

  console.log(Array.of(score1,score2,score3));