//singleton

//objects literals 
//object.create

const mySym=Symbol("Key1");
const JsUser={
    name:"Kuldeep",
    "full name":"Kuldeep Tomar",
    [mySym]:"mykey1",
    age :21,
    location: "Meerut",
    email:"thakurkuldeeptomar3@gmail.com",
    isLogggedIn:false,
    lastLoginDays: ["MondAay","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

 
// Object.freeze(JsUser)
// JsUser.email="kuldeeptomar@gmail.com" 
// console.log(JsUser) 

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`)
}
 
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


