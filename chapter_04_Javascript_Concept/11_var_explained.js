var a = 10; //Global SCOPE

// var is function scoped, meaning it is accessible 
// ithin the function it is declared in, or globally if declared outside of any function.
console.log(a); // Output: 10 //Global scope


function printHello() {
    console.log("Hello, Hello, World!");
    var a = 20; // Local SCOPE -var reassigned
    console.log(a); // Output: 20 // Local scope // local variable has highest 
    // preference when they are printed,
    // than global when called and print.
    if (true) {
        var a = 50; // Local SCOPE -var reassigned
        console.log(a); // Output: 30 // Local scope    

    }
    printHello(); // Output: Hello, World!
}


console.log(a); //Global scope

function printHello() {
    console.log("Hello, TheTestingAcademy!");
    var a = 20; // local scope
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a);
    }
}
printHello();