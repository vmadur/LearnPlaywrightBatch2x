let year = 2001;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}

//app.vwo.com > viewer, editor, admin

let isLoggedIn = true;
let userRole = "editor";

if (isLoggedIn) {
    if (userRole === "Admin") {
        console.log("admin can do all the things");
    }
    else if (userRole === "editor") {
        console.log("Welcome Editor - Editor access granted");
    } else if (userRole === "viewer") {
        console.log("Welcome viewer - Read-only access.");
    } else {
        console.log("No idea you may be a Guest! role");

    }
} else {
    console.log("you are not logged in!");
}

//==========
let isLoggedIn = false;
let userRole = "editor";

if (isLoggedIn) {
    if (userRole === "Admin") {
        console.log("admin can do all the things");
    }
    else if (userRole === "editor") {
        console.log("Welcome Editor - Editor access granted");
    } else if (userRole === "viewer") {
        console.log("Welcome viewer - Read-only access.");
    } else {
        console.log("No idea you may be a Guest! role");

    }
} else {
    console.log("you are not logged in!");
}