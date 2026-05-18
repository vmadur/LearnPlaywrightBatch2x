//??    

console.log(null >= 0); // null ==0 or null > 0, both are false, so it returns false.

console.log(null > 0); // null is not greater than 0, so it returns false.          
console.log(null == 0); // null is not equal to 0, so it returns false.
console.log(null <= 0); // null == 0 or null < 0, both are false, so it returns false.  
console.log(null < 0); // null is not less than 0, so it returns false.
console.log(null == undefined); // null is equal to undefined, so it returns true.
console.log(null === undefined); // null is not strictly equal to undefined, so it returns false.       
console.log(null ?? "Default Value"); // null is nullish, so it returns "Default Value". The nullish coalescing operator (??) returns the right-hand side operand when the left-hand side operand is null or undefined, otherwise it returns the left-hand side operand. In this case, since null is nullish, it returns "Default Value".

let value = null;
let result = value ?? "Default Value";
console.log(result); // Output: Default Value, because value is null, so it returns "Default Value".

// ?? Nullish Coalescing Operator, it is a logical operator that returns the right-hand side operand
//  when the left-hand side operand is null or undefined, otherwise it returns the left-hand side operand. 
// It is often used to provide a default value for variables that may be null or undefined.

let amul = null;
let milk_required = amul ?? "nandini milk";
console.log(milk_required);
// Output: nandini milk, because amul is null, so it returns "nandini milk".

let amul = "Amul Milk";
let milk_required = amul ?? "nandini milk";
console.log(milk_required);
// Output: Amul Milk, because amul is not null, so it returns "Amul Milk".
//single ? also can be used in TypeScript as a non-null assertion operator, it is used to assert that a 
// value is not null or undefined.

let userInput = "";
let finalInput = userInput ?? "Default Input";
console.log(finalInput); // Output: "", because userInput is an empty string, which is not null or
//  undefined, so it returns the empty string. The nullish coalescing operator only considers null and
//  undefined as nullish values, not other falsy values like an empty string, 0, or false.