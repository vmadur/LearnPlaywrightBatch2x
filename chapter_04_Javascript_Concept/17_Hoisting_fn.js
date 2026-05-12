function getUserStatus() {
    //var status code, JS Engine optimized the code.
    console.log(status_code)
    var status_code = "Active";
    console.log(status_code);
}
getUserStatus();
// var is function scoped, it is not block scoped.
//  It is hoisted to the top of the function scope and initialized with undefined. Hence,
// the first console.log(status_code) will print undefined. The second console.log(status_code)
// will print "Active".
