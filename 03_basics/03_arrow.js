const user={
    username:"Kuldeep",
    price:999,
//this keyword refer to the current context 
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username="sam";
// user.welcomeMessage()

// console.log(this)

// function one(){
//     let username="Kuldeep"
//     console.log(this.username);
// }

// one();

// const  one =function(){
//     let username ="Kuldeep"
//     console.log(this.username);
// }

// const  one=()=>{
//     let username ="Kuldeep"
//     // console.log(this.username);
//     console.log(this);
// }

// one()

// const addTwo= (num1,num2)=>{
//     return num1+num2;
// }

//emplicit return 
// const addTwo= (num1,num2)=>  num1+num2;
// const addTwo =(num1,num2)=> (num1+num2);

const addTwo =(num1,num2)=> ({username:"kuldeep"})


console.log(addTwo(3,4));

 