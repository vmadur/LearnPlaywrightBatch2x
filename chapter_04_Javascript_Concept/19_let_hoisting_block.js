if (true) {

    //TDZ (Temporal Dead Zone) is the time between the start of the block and the point 
    // where the variable is declared.
    //console.log(score); // ReferenceError: Cannot access 'score' before initialization
    let x = 'block scope';
    console.log(x); // block scope

}
console.log(x); // ReferenceError: x is not defined
// In the above code, the variable x is declared with let inside the if block, which
// means it is block scoped.
// It cannot be accessed outside of that block. Therefore,
// the first console.log(x) will print "block scope",
// while the second console.log(x) will throw a ReferenceError
// because x is not defined outside of the block.   


