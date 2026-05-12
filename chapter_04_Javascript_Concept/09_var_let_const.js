console.log("Hi");
console.log("Hi");
console.log("Hi");

function say() {
    console.log("Hi");
    console.log("Hi");
    console.log("Hi");
}
say();
say();
say();

var v = 10;
let l = 30;

//for funcion

var testCases = ["login", "logout", "signup"];

for (var i = 0; i < testCases.length; i++) {
    console.log(testCases[i]);
}
console.log("Loop counter leaked outside:", i);     // i is accessible outside the loop

var v = 10; // No error, var allows redeclaration and reassignment
var browser = "chrome"; // No error, var allows redeclaration and reassignment
var browser = "edge"; // No error, var allows redeclaration and reassignment
var browser = "firefox"; // No error, var allows redeclaration and reassignment
browser = "safari"; // No error, var allows reassignment
console.log(browser); // Output: safari