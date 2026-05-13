let firstname = "Prrammod"; // String literal assigned to variable firstname
let fullname = `Hi ${firstname} Dutta`; // Template literal using backticks and variable interpolation
console.log(fullname); // Hi Prrammod Dutta
console.log(typeof fullname); // "string"

//above code demonstrates the use of template literals in JavaScript, 
// which allow for easier string interpolation and multi-line strings.
const env = "staging";
const userId = "12345";
const apiUrl = `https://${env}.example.com/users/${userId}`;
console.log(apiUrl); // https://staging.example.com/users/12345

const env = "production";
const userId = "12345";
const apiUrl = `https://${env}.example.com/users/${userId}`;
console.log(apiUrl); // https://prod.example.com/users/12345