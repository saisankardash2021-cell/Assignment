//Creating array

let fruits:string[] = ["Apple","Banana","Cherry"];
let numbers:number[] = [1,2,3,4,5];

console.log(fruits);
console.log(numbers);

// accessing array elements

console.log(fruits[2]);

//adding additional values in array 

console.log(numbers.push(6));
console.log(numbers);

console.log(numbers.pop());
console.log(numbers);

//unshift and shift

console.log(numbers.unshift(6));
console.log(numbers);


console.log(numbers.shift());
console.log(numbers);

// from specific index splice 
numbers.splice(1,2,10,10);
console.log(numbers);

let extractedValue = numbers.splice(0,3);
console.log(extractedValue);
console.log(numbers);

