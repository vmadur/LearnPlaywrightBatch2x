let a = 10; // a is a global variable
console.log(a); // 10

//Defination of a function
function printHello() {
    console.log("Hello TheTestingAcademy");
    let a = 20; // a is a local variable to printHello function
    console.log(a);
    if (true) {
        let a = 30;
        console.log(a); // 30
    }
    console.log("F->", a); // 30

}
printHello();