// n = 3a
// *
// * *
// * * *
let n = 5;
for (let i = 1; i <= n; i++) {
    let row = " ";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row.trim());
}
// Pyramid pattern 

for (let i = 1; i <= 5; i++) {
    let row = ""
    for (j = 1; j <= 5 - i; j++) {
        row += " "
    }
    for (let k = 1; k <= (2 * i - 1); k++) {
        row += "*"
    }

    console.log(row)
}

// Reverse right-aligned pyramid

for (let i = 5; i >= 1; i--) {
    let row = " "
    for (j = 1; j <= i; j++) {
        row += "*"
    }
    console.log(row.trim())
}