const marvel_heros=["thor", "Ironman", "Spiderman"]
const dc_heros=["Superman", "Flash","Batman"]

// marvel_heros.push(dc_heros);  //array inside array 
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const all_heros=marvel_heros.concat(dc_heros)
// console.log(marvel_heros);
// console.log(all_heros);

//spread out values --> use to concat the arrays vlaues in single value
const allNewHeros=[...marvel_heros, ...dc_heros]
// console.log(allNewHeros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_anotherarray=another_array.flat(Infinity)
// console.log(real_anotherarray);


console.log(Array.isArray("Kuldeep"))
console.log(Array.from("Kuldeep"));
console.log(Array.from({name:"Kuldeep"}));  //interesting

let score1=100
let score2=200;
let score3=300

console.log(Array.of(score1,score2,score3));