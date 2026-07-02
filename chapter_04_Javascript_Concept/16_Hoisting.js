//JS Engine will move the declaration of the variable to the top of the scope and 
// initialize it with undefined. This is called hoisting.
//line by line // JIT compilation


console.log(greeting); // undefined
var greeting = "Hello TheTestingAcademy";
console.log(greeting);

console.log(a); // ReferenceError: Cannot access 'a
var a = "Pramod"; // 
console.log(a); // "Pramod"

console.log(greeting);
var greeting = 'Hello';
console.log(greeting);

// behind the scenes:

//var greeting;  <--hoisted with undefined
//console.log (greeting);   <-- undefined
//greeting = "Hello!";  <-- assignment stays in place
// console.log(greeting);  <-- "Hello"