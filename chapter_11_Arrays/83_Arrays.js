// what are arrays ?
/*
collection of items can have mixture of elements of different types
- arrays always start with index of zero
- adding / removing rows is push/pop at end 
shift/unshift  
*/


//creating array
let fruits = []; //empty array
console.log(typeof fruits); // returns object


let arr = [10, 20, 30, 40];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[5]); // undefined

let fruits = []; // Empty  []
let fruits_fresh = ["apple", "banana", "cheery"];
// length = 3, Index - 0,1,2


let arr = [10, 20, 30, 40]; // 0-3: 4

console.log(arr[0]);
console.log(arr[3])
console.log(arr[4]); // undefined

let testResults = ["pass", "fail", "pass", "skip"];
let mixed = [1, "hello", true, null]; // JS arrays can hold any type.