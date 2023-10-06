//Primitive

//7 types: String , Number, Boolean , Null, Undefined, Symbol ,BigInt

const score=100
const scoreValue=100.3

const id=Symbol('123')
const anotherId=Symbol('123');

// console.log(id);
console.log(id===anotherId);


//Reference (Non primitive)

//Array, Objects, Functions
 
const arr=["kuldeep", "Neha", "Shivan"];

let myObject={
    name:"Hitesh",
    age:22,
}

 const myFunction = function(){
    console.log("Hello World");
 }

 console.log(typeof scoreValue);
 console.log(typeof null);
 console.log(typeof myFunction );
 console.log(typeof id);