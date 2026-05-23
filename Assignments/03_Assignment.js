/*Question 3 — Bug Severity Classifier

Problem: Given a bug's impact score (1–10), classify the severity.

9–10 → Critical (block release)
7–8 → High
4–6 → Medium
1–3 → Low
Anything else → Invalid score

Sample Input/Output:

Input: 9
Output: Severity: Critical — Block release

Input: 5
Output: Severity: Medium*/

let score = 3;

if (score >= 9 && score <= 10) {
    console.log(`Severity score is: ${score} - It's Critical`);
} else if (score >= 7 && score <= 8) {
    console.log(`Severity score is: ${score} - It's High`);
} else if (score >= 4 && score <= 6) {
    console.log(`Severity score is: ${score} - It's Medium`);
} else if (score >= 1 && score <= 3) {
    console.log(`Severity score is: ${score} - It's Low`);
} else {
    console.log(`Severity score is: ${score} - It's Invalid`);
}