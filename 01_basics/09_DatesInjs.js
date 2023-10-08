let myDate=new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let myCreatedDate=new Date(2023,0,23);
// let myCreatedDate=new Date(2023,0,23,5,3)
// let myCreatedDate=new Date("2023-09-08")
let myCreatedDate=new Date("10-08-2023")
console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp= Date.now()
// console.log(myTimeStamp);   //time show into milliseconds
// console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000));         //convert into seconds

let  newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1)