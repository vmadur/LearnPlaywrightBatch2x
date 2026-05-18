// pre increment
let a = 10;
console.log(++a); // Output: 11, because the value of a is incremented before it is used in the expression,
//  so it returns 11.

// post increment
let b = 10;
console.log(b++); // Output: 10, because the value of b is used in the expression before it is 
// incremented, so it returns 10, but after this line, the value of b becomes 11.   

let a = 10;
let b = ++a; // pre increment, a is incremented before it is assigned to b      
console.log(a); // Output: 11, because a is incremented before it is assigned to b, so it returns 11.
console.log(b); // Output: 11, because b is assigned the value of a after it is incremented, so it returns 11.
//above is example of pre increment, the value of a is incremented before it is assigned to b, so both a
// and b have the same value of 11.

