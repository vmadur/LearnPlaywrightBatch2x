//Comparision operators
let x = 10;
console.log(x == 10); // true
console.log(x == '10'); // true (loose equality, type coercion)
console.log(x === 10); // true (strict equality, no type coercion)
console.log(x === '10'); // false (strict equality, no type coercion)       
console.log(x != 5); // true
console.log(x != 10); // false
console.log(x !== 10); // false (strict inequality, no type coercion)
console.log(x !== '10'); // true (strict inequality, no type coercion)
console.log(x > 5); // true
console.log(x < 15); // true
console.log(x >= 10); // true
console.log(x <= 9); // false       

let a = 5;
let b = 10;
console.log(a > b); // false
console.log(a < b); // true
console.log(a >= 5); // true
console.log(b <= 10); // true
console.log(a == b); // false
console.log(a != b); // true    

//> greater than
//< less than
//>= greater than or equal to
//<= less than or equal to
//== loose equality (type coercion) sikh vs hindu
//=== strict equality (no type coercion) sikh vs hindu, language, religion, culture, etc.
//!= loose inequality (type coercion)
//!== strict inequality (no type coercion)  

//==, ===, !=, !== are used for equality comparison. 
//The difference between == and === is that == performs type coercion, while === does not.Similarly,
//!= performs type coercion, while !== does not.
//=, >, <, >=, <= are used for relational comparisons.


console.log(3 > 4); // false    
console.log(3 < 4); // true
console.log(4 >= 4); // true // 4 is greater than or equal to 4 or 4===4 -> true or gate -> true
console.log(5 <= 3); // false
console.log(10 == '10'); // true (loose equality, type coercion)
console.log(10 === '10'); // false (strict equality, no type coercion)
console.log(10 != '5'); // true (loose inequality, type coercion)
console.log(10 !== '10'); // true (strict inequality, no type coercion)         

//10 >5 true
//10 < 5 false
//10 >= 10 true
//10 <= 9 false
//10 == '10' true (loose equality, type coercion)
//10 === '10' false (strict equality, no type coercion)
//10 != '5' true (loose inequality, type coercion)
//10 !== '10' true (strict inequality, no type coercion)    

