// number == string
console.log(42 == "42"); // true    ==> loose equality operator performs type coercion before comparison/
// loose comparison operator performs type coercion before comparison
// number === string
console.log(42 === "42"); // false      ==> strict equality operator does not perform type coercion, it checks both value and type
// null == undefined
console.log(null == undefined); // true    ==> loose equality operator considers null and undefined equal
// null === undefined
console.log(null === undefined); // false      ==> strict equality operator considers 
// null and undefined different types, so they are not equal
// 0 == false
console.log(0 == false); // true    ==> loose equality operator considers 0 and false equal
// 0 === false
console.log(0 === false); // false      ==> strict equality operator considers 0 and false different types, so they are not equal   
// '' == false
console.log('' == false); // true    ==> loose equality operator considers empty string and false equal
// '' === false
console.log('' === false); // false      ==> strict equality operator considers empty string and false different types, so they are not equal   
// [] == false
console.log([] == false); // true    ==> loose equality operator considers empty array and false equal
// [] === false
console.log([] === false); // false      ==> strict equality operator considers empty array and false different types, so they are not equal    


console.log(41 == "42"); // true    ==> loose equality operator considers 41 and "42" equal/loose comparision.
console.log(42 === "42");          // false      ==> strict equality operator considers 42 and "42"
// different types, so they are not equal/strict comparision.->data tyype and converted value
// both are different.

console.log(5 === 5); // true    ==> strict equality operator considers 5 and 5 equal, both value and type 
//  are the same    
console.log(5 == 5); // true    ==> loose equality operator also considers 5 and 5 equal, 
// both value and type
console.log(5 === "5"); // false      ==> strict equality operator considers 5 and "5" different types, 
// so they are not equal
console.log(5 == "5"); // true    ==> loose equality operator considers 5 and "5" equal, 
//  because it performs type coercion before comparison.

console.loag(0 == ""); // true    ==> loose equality operator considers 0 and empty string equal,
// because it performs type coercion before comparison.->converted to 0 - checked by the loose 
// equality operator.
console.log(0 === ""); // false      ==> strict equality operator considers 0 and empty string different types, 
// so they are not equal.
console.log(true == 1); // true    ==> loose equality operator considers true and 1 equal,
// because it performs type coercion before comparison.->converted to 1 - checked by the loose 
// equality operator.
console.log(true === 1); // false      ==> strict equality operator considers true and 1 different types, 
// so they are not equal.

console.log(5 != "5");  // false      ==> loose inequality operator considers 5 and "5" equal,
// because it performs type coercion before comparison.->converted to 5 - checked by the loose 
// inequality operator.
console.log(5 !== "5"); // true    ==> strict inequality operator considers 5 and "5" different types, 
// so they are not equal.->both are different types, so they are not equal.
//this does not exist.
// === strict equality operator
// !== strict inequality operator
// == loose equality operator
// != loose inequality operator
// === strict check we will check for both the data type and the value,
// but in case of == loose equality operator we will check for the value only,
//  but before checking the value it will do type coercion if the data types are different.

