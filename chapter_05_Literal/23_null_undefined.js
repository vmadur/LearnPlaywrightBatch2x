// null vs undefined in JavaScript

// undefined - JS default when a variable is declared but not assigned
let a;
console.log(a); // undefined

// null - explicitly set by the programmer to represent "no value"
let b = null;
console.log(b); // null

// Key differences
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (historical JS bug)

console.log(null == undefined);  // true  (loose equality)
console.log(null === undefined); // false (strict equality - different types)

// Practical example
function greet(name) {
  if (name === undefined) {
    console.log("No argument passed");
  } else if (name === null) {
    console.log("Argument is explicitly null");
  } else {
    console.log("Hello, " + name);
  }
}

greet();        // No argument passed (undefined)
greet(null);    // Argument is explicitly null
greet("Alice"); // Hello, Alice
//typeof operator can be used to check the type of a variable, 
// but it will return "object" for null due to a historical bug in JavaScript. 
// Therefore, it's important to use strict equality (===) to differentiate between null
// and undefined when necessary.
let age = "Vijay"; // String literal assigned to variable age
console.log(typeof age);       // "string"    
let age = 30; // Number literal assigned to variable age
console.log(typeof age);        // "number"
let pi = 3.14; // Number literal assigned to variable pi
console.log(typeof pi);         // "number"
let isStudent = true; // Boolean literal assigned to variable isStudent
console.log(typeof isStudent);
let name = "Vijay"; // String literal assigned to variable name
console.log(typeof name);        // "string"
let nullValue = null; // Null literal assigned to variable nullValue
console.log(typeof nullValue);    // "object" (historical JS bug)
let undefinedValue; // Undefined variable (implicitly assigned the value undefined)         
console.log(typeof undefinedValue); // "undefined"