// ** VARIABLE **
//  a variable is a container that  stores data or informaction for later use 

// types of variable  3 ways 
//  1. var    (function scope )
//  2. let   ( block scope)
//  3. const   ( block scope)




/* 
var name = "Bala"; // string
var age = 20;      // number
var isStudent = true; // boolean

console.log(name);      // Bala
console.log(age);       // 20
console.log(isStudent); // true

// Re-declare and re-assign
var name = "Krishna";  
age = 21;

console.log(name); // Krishna
console.log(age);  // 21
```

**Note:** `var` is function-scoped, not block-scoped.

---

## 2️ Using `let` (Modern Variable)

```js
let city = "Hyderabad"; // string
let score = 95;         // number

console.log(city);  // Hyderabad
console.log(score); // 95

// Re-assign
city = "Delhi";
score = 100;

console.log(city);  // Delhi
console.log(score); // 100

// Re-declare in same scope  Not allowed
// let city = "Mumbai"; // Error
```

**Tip:** `let` is **block-scoped**, meaning it only exists inside `{}`.

```js
if (true) {
  let x = 10;
  console.log(x); // 10
}
console.log(x); //  Error
```

---

## 3️ Using `const` (Constant Variable)

```js
const pi = 3.14;
const maxUsers = 100;

console.log(pi);       // 3.14
console.log(maxUsers); // 100

// Re-assign  Not allowed
// pi = 3.14159; 
// maxUsers = 200; 

// Objects and Arrays with const
const colors = ["red", "blue"];
colors.push("green"); //  Allowed
console.log(colors); // ["red", "blue", "green"]

const person = { name: "Bala" };
person.age = 20; //  Allowed
console.log(person); // { name: "Bala", age: 20 }

// Re-assign object  Not allowed
// person = { name: "Krishna" };
```

---

## 4️ Multiple Variable Types Example

```js
let userName = "Bala";  // string
let userAge = 20;       // number
let isLoggedIn = true;  // boolean
const country = "India"; // constant string

console.log(userName, userAge, isLoggedIn, country);
// Output: Bala 20 true India
```

---

## 5️ Variables in Loops

```js
for (let i = 0; i < 3; i++) {
  console.log("Loop counter:", i); // 0 1 2
}

// console.log(i); //  Error: i is block-scoped
```

With `var`:

```js
for (var i = 0; i < 3; i++) {
  console.log("Loop counter:", i); // 0 1 2
}
console.log(i); //  3 (var is function/global scoped)
```

---

## 6️ Real-Life Example

```js
const TAX_RATE = 0.18; // constant
let price = 500;       // can change
let discount = 50;

let totalPrice = price - discount;
let totalTax = totalPrice * TAX_RATE;

console.log("Total Price:", totalPrice); // 450
console.log("Total Tax:", totalTax);     // 81
```

---

 **Quick Rules Recap:**

* `var` → function-scoped, can be re-declared and re-assigned
* `let` → block-scoped, can be re-assigned but not re-declared in the same scope
* `const` → block-scoped, cannot be re-assigned, but object/array contents can change

---

If you want, I can create a **single visual chart with examples** showing **var vs let vs const** side by side — it makes remembering them super easy.

Do you want me to do that?
 */