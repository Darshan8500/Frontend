var id1 = 101;
var id2 = 202;
var user1 = { name: "Alice", age: 25 };
var user2 = { name: "Bob", age: 30 };
var responseStatus = "success";
responseStatus = "loading";

// Function using Type Alias
function greet(user) {
    return "Hello, ".concat(user.name);
}
var u = { name: "Darshan", age: 21 };
console.log(greet(u)); 
var emp = {
    id: 1,
    name: "John",
    address: {
        street: "123 Main St",
        city: "Bangalore"
    }
};
