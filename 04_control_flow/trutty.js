const userEmail="kuldeep@gmail.com"

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}

/*falsy values

false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

trutty values

"0" , "false" , " ", [] , {}, function (){}

*/

// if(userEmail.length === 0){
//   console.log("Array is empty");
// }

const emptyobj={}

if(Object.keys(emptyobj).length === 0){
    console.log("Object is empty");
} 

// Nullish Coalescing Operator (??) : null undefined

// let val1;
// val1=5 ?? 10
// val1= null ?? 10
// val1= null ?? 90 ?? 15

// console.log(val1);


//Terniary Operator

//condition ? true : false 

const iceTeaprice=100
iceTeaprice>=90 ? console.log("more than 90"):
console.log("less than 90")