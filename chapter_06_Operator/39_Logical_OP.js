//Logical Operators
// Logical operators are used to combine multiple conditions or expressions and return a boolean value based on the result of those conditions. 
// The three main logical operators in JavaScript are:
// 1. Logical AND (&&)
// 2. Logical OR (||)
// 3. Logical NOT (!)   
// Logical AND (&&) operator returns true if both operands are true, otherwise it returns false.
console.log(true && true);   // Output: true
console.log(true && false);  // Output: false
console.log(false && true);  // Output: false
console.log(false && false); // Output: false           
// Logical OR (||) operator returns true if at least one of the operands is true, otherwise it returns false.
console.log(true || true);    // Output: true
console.log(true || false);   // Output: true
console.log(false || true);   // Output: true
console.log(false || false);  // Output: false
// Logical NOT (!) operator returns the opposite boolean value of the operand.
console.log(!true);   // Output: false
console.log(!false);  // Output: true   

// && -> AND Gate
// || -> OR Gate
// ! -> NOT

let a = true;
let b = false;
console.log(a && b); // false // AND gate - both should be true to get true
console.log(a || b); // true // OR gate - at least one should be true to get true
console.log(!a); // false // NOT gate - returns the opposite boolean value
console.log(!b); // true    
console.log(5 != "george"); // true  (5 is not equal to "george") value 5 , g ! that true.
