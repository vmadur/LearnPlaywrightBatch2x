/*Question 4 — Build Health Reporter

Problem: Given the percentage of test cases passed in a CI build, report build health.

100% → Green Build
90–99% → Stable (investigate failures)
70–89% → Unstable
Below 70% → Broken Build (block deployment)

Sample Input/Output:

Input: 95
Output: 🟡 Stable — Investigate failures

Input: 65
Output: 🔴 Broken Build — Block deployment*/

let buildhealth = 77;

switch (true) {
    case buildhealth === 100:
        console.log("Green Build 🟢 - Ready for testing");
        break;
    case buildhealth >= 90 && buildhealth <= 99:
        console.log("Stable Build 🟡 - investigate the failures");
        break;
    case buildhealth >= 70 && buildhealth <= 89:
        console.log("Unstable Build 🟠 - investigate the failures");
        break;
    case buildhealth >= 0 && buildhealth < 70:
        console.log("Broken Build 🔴 - Block the deployment");
        break;
    default:
        console.log("Invalid");
}