// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

/*
Note : If we don't use break statement then the next case statement
execute except default statement 
*/
const month="feb"

switch (month) {
    case  "jan":
        console.log("January");     
        break;
    case  "feb":
        console.log("Feb");     
        // break;
    case  "march":
        console.log("March");     
        break;
    case  "april":
        console.log("April");     
        break;
          
    default:
        console.log("Default case match")
        break;
}