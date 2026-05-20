if ("Hello") console.log("String is truthy"); //"Hello" = truthy

if ("42") console.log("Number is truthy"); //"Number" = truthy

if ({}) console.log("Empty object is truthy"); //"Empty object" = truthy

if ([]) console.log("Empty array is truthy"); //"Empty array" = truthy

if ("") console.log("won't print"); //"" = false

if (null) console.log("won't print"); //"" = false

if (undefined) console.log("won't print"); //"" = false

if (NaN) console.log("won't print"); //"" = false

if (0) console.log("won't print"); //"" = false

let name = undefined;
if (name) {
    console.log("Hi")
} else {
    console.log("Bye")
}

//ANY NUMBER = 1 2 3 4 5 32 42 52 >TRUTH
//0 = > FALSE

let name = 0;
if (name) {
    console.log("Hi")
} else {
    console.log("Bye")
}