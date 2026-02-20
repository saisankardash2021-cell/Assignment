let a: number = 10;
let b: number = 3;

// Arithmetic Operators

console.log(a + b);  // Addition → 13
console.log(a - b);  // Subtraction → 7
console.log(a * b);  // Multiplication → 30
console.log(a / b);  // Division → 3.33...
console.log(a % b);  // Modulus → 1
console.log(a ** b); // Exponentiation → 1000

//2. Relational / Comparison Operators

console.log(a > b);   // true
console.log(a < b);   // false
console.log(a >= 10); // true
console.log(b == 3);  // true
console.log(b === "3"); // false (strict equality)
console.log(b != 2);  // true

//3. Logical Operators

let x: boolean = true;
let y: boolean = false;

console.log(x && y); // AND → false
console.log(x || y); // OR → true
console.log(!x);     // NOT → false

//4. Bitwise Operators

let m: number = 5;   // 0101
let n: number = 3;   // 0011

console.log(m & n);  // AND → 1 (0001)
console.log(m | n);  // OR → 7 (0111)
console.log(m ^ n);  // XOR → 6 (0110)
console.log(~m);     // NOT → -6
console.log(m << 1); // Left shift → 10
console.log(m >> 1); // Right shift → 2


//5. Assignment Operators
let num: number = 10;
console.log(num += 5);  // 15
console.log(num -= 3);  // 12
console.log(num *= 2);  // 24
console.log(num /= 4);  // 6
console.log(num %= 5);  // 1 

//6. Ternary (Conditional) Operator
let age: number = 18;
let status: string = (age >= 18) ? "Adult" : "Minor";
console.log(status); // "Adult" 

//7. Type Operators

let str: string = "Hello";
console.log(typeof str); // "string"

let arr: number[] = [1, 2, 3];
console.log(arr instanceof Array); // true


//8. String Operators
let first: string = "Hello";
let second: string = "World";
console.log(first + " " + second); // "Hello World"

// sample.ts

// Arithmetic Operators


console.log("Addition:", a + b);        // 15
console.log("Subtraction:", a - b);     // 5
console.log("Multiplication:", a * b);  // 50
console.log("Division:", a / b);        // 2
console.log("Modulus:", a % b);         // 0

// Comparison Operators
console.log("Is a greater than b?", a > b);   // true
console.log("Is a equal to b?", a === b);     // false
console.log("Is a not equal to b?", a !== b); // true

// Logical Operators


console.log("Logical AND:", x && y);  // false
console.log("Logical OR:", x || y);   // true
console.log("Logical NOT:", !x);      // false

// Assignment Operators

num += 5;  // num = num + 5
console.log("After += :", num);  // 25

num *= 2;  // num = num * 2
console.log("After *= :", num);  // 50


