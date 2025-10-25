// const
  /* const stands for constant
It declares a block-scoped variable whose value cannot be changed after initialization
Introduced in ES6 (2015), along with let */

const pi = 3.14;
console.log(pi); // 3.14 

//  pi = 3.14159; ❌ Error: Assignment to constant variable

// must be initialized 
 // const name ; // it cause error 
 // You cannot declare a const variable without a value
 const name = " bala" ; // correct 

 // block scope 
 // const is block-scoped, like let — limited to the { } it’s declared in

 if ( true) {
    const age = 20;
    console.log(age); //20
 }
 console.log(age); // age not defined 

 // Cannot Be Re-assigned or Re-declared
  const city = "hyd";
  // city = "delhi" cannot re-assign
  // const city = "mumbai" cannot re-declare 
//  Once a const variable is assigned, it cannot be changed


/*  Objects and Arrays with const
Important: const protects the variable reference, but not the contents of objects or arrays. */
 const colors = [ "red" , " blue"];
 colors.push("green"); // allowed
 console.log(colors);// ["red" , "blue" , "green"]
 // // colors = ["yellow"];  Not allowed — cannot reassign reference

 // objects 
 const person = { name: "bala"};
 person.age = 20; // allowed 
 console.log(person); // { name: "bala " , age: 20}
 // person = { name: "Krishna" };  Not allowed

 // So const locks the reference, not the object itself