// TypeScript – Union & Intersection Examples
//  Union Type
var value;
value = "Hello";
value = 123;
//  Union in a Function
function printId(id) {
    console.log("ID:", id);
}
printId(101);
printId("abc123");
//  Narrowing Union Types
function handleInput(input) {
    if (typeof input === "string") {
        console.log("Uppercase:", input.toUpperCase());
    }
    else {
        console.log("Doubled:", input * 2);
    }
}
handleInput("hello");
handleInput(5);
var person = {
    name: "Darshan",
    age: 21
};
var darshan = {
    role: "admin",
    accessLevel: 5,
    name: "Darshan"
};
function showStatus(s) {
    console.log("Current status:", s);
}
showStatus("success");
showStatus("loading");
