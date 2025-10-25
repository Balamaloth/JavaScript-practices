// ===============================
// JavaScript Conditional Statements
// ===============================

// -------------------------------
// 1. IF statement
// -------------------------------
console.log("===== IF STATEMENT =====");

// Simple if: executes code if condition is true
let num1 = 10;
if (num1 > 5) { // checks if num1 is greater than 5
    console.log("num1 is greater than 5"); // executed because 10>5
}

let num2 = 3;
if (num2 > 5) { // checks if num2 is greater than 5
    console.log("num2 is greater than 5"); // NOT executed because 3>5 is false
}

// -------------------------------
// 2. IF...ELSE statement
// -------------------------------
console.log("===== IF...ELSE STATEMENT =====");

let age = 18;
if (age >= 18) { // condition true
    console.log("You are an adult"); // executed
} else {
    console.log("You are a minor"); // not executed
}

let age2 = 15;
if (age2 >= 18) { // condition false
    console.log("You are an adult"); // not executed
} else {
    console.log("You are a minor"); // executed
}

// Checking number positivity
let number = -5;
if (number > 0) {
    console.log("Positive number"); // not executed
} else {
    console.log("Non-positive number"); // executed
}

// -------------------------------
// 3. IF...ELSE IF...ELSE statement
// -------------------------------
console.log("===== IF...ELSE IF...ELSE STATEMENT =====");

let marks = 85;
if (marks >= 90) { // checks if marks >=90
    console.log("Grade: A+"); // not executed
} else if (marks >= 75) { // checks if marks >=75
    console.log("Grade: A"); // executed
} else if (marks >= 50) { // checks if marks >=50
    console.log("Grade: B"); // not executed
} else {
    console.log("Grade: Fail"); // not executed
}

// Another example
let score = 45;
if (score >= 90) {
    console.log("Excellent"); // not executed
} else if (score >= 60) {
    console.log("Good"); // not executed
} else if (score >= 40) {
    console.log("Pass"); // executed
} else {
    console.log("Fail"); // not executed
}

// Negative number check
let numCheck = -10;
if (numCheck > 0) {
    console.log("Positive"); // not executed
} else if (numCheck < 0) {
    console.log("Negative"); // executed
} else {
    console.log("Zero"); // not executed
}

// -------------------------------
// 4. Ternary operator (? :)
// -------------------------------
console.log("===== TERNARY OPERATOR =====");

// Syntax: condition ? value_if_true : value_if_false
let age3 = 20;
console.log(age3 >= 18 ? "Adult" : "Minor"); // Adult because condition true

let age4 = 15;
console.log(age4 >= 18 ? "Adult" : "Minor"); // Minor because condition false

// Even/Odd check
let numberCheck = 7;
console.log(numberCheck % 2 === 0 ? "Even" : "Odd"); // Odd

numberCheck = 10;
console.log(numberCheck % 2 === 0 ? "Even" : "Odd"); // Even

// Multiple ternary conditions
let temp = 30;
console.log(temp > 35 ? "Hot" : temp < 15 ? "Cold" : "Warm"); // Warm

let marks2 = 95;
console.log(marks2 >= 90 ? "A+" : marks2 >= 75 ? "A" : "B"); // A+

// -------------------------------
// 5. Nested IF statements
// -------------------------------
console.log("===== NESTED IF STATEMENTS =====");

let x = 10;
if (x > 5) { // outer condition
    if (x < 15) { // inner condition
        console.log("x is greater than 5 and less than 15"); // executed
    }
}

// Another example with negative check
let y = -7;
if (y < 0) { // outer
    if (y % 2 === 0) { // inner
        console.log("Negative even number"); // not executed
    } else {
        console.log("Negative odd number"); // executed
    }
}
