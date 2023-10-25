//Immediately Invoked Function Expressions (IIFE)

/*
use case
Variables declared Globally (outside any function) have Global Scope.
Global variables can be accessed from anywhere in a JavaScript program.
Avoid polluting the global namespace.
Because our application could include many functions 
and global variables from different source files, 
it's important to limit the number of global variables. 
If we have some initiation code that we don't need to use'
again, we could use the IIFE pattern. As we will not 
reuse the code again, using IIFE in this case is better 
than using a function declaration or a function expression.
*/
(function chai(){
    //Named IIFE
     console.log("DB CONNCETED");
})();
 
// ( ()=>{
//     console.log(`DB CONNECTED TWO`)
// })();

( (name)=>{
    console.log(`DB CONNECTED TWO ${name}`)
})("Kuldeep");
