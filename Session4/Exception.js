

//  try-catch example
try {
  let result = 5 / 0;
  console.log("Result is:", result);

  let x = y + 1; // Error: y is not defined
} catch (err) {
  console.log("Error caught:", err.message);
}

//  Catching errors in a function
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a / b;
  } catch (err) {
    console.log("Caught an error:", err.message);
    return null;
  }
}

console.log("Divide 10 / 2 =", divide(10, 2)); // 5
console.log("Divide 5 / 0 =", divide(5, 0));   // null

// Using finally block
try {
  console.log("Try block running");
  throw new Error("Oops!");
} catch (e) {
  console.log("Caught:", e.message);
} finally {
  console.log(" This always runs ");
}

//  Handling JSON parsing
let jsonStr = '{ "name": "John" }';

try {
  let user = JSON.parse(jsonStr);
  console.log("User name:", user.name);
} catch (e) {
  console.log("Invalid JSON:", e.message);
}

//  Throwing custom errors
function login(user) {
  if (!user) {
    throw new Error("User must be provided!");
  }
  console.log("Logged in:", user);
}

try {
  login(); // No user passed
} catch (e) {
  console.log("Login failed:", e.message);
}
