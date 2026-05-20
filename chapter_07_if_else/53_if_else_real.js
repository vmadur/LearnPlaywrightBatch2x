let username = "Dev";
let password = "secure123";
let isAccountLocked = "true"

if ((username === "Dev" && password === "secure123" && isAccountLocked)) {
    console.log("Allowed to Enter")
} else {
    console.log("Not allowed to Enter")
}

// logical operator + if - else statement

let username = "Dev";
let password = "secure123";
let isAccountLocked = "true"

if ((username === "Dev" && password === "secure123" && !isAccountLocked)) {
    console.log("Allowed to Enter")
} else {
    console.log("Not allowed to Enter")
}
