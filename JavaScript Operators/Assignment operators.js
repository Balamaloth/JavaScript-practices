/* 1. //    = (Simple Assignment)

// 1. Assign number
let a = 10;
console.log(a); // 10

// 2. Assign string
let name = "Bala";
console.log(name); // Bala

// 3. Assign boolean
let isStudent = true;
console.log(isStudent); // true

// 4. Assign null
let x = null;
console.log(x); // null

// 5. Assign undefined
let y = undefined;
console.log(y); // undefined

// 6. Assign decimal
let price = 99.99;
console.log(price); // 99.99

// 7. Assign array
let arr = [1, 2, 3];
console.log(arr); // [1,2,3]

// 8. Assign object
let person = {name: "Bala", age: 20};
console.log(person); // {name:"Bala", age:20}

// 9. Assign result of expression
let result = 10 + 5;
console.log(result); // 15

// 10. Assign boolean expression
let check = (10 > 5);
console.log(check); // true



//  2. += (Addition Assignment)

let a = 10;

// 1. Add number
a += 5;
console.log(a); // 15

// 2. Add negative number
a += -3;
console.log(a); // 12

// 3. Add decimal
a += 2.5;
console.log(a); // 14.5

// 4. Add boolean (true=1)
a += true;
console.log(a); // 15.5

// 5. Add string (concatenation)
let str = "Hello ";
str += "World";
console.log(str); // "Hello World"

// 6. Add empty string
let s = "Bala";
s += "";
console.log(s); // "Bala"

// 7. Add variable
let b = 5;
a += b;
console.log(a); // 20.5

// 8. Add expression
a += 10 + 5;
console.log(a); // 35.5

// 9. Add negative decimal
a += -5.5;
console.log(a); // 30

// 10. Add string number
let c = "10";
c += 5;
console.log(c); // "105" (string concatenation)


//  3. -= (Subtraction Assignment)

let a = 20;

// 1. Subtract number
a -= 5;
console.log(a); // 15

// 2. Subtract negative number
a -= -5;
console.log(a); // 20

// 3. Subtract decimal
a -= 2.5;
console.log(a); // 17.5

// 4. Subtract boolean (true=1)
a -= true;
console.log(a); // 16.5

// 5. Subtract variable
let b = 6;
a -= b;
console.log(a); // 10.5

// 6. Subtract expression
a -= 5 + 0.5;
console.log(a); // 5

// 7. Subtract zero
a -= 0;
console.log(a); // 5

// 8. Subtract from negative
let c = -10;
c -= 5;
console.log(c); // -15

// 9. Subtract decimal
c -= 2.5;
console.log(c); // -17.5

// 10. Subtract boolean false
a -= false; // false = 0
console.log(a); // 5


//   4. *= (Multiplication Assignment)

let a = 5;

// 1. Multiply number
a *= 2;
console.log(a); // 10

// 2. Multiply negative number
a *= -1;
console.log(a); // -10

// 3. Multiply decimal
a *= 0.5;
console.log(a); // -5

// 4. Multiply boolean (true=1)
a *= true;
console.log(a); // -5

// 5. Multiply variable
let b = 2;
a *= b;
console.log(a); // -10

// 6. Multiply expression
a *= 3 + 2; // a = -10 * 5
console.log(a); // -50

// 7. Multiply zero
a *= 0;
console.log(a); // 0

// 8. Multiply negative decimal
a = -4;
a *= 1.5;
console.log(a); // -6

// 9. Multiply large number
let c = 1000;
c *= 1000;
console.log(c); // 1000000

// 10. Multiply string numeric
let d = "5";
d *= 2;
console.log(d); // 10


// 5. /= (Division Assignment)
let a = 20;

// 1. Divide number
a /= 5;
console.log(a); // 4

// 2. Divide decimal
a /= 2;
console.log(a); // 2

// 3. Divide negative
a /= -1;
console.log(a); // -2

// 4. Divide boolean (true=1)
a /= true;
console.log(a); // -2

// 5. Divide variable
let b = 2;
a /= b;
console.log(a); // -1

// 6. Divide expression
a /= 1 + 1; // -1/2
console.log(a); // -0.5

// 7. Divide string number
let c = "10";
c /= 2;
console.log(c); // 5

// 8. Divide zero numerator
let d = 0;
d /= 5;
console.log(d); // 0

// 9. Divide negative decimal
let e = -10;
e /= 2.5;
console.log(e); // -4

// 10. Divide by zero
let f = 10;
console.log(f /= 0); // Infinity


// 6. %= (Modulus Assignment)
let a = 10;

// 1. Modulus number
a %= 3;
console.log(a); // 1

// 2. Modulus decimal
let b = 10.5;
b %= 4;
console.log(b); // 2.5

// 3. Modulus negative number
let c = -10;
c %= 3;
console.log(c); // -1

// 4. Modulus variable
let x = 20;
let y = 6;
x %= y;
console.log(x); // 2

// 5. Modulus boolean
let z = 5;
z %= true; // 5 % 1
console.log(z); // 0

// 6. Modulus expression
let m = 25;
m %= 4 + 1; // 25 % 5
console.log(m); // 0

// 7. Modulus large number
let n = 12345;
n %= 100;
console.log(n); // 45

// 8. Modulus zero
let o = 10;
o %= 10;
console.log(o); // 0

// 9. Modulus string number
let p = "10";
p %= 3;
console.log(p); // 1

// 10. Modulus negative decimal
let q = -7.5;
q %= 2;
console.log(q); // -1.5


// 7. **= (Exponentiation Assignment)

let a = 2;

// 1. Simple exponent
a **= 3;
console.log(a); // 8

// 2. Exponent zero
let b = 5;
b **= 0;
console.log(b); // 1

// 3. Negative exponent
let c = 2;
c **= -2;
console.log(c); // 0.25

// 4. Decimal exponent
let d = 9;
d **= 0.5;
console.log(d); // 3

// 5. Exponent with variable
let e = 3;
let f = 4;
e **= f;
console.log(e); // 81

// 6. Negative base
let g = -2;
g **= 3;
console.log(g); // -8

// 7. Decimal base
let h = 2.5;
h **= 2;
console.log(h); // 6.25

// 8. Large exponent
let i = 10;
i **= 5;
console.log(i); // 100000

// 9. Expression
let j = 2;
j **= 1 + 2;
console.log(j); // 8

// 10. Combined arithmetic
let k = 2;
k **= 3 * 2; // 2^6
console.log(k); // 64


 */