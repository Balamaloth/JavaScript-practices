// ===============================
// JavaScript Operators - Full Reference with Explanations
// Includes: Arithmetic, Assignment, Comparison
// ===============================

// -------------------------------
// 1. ARITHMETIC OPERATORS
// -------------------------------
console.log("===== ARITHMETIC OPERATORS =====");

// Addition (+)
console.log("Addition (+) Examples:");
// Numbers are added
console.log(10 + 20); // 30
// Number + string results in string concatenation
console.log(10 + "20"); // "1020"
// String + string concatenates
console.log("Hello " + "World"); // "Hello World"
// Boolean true is 1, false is 0
console.log(true + false); // 1
// Adding boolean to number converts boolean to number
console.log(5 + true); // 6
// Adding number + null treats null as 0
console.log(10 + null); // 10
// Adding number + undefined results in NaN
console.log(10 + undefined); // NaN
// Adding negative numbers
console.log(-5 + -10); // -15
// Adding decimals
console.log(2.5 + 3.7); // 6.2
// Arithmetic precedence: multiplication first, then addition
console.log(5 + 10 * 2); // 25

// Subtraction (-)
console.log("Subtraction (-) Examples:");
// Simple number subtraction
console.log(20 - 10); // 10
// String "5" is converted to number 5
console.log(20 - "5"); // 15
// Strings are converted to numbers
console.log("30" - "10"); // 20
// Boolean true=1, false=0
console.log(true - false); // 1
// Boolean true=1 is subtracted from 5
console.log(5 - true); // 4
// null is treated as 0
console.log(10 - null); // 10
// undefined results in NaN
console.log(10 - undefined); // NaN
// Subtracting negative numbers
console.log(-5 - -10); // 5
// Subtracting decimals
console.log(2.5 - 1.2); // 1.3
// Arithmetic precedence applies
console.log(5 - 2 * 3); // -1

// Multiplication (*)
console.log("Multiplication (*) Examples:");
// Simple multiplication
console.log(5 * 3); // 15
// String "2" converted to number
console.log(5 * "2"); // 10
// Strings converted to numbers
console.log("4" * "6"); // 24
// true=1, false=0
console.log(true * false); // 0
// Multiplying number by true (1)
console.log(7 * true); // 7
// null treated as 0
console.log(5 * null); // 0
// undefined results in NaN
console.log(5 * undefined); // NaN
// Negative multiplication
console.log(-5 * 3); // -15
// Decimal multiplication
console.log(2.5 * 4); // 10
// Operator precedence: multiplication before addition
console.log(5 * 2 + 10); // 20

// Division (/)
console.log("Division (/) Examples:");
// Simple division
console.log(10 / 2); // 5
// String converted to number
console.log(10 / "2"); // 5
// Strings converted to numbers
console.log("20" / "4"); // 5
// true/true = 1/1 = 1
console.log(true / true); // 1
// true converted to 1
console.log(10 / true); // 10
// null treated as 0 => division by 0 = Infinity
console.log(10 / null); // Infinity
// undefined results in NaN
console.log(10 / undefined); // NaN
// Negative division
console.log(-10 / 2); // -5
// Decimal division
console.log(7.5 / 2.5); // 3
// Parentheses affect order of operations
console.log((10 + 20) / 5); // 6

// Modulus (%)
console.log("Modulus (%) Examples:");
// Remainder of 10/3
console.log(10 % 3); // 1
// String converted to number
console.log(10 % "3"); // 1
// Strings converted to numbers
console.log("20" % "6"); // 2
// true=1, false=0 => 1%1 =0
console.log(true % true); // 0
// Modulus with boolean
console.log(10 % true); // 0
// Negative modulus
console.log(-10 % 3); // -1
// Decimal modulus
console.log(5.5 % 2); // 1.5
// Combined arithmetic
console.log((10 + 5) % 4); // 3
// Large numbers
console.log(12345 % 100); // 45
// Using ternary to check even/odd
let num = 11;
console.log(num % 2 === 0 ? "Even" : "Odd"); // Odd

