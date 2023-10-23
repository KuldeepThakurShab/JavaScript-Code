/*
Synatx:
const string_name = "String Content"
or
const string_name = new String("String Content")
*/

const name="Kuldeep"
const repCount=30;

//cpnsole.log(name +repoCount +"Value");

// console.log(`Hello my name is ${name} and my repo count is ${repCount}`)

const st=new String("Kuldeep-Tomar-rajput")

// console.log(st[0]);
// console.log(st.length);
// console.log(st.toUpperCase());
// console.log(st.charAt(3));
// console.log(st.indexOf('T'));

// const str= st.substring(6,8);
// console.log(str);

// const anotherSt = st.slice(-7,8)
// console.log(anotherSt);

const newStr="  kuldeep   "
console.log(newStr);
console.log(newStr.trim());   //it is used to remove the whitespace

const url="https://kuldeep.com/kuldeep%20tomar"
console.log(url.replace('%20','-'))
console.log(url.includes('kuldeep'));  //used to check the word in the string 

console.log(st.split('-'));   // split the string on the basis of given character  and store the words in array

//string concetination

function MyInfo(fname, lname , add){
    // return "My name is "+ fname + " "+lname+ "."+
    // add+" is my favorite city.";

    //string introplation

    return `My name is ${fname} ${lname}. ${add} is my favorite city.`;
}

console.log(MyInfo("Kuldeep", "Tomar", "Meerut"));