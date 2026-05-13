// Number types in JavaScript

// All numbers in JS are 64-bit floating point (IEEE 754)

// Integer
let int = 42;
console.log(int); // 42

// Float (decimal)
let float = 3.14;
console.log(float); // 3.14

// Scientific notation
let scientific = 1.5e3;  // 1500
console.log(scientific);

// Negative numbers
let negative = -7;
console.log(negative);

// Hexadecimal (base 16) - prefix 0x
let hex = 0xFF; // 255
console.log(hex);

// Octal (base 8) - prefix 0o
let octal = 0o77; // 63
console.log(octal);

// Binary (base 2) - prefix 0b
let binary = 0b1010; // 10
console.log(binary);

// BigInt - for numbers larger than 2^53 - 1
let bigInt = 123456789012345678901234567890n;
console.log(bigInt);

// Special numeric values
console.log(Infinity);      // Infinity
console.log(-Infinity);     // -Infinity
console.log(NaN);           // Not a Number

// Number with underscores (ES2021) - readability
let readable = 1_000_000;
console.log(readable); // 1000000