// Exponentiation (**)
console.log("Exponentiation (**) Examples:");
// 2 to the power 3
console.log(2 ** 3); // 8
// Any number to the power 0 =1
console.log(5 ** 0); // 1
// 0 to the power 5 =0
console.log(0 ** 5); // 0
// Negative exponent
console.log(2 ** -2); // 0.25
// Square root using 0.5 exponent
console.log(9 ** 0.5); // 3
let base = 3;
let exp = 4;
console.log(base ** exp); // 81
// Negative base
console.log((-2) ** 3); // -8
// Decimal base
console.log(2.5 ** 2); // 6.25
// Large exponent
console.log(10 ** 5); // 100000
// Combined expression
console.log(2 ** (1 + 2)); // 8

// Increment/Decrement
console.log("Increment/Decrement Examples:");
let x = 5;
x++; // Post-increment (increases after value used)
console.log(x); // 6
let y = 5;
console.log(++y); // Pre-increment (increases before value used) => 6
let z = 5;
console.log(z++ + 2); // 5+2=7, then z becomes 6
console.log(z); // 6
let a = 5;
a--; // Post-decrement
console.log(a); // 4
let b = 5;
console.log(--b); // Pre-decrement =>4

// -------------------------------
// 2. ASSIGNMENT OPERATORS
// -------------------------------
console.log("===== ASSIGNMENT OPERATORS =====");

// = assigns a value
let m = 10;
console.log("m =", m); // 10

// += adds and assigns
let n = 10;
n += 5; // n = n + 5
console.log("n +=", n); // 15

// -= subtracts and assigns
let o = 20;
o -= 5; // o = o -5
console.log("o -=", o); // 15

// *= multiplies and assigns
let p = 5;
p *= 3; // p = p*3
console.log("p *=", p); // 15

// /= divides and assigns
let q = 20;
q /= 4; // q = q/4
console.log("q /=", q); // 5

// %= modulus and assigns
let r = 10;
r %= 3; // r = r%3
console.log("r %=", r); // 1

// **= exponentiation and assigns
let s = 2;
s **= 3; // s = s**3
console.log("s **=", s); // 8

// -------------------------------
// 3. COMPARISON OPERATORS
// -------------------------------
console.log("===== COMPARISON OPERATORS =====");

// == value equality
console.log(10 == "10"); // true, string converted to number
console.log(true == 1); // true, boolean converted
console.log(null == undefined); // true, special JS rule
console.log(0 == false); // true
console.log("Bala" == "Bala"); // true
console.log("Bala" == "Krishna"); // false
console.log(2.5 == 2.5); // true
console.log(-10 == "-10"); // true
console.log(false == 0); // true
console.log(true == "1"); // true

// === strict equality
console.log(10 === 10); // true, value+type
console.log(10 === "10"); // false, different type
console.log(true === 1); // false
console.log(false === "0"); // false
console.log(null === undefined); // false
console.log("Bala" === "Bala"); // true
console.log(2.5 === 2.5); // true
console.log(-10 === -10); // true
console.log(true === true); // true
console.log(false === false); // true

// != not equal
console.log(10 != "5"); // true
console.log("Bala" != "Krishna"); // true
console.log(10 != "10"); // false
console.log(true != 0); // true
console.log(false != "0"); // false
console.log(null != undefined); // false
console.log(2.5 != 3.5); // true
console.log(-10 != -5); // true
console.log(true != false); // true
console.log(false != true); // true

// !== strict not equal
console.log(10 !== "10"); // true
console.log(true !== 1); // true
console.log(10 !== 10); // false
console.log(false !== "0"); // true
console.log(null !== undefined); // true
console.log("Bala" !== "Krishna"); // true
console.log(2.5 !== 2.5); // false
console.log(-10 !== -10); // false
console.log(true !== false); // true
console.log(false !== true); // true

// > greater than
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

// < less than
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

// >= greater than or equal
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

// <= less than or equal
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

// Ternary operator (? :)
let ageCheck = 18;
console.log(ageCheck >= 18 ? "Adult" : "Minor"); // Adult
ageCheck = 15;
console.log(ageCheck >= 18 ? "Adult" : "Minor"); // Minor
let scoreCheck = 80;
console.log(scoreCheck >= 50 ? "Pass" : "Fail"); // Pass
scoreCheck = 40;
console.log(scoreCheck >= 50 ? "Pass" : "Fail"); // Fail
let numCheck = 10;
console.log(numCheck % 2 === 0 ? "Even" : "Odd"); // Even
numCheck = 7;
console.log(numCheck % 2 === 0 ? "Even" : "Odd"); // Odd
