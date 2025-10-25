/*  // =============================
// JavaScript Arithmetic Operators
// =============================

// 1️ Addition (+) - Adds two numbers
let a = 10;
let b = 5;
let sum = a + b;
console.log("Addition (10 + 5):", sum); // 15

// Adding numbers and strings
let name = "Bala";
let greeting = "Hello, " + name;
console.log(greeting); // Hello, Bala

// Adding number + string
let combined = 10 + "5"; // Number + string = string concatenation
console.log("Number + String:", combined); // "105"

// =============================

// 2️ Subtraction (-) - Subtracts second number from first
let diff = a - b;
console.log("Subtraction (10 - 5):", diff); // 5

// Subtracting string numbers (JavaScript converts strings to numbers)
let strDiff = "20" - "5";
console.log("String subtraction:", strDiff); // 15

// =============================

// 3️ Multiplication (*) - Multiplies two numbers
let product = a * b;
console.log("Multiplication (10 * 5):", product); // 50

// Multiplying with strings (JS converts numeric strings)
let strProduct = "4" * "5";
console.log("String multiplication:", strProduct); // 20

// =============================

// 4️ Division (/) - Divides first number by second
let quotient = a / b;
console.log("Division (10 / 5):", quotient); // 2

// Division by zero
let zeroDiv = 10 / 0;
console.log("Division by zero:", zeroDiv); // Infinity

// =============================

// 5️ Modulus (%) - Returns the remainder
let remainder = a % b;
console.log("Remainder (10 % 5):", remainder); // 0

let remainder2 = 11 % 3;
console.log("Remainder (11 % 3):", remainder2); // 2

// =============================

// 6️ Exponentiation (**) - Power of a number
let power = a ** b; // 10^5
console.log("Exponentiation (10 ** 5):", power); // 100000

// =============================

// 7️ Increment (++) - Adds 1
let x = 5;
x++;
console.log("Increment (x++):", x); // 6

// Pre-increment vs Post-increment
let y = 5;
console.log("Post-increment (y++):", y++); // 5 (returns value first, then increments)
console.log("After post-increment:", y); // 6

let z = 5;
console.log("Pre-increment (++z):", ++z); // 6 (increments first, then returns)

// =============================

// 8️ Decrement (--) - Subtracts 1
let m = 5;
m--;
console.log("Decrement (m--):", m); // 4

// Pre-decrement vs Post-decrement
let n = 5;
console.log("Post-decrement (n--):", n--); // 5
console.log("After post-decrement:", n); // 4

let p = 5;
console.log("Pre-decrement (--p):", --p); // 4

// =============================

// 9️ Using Multiple Operators Together
let result = (a + b) * 2 - 5 / 5; 
// Calculation step by step:
// a+b = 10+5 = 15
// 15*2 = 30
// 5/5 = 1
// 30 - 1 = 29
console.log("Combined arithmetic:", result); // 29

// =============================

// 1️0 More Complex Examples

// Example 1: Using modulus in even/odd check
let number = 7;
if (number % 2 === 0) {
  console.log(number, "is Even");
} else {
  console.log(number, "is Odd"); // 7 is Odd
}

// Example 2: Using increment in loop
for (let i = 0; i < 5; i++) {
  console.log("Loop iteration:", i);
}

// Example 3: Exponentiation in real life
let base = 2;
let exponent = 8;
let powerResult = base ** exponent; // 2^8
console.log(base, "raised to power", exponent, "is", powerResult); // 256

// Example 4: Using arithmetic in formula
let length = 10;
let width = 5;
let area = length * width; // rectangle area
console.log("Rectangle Area:", area); // 50

let perimeter = 2 * (length + width); // rectangle perimeter
console.log("Rectangle Perimeter:", perimeter); // 30

// Example 5: Increment/decrement in real life
let score = 0;
score++; // player scores 1
score += 2; // player scores 2 more
console.log("Player Score:", score); // 3
score--; // lose 1 point
console.log("Player Score after penalty:", score); // 2 


// ======================== additon operator ==============

// 1. Number + Number
console.log(10 + 20); // 30

// 2. Number + String
console.log(10 + "20"); // "1020"

// 3. String + String
console.log("Hello " + "World"); // "Hello World"

// 4. Boolean + Boolean
console.log(true + false); // 1

// 5. Number + Boolean
console.log(5 + true); // 6

// 6. Number + null
console.log(10 + null); // 10

// 7. Number + undefined
console.log(10 + undefined); // NaN

// 8. Negative numbers
console.log(-5 + -10); // -15

// 9. Decimal numbers
console.log(2.5 + 3.7); // 6.2

// 10. Expression
console.log(5 + 10 * 2); // 25


                     
// ======================== sub operator ==============
// 1. Number - Number
console.log(20 - 10); // 10

// 2. Number - String
console.log(20 - "5"); // 15

// 3. String numbers
console.log("30" - "10"); // 20

// 4. Boolean - Boolean
console.log(true - false); // 1

// 5. Number - Boolean
console.log(5 - true); // 4

// 6. Number - null
console.log(10 - null); // 10

// 7. Number - undefined
console.log(10 - undefined); // NaN

// 8. Negative numbers
console.log(-5 - -10); // 5

// 9. Decimal numbers
console.log(2.5 - 1.2); // 1.3

// 10. Expression
console.log(5 - 2 * 3); // -1

                                
// ======================== Multiplication operator ==============
 // 1. Number * Number
console.log(5 * 3); // 15

// 2. Number * String
console.log(5 * "2"); // 10

// 3. String numbers
console.log("4" * "6"); // 24

// 4. Boolean * Boolean
console.log(true * false); // 0

// 5. Number * Boolean
console.log(7 * true); // 7

// 6. Number * null
console.log(5 * null); // 0

// 7. Number * undefined
console.log(5 * undefined); // NaN

// 8. Negative numbers
console.log(-5 * 3); // -15

// 9. Decimal numbers
console.log(2.5 * 4); // 10

// 10. Expression
console.log(5 * 2 + 10); // 20


// ========================  Division (/) operator ==============
// 1. Number / Number
console.log(10 / 2); // 5

// 2. Number / String
console.log(10 / "2"); // 5

// 3. String numbers
console.log("20" / "4"); // 5

// 4. Boolean / Boolean
console.log(true / true); // 1

// 5. Number / Boolean
console.log(10 / true); // 10

// 6. Number / null
// Division by null gives Infinity in JS?
console.log(10 / null); // Infinity actually 10 / 0 = Infinity

// Correction: 10 / null -> 10 / 0 ? Actually 10 / null = 10 / 0? Let's check manually.
// Actually in JS, null is converted to 0? 10 / null = Infinity? Let's be precise.
// 10 / null -> 10 / 0? Actually in JS: 10 / null => 10 / 0? But null converts to 0? Actually let's check.
// Actually null converts to 0 in numeric context. 10 / 0 = Infinity. So correct.

console.log(10 / null); // Infinity

// 7. Number / undefined
console.log(10 / undefined); // NaN

// 8. Negative numbers
console.log(-10 / 2); // -5

// 9. Decimal numbers
console.log(7.5 / 2.5); // 3

// 10. Expression
console.log((10 + 20) / 5); // 6


// ========================  Modulus (%) operator ==============


// 1. Number % Number
console.log(10 % 3); // 1

// 2. Number % String
console.log(10 % "3"); // 1

// 3. String numbers
console.log("20" % "6"); // 2

// 4. Boolean % Boolean
console.log(true % true); // 0

// 5. Number % Boolean
console.log(10 % true); // 0

// 6. Negative numbers
console.log(-10 % 3); // -1

// 7. Decimal numbers
console.log(5.5 % 2); // 1.5

// 8. Expression
console.log((10 + 5) % 4); // 3

// 9. Larger numbers
console.log(12345 % 100); // 45

// 10. Using modulus for even/odd
let num = 11;
console.log(num % 2 === 0 ? "Even" : "Odd"); // Odd


// ======================== Exponentiation ()** operator ==============

// 1. Number ** Number
console.log(2 ** 3); // 8

// 2. Number ** 0
console.log(5 ** 0); // 1

// 3. 0 ** Number
console.log(0 ** 5); // 0

// 4. Negative exponent
console.log(2 ** -2); // 0.25

// 5. Decimal exponent
console.log(9 ** 0.5); // 3 (square root)

// 6. Expression
console.log((2 + 3) ** 2); // 25

// 7. Exponentiation with variables
let bas = 3;
let exp = 4;
console.log(base ** exp); // 81

// 8. Negative base
console.log((-2) ** 3); // -8

// 9. Combining multiplication
console.log(2 ** 3 * 2); // 16

// 10. Larger exponent
console.log(10 ** 5); // 100000


// ======================== Increment (++) operator ==============

// 1. Simple increment
let x = 5;
x++;
console.log(x); // 6

// 2. Pre-increment
let y = 5;
console.log(++y); // 6

// 3. Post-increment in expression
let z = 5;
console.log(z++ + 2); // 7 (z used first)
console.log(z); // 6

// 4. Increment negative number
let a = -5;
a++;
console.log(a); // -4

// 5. Increment decimal
let b = 2.5;
b++;
console.log(b); // 3.5

// 6. Increment boolean
let c = true; // 1
c++;
console.log(c); // 2

// 7. Increment null
let d = null; // 0
d++;
console.log(d); // 1

// 8. Increment in loop
for (let i = 0; i < 3; i++) {
  console.log("Loop increment:", i);
}

// 9. Multiple increments
let e = 10;
e++; e++; console.log(e); // 12

// 10. Combined with arithmetic
let f = 5;
console.log(f++ + 10); // 15
console.log(f); // 6

// ======================== Decrement (--) operator ==============
// 1. Simple decrement
let x = 5;
x--;
console.log(x); // 4

// 2. Pre-decrement
let y = 5;
console.log(--y); // 4

// 3. Post-decrement in expression
let z = 5;
console.log(z-- + 2); // 7
console.log(z); // 4

// 4. Decrement negative number
let a = -5;
a--;
console.log(a); // -6

// 5. Decrement decimal
let b = 2.5;
b--;
console.log(b); // 1.5

// 6. Decrement boolean
let c = true; // 1
c--;
console.log(c); // 0

// 7. Decrement null
let d = null; // 0
d--;
console.log(d); // -1

// 8. Decrement in loop
for (let i = 3; i > 0; i--) {
  console.log("Loop decrement:", i);
}

// 9. Multiple decrements
let e = 10;
e--; e--; console.log(e); // 8

// 10. Combined with arithmetic
let f = 5;
console.log(f-- + 10); // 15
console.log(f); // 4


 */