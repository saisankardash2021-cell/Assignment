//Here’s a very small and easy TypeScript program showing exception handling:

function greet(name: string) {
  if (!name) {
    throw new Error("Name cannot be empty");
  }
  return "Hello, " + name;
}

try {
  console.log(greet("")); // This will throw an error
} catch (error) {
  console.log("Something went wrong!");

// Using 'any' type can lead to unsafe code and runtime errors
let value: any;

value = 42;          // number
value = "hello";     // string
value = { id: 1 };   // object

// Compiler won't complain, even if it's unsafe
console.log(value.toUpperCase()); // Works if value is string, crashes otherwise

}

//try catch finally example

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

try {
  let result = divide(10, 0); // This will throw an error
  console.log("Result:", result);
} catch (error) {
  console.log("Error occurred:", (error as Error).message);
} finally {
  console.log("This block always runs, success or error.");
}
