let numbers: number[] = [1, 2, 3, 4, 5];
console.log("Numbers:", numbers);


/*
// A simple array of numbers
let numbers: number[] = [1, 2, 3, 4, 5];
console.log("Numbers:", numbers);

// A simple array of strings
let fruits: string[] = ["Apple", "Banana", "Mango"];
console.log("Fruits:", fruits);

// Mixed array using union types
let mixed: (string | number)[] = ["Hello", 42, "World"];
console.log("Mixed:", mixed);

// Iterating through an array
for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}

// Using array methods
numbers.push(6); // Add element
console.log("After push:", numbers);

numbers.pop(); // Remove last element
console.log("After pop:", numbers);

let doubled = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubled);*/


/*// Add elements at the beginning
fruits.unshift("Apple");
console.log("After unshift:", fruits); 
// ["Apple", "Banana", "Mango", "Orange"]

// Remove the first element
let removedFruit = fruits.shift();
console.log("Removed:", removedFruit); 
// "Apple"

console.log("After shift:", fruits); 
// ["Banana", "Mango", "Orange"]


let fruits: string[] = ["Apple", "Banana", "Mango", "Orange"];

console.log("Original:", fruits);

// Remove 1 element at index 1 (Banana)
let removed = fruits.splice(1, 1);
console.log("After removing:", fruits); 
// ["Apple", "Mango", "Orange"]
console.log("Removed element:", removed); 
// ["Banana"]

// Add elements at index 2 (before "Orange")
fruits.splice(2, 0, "Grapes", "Pineapple");
console.log("After adding:", fruits); 
// ["Apple", "Mango", "Grapes", "Pineapple", "Orange"]

// Replace 1 element at index 0 (Apple → Kiwi)
fruits.splice(0, 1, "Kiwi");
console.log("After replacing:", fruits); 
// ["Kiwi", "Mango", "Grapes", "Pineapple", "Orange"]

let fruits: string[] = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

console.log("Original:", fruits);

// Slice from index 1 to 3 (Banana, Mango)
let sliced1 = fruits.slice(1, 3);
console.log("Slice(1, 3):", sliced1); 
// ["Banana", "Mango"]

// Slice from index 2 to end
let sliced2 = fruits.slice(2);
console.log("Slice(2):", sliced2); 
// ["Mango", "Orange", "Grapes"]

// Copy the whole array
let copy = fruits.slice();
console.log("Copy:", copy); 
// ["Apple", "Banana", "Mango", "Orange", "Grapes"]*/


