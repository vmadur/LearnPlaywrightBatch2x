/*✅ Triangle Classifier:

Write a program that classifies a triangle based on its side lengths. 
Given three input values representing the lengths of the sides, determine if the triangle is 
equilateral (all sides are equal), 
isosceles (exactly two sides are equal), or 
scalene (no sides are equal). 
Use an if-else statement to classify the triangle.
*/

let a = 16;
b = 6;
c = 10;

if (a === b && b === c && c === a) {
    console.log(
        `The value of a - ${a},b - ${b},c - ${c} are same - Equilateral Triangle`,
    );
} else if (a === b || b === c || c === a) {
    console.log(
        `The value of a - ${a},b - ${b},c - ${c} exactly two are same - Isosceles Triangle`,
    );
} else {
    console.log(
        `The value of a - ${a},b - ${b},c - ${c} none are same - Scalene Triangle`,
    );
}

/*
Triangle Classifier:
*/
let a = 10; b = 10; c = 10;
if (a === b && b === c) {
    console.log("Triangle is equilateral-three sides are same");
}
else if (a === b || b === c || a === c) {
    console.log("Triangle is isosceles-two sides are same");
}
else {
    console.log("Triangle is scalene-sides none are same");
}
//
let a = 10, b = 20, c = 30;
if (a === b && b === c && a === c) {
    console.log("It is an equilateral triangle -three sides are same")
}
else if (a === b && b === c && a !== c) {
    console.log("It is an isosceles triangle -two sides are same")
}
else {
    console.log("It is an scalene triangles -sides none are same")
}
//
`for (let i = 0; i < 5; i++) { if (i === 3) break; } console.log(i);`