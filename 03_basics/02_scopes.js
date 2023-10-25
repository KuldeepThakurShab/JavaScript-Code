// var c =2000;
let a=200
if(true){
    let a=10
    const b=20
    // console.log("INEER a :",a );

}

// console.log(a);
// console.log(b);
// console.log(c);

//NESTED SCOPE

function One(){
    const username="Kuldeep"

    function two(){
        const website="YouTube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// One()

if(true){
    const username="kuldeep"
    if(username==="kuldeep"){
        const website=" youtube";
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

//++++++++++++++  Interesting +++++++++++++++

console.log(addone(5));
function addone(num){
    return num+1;
}
 
addTwo(5)

const addTwo= function(num){
    return num+2
}

// addTwo(5); 