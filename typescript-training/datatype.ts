/***********************************************
 * *********premetive data types in typescript**********
 *************************************************/

let num1: number = 10;

let str1: string = "Hello, TypeScript!";
let bool1: boolean = true;
let nullValue: null = null;
let undefinedValue: undefined = undefined;
let symbol1: symbol = Symbol("unique");
let employeeddress : number | string = "This can be a number or a string 10";


console.log("Number:", num1);
console.log("String:", str1);
console.log("Boolean:", bool1); 
console.log("Null:", nullValue);
console.log("Undefined:", undefinedValue);
console.log("Symbol:", symbol1);
console.log("Union Type:", employeeddress);

interface Person {
    name: string;
    age: number;
}

let person1: Person = {
    name: "Alice",
    age: 30
};

let fruitandprice: (string | number)[] = ["Apple", 1.5];

let empDetails: [string, number] = ["John Doe", 25];*/


/*let person = { name: "John", age: 30, city: "Chennai" };

for (let key in person) {
  console.log(key + ": " + person[key]);
}*/




