// leap year checker

Rule:
//Divisible by 4 and not divisible by 100, >leap year
// or divisible by 400 > leap year
//else > not a leap year
let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + "  is a Leap Year");
} else {
    console.log(year + "   is NOT a Leap Year");
}