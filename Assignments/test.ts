// sample.ts

// A simple function to add two numbers
export function add(a: number, b: number): number {
    return a + b;
}

// A simple function to check if a string is a palindrome
export function isPalindrome(str: string): boolean {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}
