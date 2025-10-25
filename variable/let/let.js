// let 
// let is a block-scoped variable declaration introduced in ES6 (2015)
// Variables declared with let are limited to the block they are declared in {}


let name = "bala";
// let name = "maloth";  // canot redeclare 
name = " maloth " // re-assigning is allowed 
console.log(name); // maloth

let score = 50 ;
score = 60 ;   // works
console.log(score); // 60


console.log(a); // Error: Cannot access 'a' before initialization
let a = 5;

// block scope
 let x = 10;

 if (true){
    let x = 20; // This x is **different** from outer x
    console.log(x); // 20 
 }

 console.log(x); //10  10 (outer x unaffected)