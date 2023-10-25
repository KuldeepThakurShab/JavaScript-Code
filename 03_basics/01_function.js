function sayMyName(){
    console.log("K");
    console.log("U");
    console.log("L");
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("P");
}

// sayMyName();

// const add=function(num1,num2){
//     return num1+num2;
// }

// console.log(add(9,4));

function addTwoNum(num1,num2){
    // console.log(num1+num2);
    let ans=num1+num2;
    return ans;
}

const result=addTwoNum(3,5);
// console.log("Result:",result);

function loginUserMessage(username){
    if(!username){
        console.log("Please enter the user name");
        return ;
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("Kuldeep"));
// console.log(loginUserMessage("Kuldeep"));

//rest operator
function calculateCartPrice(val1,val2, ...num1){
    return num1;

}

// console.log(calculateCartPrice(200,400,500,2000));

//Function with object 

const user={
    username:"kuldeep",
    price:199
}

console.log(user.username);   //this is the way to print by using refernce of the object 

function HandleObj(anyObj){
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`)
}

// HandleObj(user);
HandleObj({
    username:"sam",
    price:199
})

// function with Array

const myNewArray=[200,4000,7000]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,900,300]));