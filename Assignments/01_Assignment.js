// Question 1 — HTTP Status Code Categorizer
// Problem: Given an HTTP status code, print which category it belongs to.

/*  200–299 → Success
    300–399 → Redirection
    400–499 → Client Error
    500–599 → Server Error
    Anything else → Invalid

Sample Input/Output:

Input: 404
Output: Client Error

Input: 200
Output: Success*/

let statuscode = 200;

if (statuscode >= 200 && statuscode <= 299) {
    console.log(`statuscode is: ${statuscode} - Success`);
} else if (statuscode >= 300 && statuscode <= 399) {
    console.log(`statuscode is: ${statuscode} - Redirection`);
} else if (statuscode >= 400 && statuscode <= 499) {
    console.log(`statuscode is: ${statuscode} - Client Error`);
} else if (statuscode >= 500 && statuscode <= 599) {
    console.log(`statuscode is: ${statuscode} - Server Error`);
} else {
    console.log(`statuscode is: ${statuscode} - Invalid`);
}