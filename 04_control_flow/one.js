//if

// < ,> ,<= , >= ,==(equal) , !=(Not equal), ===(type checking), !==
 
// const score=200

// if(score>100){
//     const power=" fly";
//     console.log(`user can :${power}`);
// }

// const balance=1000

// if(balance>500)  console.log("test"), console.log("test2");

// if(balance<500){
//     console.log("less than 500")

// }  else if(balance<750){
//     console.log("less than 750");
// } else  if(balance<900){
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }


const userloggedIn=true;
const debitcard= true
const loggedInFromGoogle=false 
const loggedInfromGmail=true
if(userloggedIn && debitcard){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInfromGmail){
    console.log("user logged in");
}
else {
    console.log("Not allowed ");
}