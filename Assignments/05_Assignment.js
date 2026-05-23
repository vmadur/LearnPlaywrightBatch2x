/*Question 5 — Login Lockout After Failed Attempts

Problem: Track failed login attempts. Lock the account after 3 failed attempts.

Sample Input/Output:

Input: attempts = 2
Output: 1 attempt left before lockout

Input: attempts = 3
Output: 🔒 Account Locked — Contact support

Input: attempts = 0
Output: Login successful*/

let loginattempt = 3;

switch (true) {
    case loginattempt === 0:
        console.log(`Number of Login attempt is ${loginattempt}: Login Successful`);
        break;
    case loginattempt === 2:
        console.log(
            `Number of Login attempt is ${loginattempt}: 1 attempt left before lockout`,
        );
        break;
    case loginattempt === 3:
        console.log(
            `Number of Login attempt is ${loginattempt}: 🔒 Account Locked — Contact support`,
        );
        break;
    default:
        console.log("Login attempts are used please try later");
}