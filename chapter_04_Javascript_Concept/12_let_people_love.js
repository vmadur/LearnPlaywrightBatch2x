//let   - block scope
//let is block scoped, meaning it is only accessible within the block (
// enclosed by {}) it is declared in.    
let a = 10; //Global SCOPE

let retryCount = 0; // Global SCOPE
retryCount = retryCount + 1;
retryCount = retryCount + 1;
retryCount = retryCount + 1;
console.log(retryCount); // Output: 3

//let retryCount = 5; //SyntaxError: Identifier 'retryCount' has already been declared

let testStatus = "pending";
if (testStatus === "pending") {
    let executionTime = 1200; // Block SCOPE
    console.log("Inside block:", executionTime); // Output: 1200
}
console.log(executionTime);
// ReferenceError: executionTime is not defined
//{ }  -> block scope
// if else, for loop, while loop, do while loop,
//  switch case, try catch finally, function body, class body, etc. are examples of block scope.

//let is LOYAL to block scope, meaning it will not be accessible outside of the
// block it is declared in.
//LET -->loyal
//VAR --> VARIABLE ->Traitor
// var ->person who has affairs // let->married loyal // const->married loyal and not changeable,
//  never fixed change, never married, never want anything-like saints sadhus, yogis, etc.



let name = "pending";
name = "done";