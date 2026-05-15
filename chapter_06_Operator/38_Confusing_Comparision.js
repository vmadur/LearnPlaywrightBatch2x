// ---------------------- TRANSITIVITY BREAK ----------------------
console.log("" == "0");  // false  (both strings, direct comparison, no coercion)
console.log(0 == "");    // true   ("" coerces to 0)
console.log(0 == "0");   // true   ("0" coerces to 0)
// Transitivity broken: A==B and B==C does NOT imply A==C

// ---------------------- null & undefined ----------------------
console.log(null == undefined); // true   (== treats them as equal)
console.log(null === undefined); // false (different types)
console.log(null == 0);          // false (null only == undefined and itself)
console.log(null == false);      // false
console.log(undefined == false); // false
console.log(null === null);      // true
console.log(undefined === undefined); // true

// ---------------------- NaN madness ----------------------
console.log(NaN == NaN);  // false (NaN is never equal to anything, including itself)
console.log(NaN === NaN); // false (same rule applies for strict too)
console.log(NaN == 0);    // false
console.log(NaN < 0);     // false (any comparison with NaN is false)
console.log(NaN > 0);     // false
console.log(NaN <= 0);    // false
console.log(NaN >= 0);    // false

// ---------------------- number vs string coercion ----------------------
console.log(1 == "1");     // true  ("1" coerces to 1)
console.log(1 === "1");    // false (number vs string)
console.log(1 == true);    // true  (true coerces to 1)
console.log(1 === true);   // false (number vs boolean)
console.log(0 == false);   // true  (false coerces to 0)
console.log(0 === false);  // false (number vs boolean)
console.log("1" == true);  // true  (both coerce to 1 via Number)
console.log("0" == false); // true  (both coerce to 0 via Number)
console.log("true" == true); // false ("true" → NaN, true → 1, NaN != 1)

// ---------------------- arrays with == ----------------------
console.log([] == false);  // true   ([].toString() → "" → 0, false → 0)
console.log([] == 0);      // true   ([].toString() → "" → 0)
console.log([] == "");     // true   ([].toString() → "")
console.log([] == ![]);    // true   (![] → false, [] → "" → 0, false → 0 → 0==0)
console.log([] == []);     // false  (different object references)
console.log([1] == 1);     // true   ([1].toString() → "1" → 1)
console.log([1, 2] == "1,2"); // true  ([1,2].toString() → "1,2")
console.log([1] == [1]);   // false  (different object references)

// ---------------------- objects with == ----------------------
console.log({} == {});       // false (different object references)
console.log({} == "[object Object]"); // true (toString() matches)
console.log({} == 0);        // false ([object Object] → NaN → NaN != 0)
console.log({ valueOf: () => 5 } == 5); // true (custom valueOf)

// ---------------------- whitespace strings ----------------------
console.log("\t" == 0);    // true ("\t" → 0 via Number)
console.log("\n" == 0);    // true ("\n" → 0 via Number)
console.log(" " == 0);     // true (" " → 0 via Number)
console.log("\t" == "");   // false (both strings, no coercion)
console.log(" " == false); // true (" " → 0, false → 0)

// ---------------------- special edge cases ----------------------
console.log(0 == "\t");    // true
console.log(0 == "\n");    // true
console.log(0 == " ");     // true
console.log("" == "\t");   // false (string vs string, no coercion)
console.log(Infinity == Infinity); // true
console.log(Infinity == "Infinity"); // true ("Infinity" → Infinity via Number)

// ---------------------- array/object in boolean context vs == ----------------------
console.log(Boolean([]));  // true  (objects are truthy)
console.log([] == false);  // true  (BUT coercion leads to false!)
console.log(Boolean({}));  // true
console.log({} == false);  // false ({} → "[object Object]" → NaN, false → 0)
//NaN -> not a Number
