// ===============================
// JavaScript Comparison Operators
// ===============================

// 1. Equal to (==) - checks value only
console.log("== Examples:");
console.log(10 == 10); // true
console.log(10 == "10"); // true
console.log(true == 1); // true
console.log(false == "0"); // true
console.log(null == undefined); // true
console.log("Bala" == "Bala"); // true
console.log("Bala" == "Krishna"); // false
console.log(0 == false); // true
console.log(2.5 == 2.5); // true
console.log(-10 == "-10"); // true

// 2. Strict equal (===) - checks value and type
console.log("=== Examples:");
console.log(10 === 10); // true
console.log(10 === "10"); // false
console.log(true === 1); // false
console.log(false === "0"); // false
console.log(null === undefined); // false
console.log("Bala" === "Bala"); // true
console.log("Bala" === "Krishna"); // false
console.log(2.5 === 2.5); // true
console.log(-10 === -10); // true
console.log(true === true); // true

// 3. Not equal (!=) - checks value only
console.log("!= Examples:");
console.log(10 != 5); // true
console.log(10 != "5"); // true
console.log(10 != "10"); // false
console.log(true != 0); // true
console.log(false != "0"); // false
console.log(null != undefined); // false
console.log("Bala" != "Krishna"); // true
console.log(2.5 != 3.5); // true
console.log(-10 != -5); // true
console.log(true != false); // true

// 4. Strict not equal (!==) - checks value and type
console.log("!== Examples:");
console.log(10 !== 5); // true
console.log(10 !== "10"); // true
console.log(10 !== 10); // false
console.log(true !== 1); // true
console.log(false !== "0"); // true
console.log(null !== undefined); // true
console.log("Bala" !== "Krishna"); // true
console.log(2.5 !== 2.5); // false
console.log(-10 !== -10); // false
console.log(true !== false); // true

// 5. Greater than (>)
console.log("> Examples:");
console.log(10 > 5); // true
console.log(5 > 10); // false
console.log(5.5 > 5); // true
console.log(-5 > -10); // true
console.log(0 > -1); // true
console.log(10 > "5"); // true
console.log("10" > 5); // true
console.log(true > false); // true
console.log(false > true); // false
console.log(5 > 5); // false

// 6. Less than (<)
console.log("< Examples:");
console.log(5 < 10); // true
console.log(10 < 5); // false
console.log(5.5 < 6); // true
console.log(-10 < -5); // true
console.log(-1 < 0); // true
console.log("5" < 10); // true
console.log(5 < "10"); // true
console.log(true < false); // false
console.log(false < true); // true
console.log(5 < 5); // false

// 7. Greater than or equal (>=)
console.log(">= Examples:");
console.log(10 >= 5); // true
console.log(10 >= 10); // true
console.log(5 >= 10); // false
console.log(-5 >= -10); // true
console.log(0 >= -1); // true
console.log("10" >= 5); // true
console.log(5 >= "10"); // false
console.log(true >= false); // true
console.log(false >= true); // false
console.log(5 >= 5); // true

// 8. Less than or equal (<=)
console.log("<= Examples:");
console.log(5 <= 10); // true
console.log(10 <= 10); // true
console.log(15 <= 10); // false
console.log(-10 <= -5); // true
console.log(-1 <= 0); // true
console.log("5" <= 10); // true
console.log(10 <= "5"); // false
console.log(true <= false); // false
console.log(false <= true); // true
console.log(5 <= 5); // true

// 9. Ternary operator (? :) for comparisons
console.log("Ternary Examples:");
let age = 18;
console.log(age >= 18 ? "Adult" : "Minor"); // Adult
age = 15;
console.log(age >= 18 ? "Adult" : "Minor"); // Minor

let score = 80;
console.log(score >= 50 ? "Pass" : "Fail"); // Pass
score = 40;
console.log(score >= 50 ? "Pass" : "Fail"); // Fail

let num = 10;
console.log(num % 2 === 0 ? "Even" : "Odd"); // Even
num = 7;
console.log(num % 2 === 0 ? "Even" : "Odd"); // Odd

let temp = 30;
console.log(temp > 35 ? "Hot" : temp < 15 ? "Cold" : "Warm"); // Warm

let marks = 90;
console.log(marks >= 90 ? "A+" : marks >= 75 ? "A" : "B"); // A+
