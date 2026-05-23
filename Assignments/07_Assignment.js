/*✅ FizzBuzz Test:

Write a program that prints numbers from 1 to 100. However, for multiples of 3, 
print "Fizz" instead of the number, and for multiples of 5, print "Buzz." 
For numbers that are multiples of both 3 and 5, print "FizzBuzz."*/

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(`${i}`);
    }
}

//
/*
Que FizzBuzz Test:
*/
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}

//
for (let number = 1; number <= 100; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz")
    }
    else if (number % 3 === 0) {
        console.log("Fizz")
    }
    else if (number % 5 === 0) {
        console.log("Buzz")
    }
    else {
        console.log(number)
    }
}
//
/ /FizzBuzz test

for (let i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(" FizzBuzz ");
    }
    else if (i % 3 == 0) {
        console.log(" Fizz ");
    }
    else if (i % 5 == 0) {
        console.log(" Buzz ");
    }
    else {
        console.log(" No Multiple with given numbers ", i);
    }
}
//
let a = 100;
function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i + " is FizzBuzz");
        } else if (i % 3 === 0) {
            console.log(i + " is fizz");
        } else if (i % 5 === 0) {
            console.log(i + " is buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(a);