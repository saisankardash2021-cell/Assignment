
let numbers: number[] = [1, 2, 3, 4, 5];
//8.Creating a new array by extracting a portion of an existing array. 
console.log("Creating a new array by extracting a portion of an existing array:");
let extractedValues = numbers.slice(2,4) ;//slice(startIndex,endIndex+1);
console.log(extractedValues);


let numbersExmpTwo: number[] = [10, 20, 30, 40, 50];

// Slice from index 1 to 3 (end is exclusive)
let part = numbersExmpTwo.slice(1, 4);
console.log(part); // Output: [20, 30, 40]

// Slice with negative index
let lastTwo = numbersExmpTwo.slice(-2);
console.log(lastTwo); // Output: [40, 50]

let text: string = "TypeScript";

// Slice from index 0 to 4
let firstPart = text.slice(0, 4);
console.log(firstPart); // Output: "Type"

// Slice with negative index
let lastPart = text.slice(-6);
console.log(lastPart); // Output: "Script"

// Comparing slice and substring
let str: string = "Interview";
console.log(str.slice(2, 5));      // ?
console.log(str.substring(2, 5));  // ?


