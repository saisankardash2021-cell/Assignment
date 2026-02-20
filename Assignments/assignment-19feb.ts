// 1. Count the total number of words in the sentence

const sentence:string = "Java programming is fun and challenging";
const words:string[]=sentence.trim().split(/\s/);
const wordCount:number=words.length;

console.log(sentence);
console.log(words);
console.log(wordCount);