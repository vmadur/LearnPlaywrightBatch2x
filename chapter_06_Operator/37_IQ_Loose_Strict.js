console.log(0 == ""); // true    ==> loose equality operator considers 0 and empty string equal,
// because it performs type coercion before comparison.->converted to 0 - checked by the loose 
// equality operator.
console.log(0 == "0"); // true    ==> loose equality operator considers 0 and "0" equal,
// because it performs type coercion before comparison.->converted to 0 - checked by the loose 
// equality operator.
console.log("" == "0");  // (transitivity broken !)       // false      ==> loose equality operator considers empty string and "0" different values,
// so they are not equal.->both are string but different values, so they are not equal.
console.log(false == "false"); // false      ==> loose equality operator considers false and "false" different values,
// so they are not equal.->both are different types and different values, so they are not equal.
console.log(false == "0");     // true    ==> loose equality operator considers false and "0" equal,    
// because it performs type coercion before comparison.->converted to 0 - checked by the loose 
// equality operator.
console.log(false == undefined); // false      ==> loose equality operator considers false and undefined different values,  
// so they are not equal.->both are different types and different values, so they are not equal.
console.log(false == null);      // false      ==> loose equality operator considers false and null different values,  
// so they are not equal.->both are different types and different values, so they are not equal.        
console.log(false == 0);         // true    ==> loose equality operator considers false and 0 equal,
// because it performs type coercion before comparison.->converted to 0 - checked by the loose 
// equality operator.   
console.log(false === "0");     // false      ==> strict equality operator considers false and "0" different types,
// so they are not equal.->both are different types, so they are not equal.
console.log(false === 0);       // false      ==> strict equality operator considers false and 0 different types,
// so they are not equal.->both are different types, so they are not equal. 
console.log(false === false); // true    ==> strict equality operator considers false and false equal, both value and type
// are the same.->both are boolean and have the same value, so they are equal.

