/*✅ Triangle Classifier:

Write a program that classifies a triangle based on its side lengths. 
Given three input values representing the lengths of the sides, determine if the triangle is 
equilateral (all sides are equal), 
isosceles (exactly two sides are equal), or 
scalene (no sides are equal). 
Use an if-else statement to classify the triangle.
*/

let a = 6,
    b = 10,
    c = 9;

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