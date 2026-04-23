
const stre ="Olumade"

// String manipulation functions

const reverseString = (stre) =>{
    let reversed = stre.reverse();

    console.log(reversed);
}
const countString = (stre) => {
    let counted = stre.length;
    
    console.log(counted)
}
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

// Array functions
const findMin = (arr) =>{
    return Math.min(...arr)
}
const findMax = (arr) =>{
    return Math.max(...arr)
}
const sumArray = (arr) =>{
    let count = 0 

    for(let i = 0; i < arr.length; i++){
        count = count + arr[i]
    }
    return count
}
const filterArray = (arr, condition) => {
  const result = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (condition(arr[i])) {
      result.push(arr[i]);
    }
  }
  
  return result;
}

// Mathematical Functions
function factorial(n) {
  if (n < 0) {
    return "Factorial doesn't exist for negative numbers";
  }
  
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  
  return true;
};
function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  
  const sequence = [0, 1];
  
  for (let i = 2; i < n; i++) {
    const nextNum = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextNum);
  }
  
  return sequence;
}