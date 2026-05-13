console.log(score); // ReferenceError: Cannot access 'score' before initialization
let score = 100;



//console.log(score); // 100
// TDZ (Temporal Dead Zone) is the time between the start of the block and the point
// where the variable is declared. During this time, the variable cannot be accessed,
// and trying to do so will result in a ReferenceError. Once the variable is declared,
// it can be accessed and will have its assigned value.

//---TDZ FOR SCORE STARTS HERE---
// console.log(score); // ReferenceError: Cannot access 'score' before initialization
// let score = 100;
// console.log(score); // 100
//---TDZ FOR SCORE ENDS HERE---

// In the above code, the first console.log(score) will throw a ReferenceError because
// score is in the Temporal Dead Zone (TDZ) until it is declared with let. Once score
// is declared and initialized with 100, the second console.log(score) will print 100.

//SCORE = 50; // ReferenceError: Cannot access 'score' before initialization
// In the above line, we are trying to assign a value to score before it is declared,
// which will also throw a ReferenceError due to the TDZ.
//typeof score; // ReferenceError: Cannot access 'score' before initialization
// In the above line, we are trying to use typeof on score before it is declared,
// which will also throw a ReferenceError due to the TDZ.
let score = 100; // Variable declaration and initialization
console.log(score); // 100 // Now we can access score without any issues.

