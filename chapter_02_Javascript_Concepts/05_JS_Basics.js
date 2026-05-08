 var v = 10;

   console.log(v);
   // Output: 10
   //v > variable, = is operator and ; is line terminator or end of statement, 
   // it is not mandatory in JS, it is optional, but it is a good practice to use it to avoid potential issues with automatic semicolon insertion (ASI) in JavaScript. ASI can lead to unexpected behavior if you omit semicolons in certain situations, such as when writing multiple statements on the same line or when using return statements. Therefore, it's generally recommended to include semicolons at the end of your statements for clarity and to prevent potential bugs.
v=12;
console.log(v);

v= 12;
console.log(v);

//if = 12;
//console.log(if);//
//SyntaxError: Unexpected token '='
   // at wrapSafe (node:internal/modules/cjs/loader:1763:18)
   // at Module._compile (node:internal/modules/cjs/loader:1804:20)
   // at Object..js (node:internal/modules/cjs/loader:1961:10)
   // at Module.load (node:internal/modules/cjs/loader:1553:32)
   // at Module._load (node:internal/modules/cjs/loader:1355:12)
   // at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
  // at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
   // at node:internal/main/run_main_module:33:47
// var if = 10;
//console.log(if);//

// if is a keyword in JavaScript and cannot be used as a variable name. The code will throw a syntax error.
//how to crate a variable ij javascript?    
// we can create a variable in JavaScript using the var, let, or const keywords. Here are examples of each:

// Using var
var myVar = 10;
console.log(myVar); // Output: 10

// Using let
let myLet = 20;
console.log(myLet); // Output: 20

// Using const
const myConst = 30;
console.log(myConst); // Output: 30
// Note: Variables declared with var are function-scoped, while those declared with let and const are block-scoped. Additionally, variables declared with const cannot be reassigned after their initial assignment.        