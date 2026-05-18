let rajkumar_age = 18;
let rj_will_go_to_GOA = rajkumar_age >= 18 ? "Yes, Rajkumar will go to Goa." : "No, Rajkumar will not go to Goa.";
console.log(rj_will_go_to_GOA); // Output: Yes, Rajkumar will go to Goa.    

let actualStatusCode = 200;
let expectedStatusCode = 200;
let testResult = actualStatusCode === expectedStatusCode ? "Pass" : "Fail";
console.log(testResult); // Output: Pass


let environment = "staging";
let baseURL = environment === "production" ? "https://api.example.com" : "https://staging-api.example.com";
console.log(baseURL); // Output: https://staging-api.example.com

// ? : is the ternary operator, it is a shorthand for an if-else statement. 
// It takes three operands: a condition, a value to return if the condition is true, 
// and a value to return if the condition is false.  
//: The ternary operator is often used for simple conditional assignments or expressions, 
// making the code more concise and readable.

let isCI = true;
let browserMode = isCI ? "headless" : "headed;";
console.log("Launching browser in:", browserMode); // Output: headless  

let responseTime = 850; // in milliseconds
let sla = 1000;
let slaStatus = responseTime <= sla ? "Within SLA" : "SLA Breached";
console.log(`Response: ${responseTime} ms) - SLA Status: ${slaStatus}`); // Output: Within SLA

condition ? True : false; // syntax of ternary operator, it evaluates the condition and 
// returns the value based on the result of the condition.


let condition = true;
let isSRKMale = condition ? "True" : "False";
console.log(isSRKMale); // Output: True

//Nested Ternary Operator
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log(`Score: ${score}, Grade: ${grade}`); // Output: Score: 85, Grade: B 

// multiple conditions can be evaluated using nested ternary operators, but it can make the 
// code less readable, so it's important to use them judiciously.

let age = 26;
let is_pramos_got_to_Goa = age > 26 ? "Yes, Pramos will go to Goa." : "else he will not go to Goa.";
console.log(is_pramos_got_to_Goa); // Output: else he will not go to Goa. because age is not 
// greater than 26, it is equal to 26.

let age_pramod = 45;
let is_pramod_d = age_pramod > 18 ? (age_pramod > 26 ? "Drink" : "No Drink") : "else he will not go to Goa.";
console.log(is_pramod_d); // Output: Drink because age_pramod is greater than 18 and also greater than 26, 
//  so the first condition is true and the second condition is also true, so it returns "Drink". 
// above code is an example of nested ternary operator, it checks if age_pramod is greater than 18, 
// if true then 
// it checks if age_pramod is greater than 26, if true then it returns "Drink", else it returns "No Drink". 
// if the first condition is false, it returns "else he will not go to Goa." RARELY USED, because it can 
// make the code less readable, so it's important to use them judiciously.

let statusCode = 404;
let Category =
    statusCode < 300 ? "Success" :
        statusCode < 400 ? "Redirection" :
            statusCode < 500 ? "Client Error" : "Server Error";
console.log(`Status Code: ${statusCode}, Category: ${Category}`);  // Output: Status Code: 404, Category: 
// Client Error because statusCode is less than 500 but greater than or equal to 400,
// so it returns "Client Error". This is another example of nested ternary operator,
//  it checks the status code and categorizes it based on the range it falls into.

let temperature = 30;
let weather = temperature > 30 ? "Hot" : temperature > 20 ? "Warm" : "Cold";
console.log(`Temperature: ${temperature}°C, Weather: ${weather}`); // Output: Temperature: 30°C, Weather: 
// Warm because temperature is greater than 20 but not greater than 30, so it returns "Warm".
//  This
// is yet another example of nested ternary operator, it categorizes the weather based on the temperature.

// Output: Temperature: 35°C,
// Feel: Hot because temp is greater than or equal to 30 but not greater than or equal to 40,
// so it returns "Hot". This is an example of nested ternary operator, it categorizes the
//  feel based on the temperature.
let temp = 35;
let feel = temp >= 40 ? "Scorching" : temp >= 30 ? "Hot" : temp >= 20 ? "Warm" : "Cold";
//console.log(`Temperature: ${temp}°C, Feel: ${feel}`); l // Output: Temperature: 35°C, Feel: Hot
console.log("7. Temparature:", temp, "| Feel:", feel); // Output: Temperature: 35°C, Feel: Hot