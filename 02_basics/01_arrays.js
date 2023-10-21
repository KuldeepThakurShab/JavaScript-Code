//JavaScript arrays are resizable and can 
//contain a mix of different data types.
//JavaScript array-copy operations create shallow copies.
//A shallow copy of an object is a copy whose properties 
//share the same references 
const myArray=[0,1,34,6,8]
const myHeros=["Shaktiman" , "Junior Ji"]
const myArr1=new Array (1,2,3,4)
// console.log(myArray[2]);
 

//Array methods

// myArray.push(9);
// myArray.push(10)
// myArray.pop()

// myArray.unshift(9);  //insert at start of array -- time consuming 
// myArray.shift()    //remove  the first element 

// console.log(myArray.includes(9))  //boolean type value
// console.log(myArray.indexOf(9))

// const newArr=myArray.join()  //typeof --> string
// console.log(myArray);
// console.log(newArr);
// console.log(typeof newArr);

//++ slice  , splice

console.log("A ",myArray);

const myArr2=myArray.slice(1,3);
console.log( "SliceArray: ",myArr2)
console.log("B ",myArray);

const myArr3=myArray.splice(1,3);
console.log("SpliceArray: ",myArr3);
console.log("C",myArray);

//  ++++++++ NOTE +++++++
/*
Splice change the oringnal array 
Slice doen't change the orignal array
*/