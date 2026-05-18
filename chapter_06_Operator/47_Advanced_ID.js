//let a = 10;
//console.log(++a + a);
//console.log(a); // result = 22, 11


// pre and post increment
//let a = 10;
//console.log(++a + a++);
//console.log(a);

//let a = 10;
//console.log(a++ + ++a);
//console.log(a);

let a = 10;
console.log(++a + ++a);
console.log(a);

// decrement operator

let a = 10;
let b = --a;
console.log(b);
console.log(a);
//post decrement//
let a = 10;
let b = a--;
console.log(b);//result 10 first assign the value
console.log(a); //result: then decrease the value

let a = 5;
console.log(a++ + ++a - --a + a-- + ++a); // result = 18
console.log(a); // result = 6
