// 1️ var examples
var name = "Bala";          // string
var age = 20;               // number
var isStudent = true;       // boolean
console.log(name, age, isStudent);

// Re-declaration & re-assignment
var name = "Krishna";
age = 21;
console.log(name, age);

// var in function scope
function testVar() {
  var localVar = "Inside Function";
  console.log(localVar); // accessible here
}
testVar();
// console.log(localVar); //  Error: not accessible outside function

// var in block scope (leaks outside)
if (true) {
  var blockVar = "Block var";
}
console.log(blockVar); //  accessible outside block

// 2️ let examples
let city = "Hyderabad";
let score = 95;
console.log(city, score);

// Re-assignment allowed
city = "Delhi";
score = 100;
console.log(city, score);

// Re-declaration not allowed
// let city = "Mumbai"; //  Error

// Block scope
if (true) {
  let blockLet = "Block Let";
  console.log(blockLet); //  works
}
// console.log(blockLet); //  Error

// let in loops
for (let i = 0; i < 3; i++) {
  console.log("let loop:", i); // 0 1 2
}
// console.log(i); //  Error: i is block-scoped

// 3️ const examples
const pi = 3.14;
const maxUsers = 100;
console.log(pi, maxUsers);

// Re-assignment not allowed
// pi = 3.14159; //  Error

// Objects and arrays with const
const colors = ["red", "blue"];
colors.push("green"); //  allowed
console.log(colors);

const person = { name: "Bala" };
person.age = 20; //  allowed
console.log(person);

// Re-assign object  not allowed
// person = { name: "Krishna" }; //  Error

// 4️ Multiple types
let userName = "Bala";      // string
let userAge = 20;           // number
let isLoggedIn = true;      // boolean
const country = "India";    // constant
console.log(userName, userAge, isLoggedIn, country);

// 5️ Hoisting examples
console.log(varHoist); // undefined
var varHoist = "I am var";

try {
  console.log(letHoist); //  Error
  let letHoist = "I am let";
} catch (e) {
  console.log(e.message);
}

try {
  console.log(constHoist); //  Error
  const constHoist = "I am const";
} catch (e) {
  console.log(e.message);
}

// 6️ Scope testing
var globalVar = "Global var";

function scopeTest() {
  var funcVar = "Function var";
  let funcLet = "Function let";
  const funcConst = "Function const";

  if (true) {
    var innerVar = "Inner var";   // function scoped
    let innerLet = "Inner let";   // block scoped
    const innerConst = "Inner const"; // block scoped
    console.log(innerVar, innerLet, innerConst);
  }

  console.log(innerVar); //  accessible (var)
  // console.log(innerLet); //  Error
  // console.log(innerConst); //  Error
}

scopeTest();

// 7️ Loops with var vs let vs const
for (var i = 0; i < 2; i++) {
  console.log("var loop:", i);
}
console.log("Outside var loop:", i); //  i accessible

for (let j = 0; j < 2; j++) {
  console.log("let loop:", j);
}
// console.log("Outside let loop:", j); //  Error

// 8️ Dynamic typing
let dynamicVar = 10;
console.log(dynamicVar); // 10
dynamicVar = "Now a string";
console.log(dynamicVar); // Now a string
dynamicVar = true;
console.log(dynamicVar); // true

// 9️ Real-life example
const TAX_RATE = 0.18;
let price = 500;
let discount = 50;
let totalPrice = price - discount;
let totalTax = totalPrice * TAX_RATE;

console.log("Total Price:", totalPrice);
console.log("Total Tax:", totalTax);

//  10 Nested scope (lexical scope)
let outerVar = "Outer";

function outerFunc() {
  let innerVar = "Inner";

  function nestedFunc() {
    console.log(outerVar); //  accessible
    console.log(innerVar); //  accessible
  }

  nestedFunc();
}

outerFunc();
