// sample custom error throwing in TypeScript

function checkAge(age: number) {
  if (age < 18) {
    throw new Error("Age must be 18 or above"); // custom message
  }
  return "Access granted";
}

try {
  console.log(checkAge(15)); // Will throw the error
} catch (error) {
  console.log("Caught error:", (error as Error).message);
}
