// string concatenation operator
console.log("Hello, " + "world!");  // Output: "Hello, world!" (strings are concatenated)
console.log("The answer is: " + 42); // Output: "The answer is: 42" (number is converted to string and concatenated)
console.log("5" + 10);
// Output: "510" (number 10 is converted to string and concatenated with "5")
console.log("5" + "10");
// Output: "510" (both are strings, so they are concatenated)
console.log("5" + true);
// Output: "5true" (boolean true is converted to string and concatenated with "5")  
console.log("5" + null);
// Output: "5null" (null is converted to string and concatenated with "5")
console.log("5" + undefined);
// Output: "5undefined" (undefined is converted to string and concatenated with "5")

let s = "Hi";
s += " there";
console.log(s); // Output: "Hi there"   

