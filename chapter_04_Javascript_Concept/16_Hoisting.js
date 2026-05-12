//JS Engine will move the declaration of the variable to the top of the scope and 
// initialize it with undefined. This is called hoisting.
//line by line // JIT compilation


console.log(greeting); // undefined
var greeting = "Hello TheTestingAcademy";
console.log(greeting);

console.log(a); // ReferenceError: Cannot access 'a
var a = "Pramod"; // 
console.log(a); // "Pramod"