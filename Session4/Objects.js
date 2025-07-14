

// Creating Objects

// using Object literal 
let person = {
  name: "Esha",
  age: 25,
  isStudent: true
};
console.log("Object literal:", person);

// using Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}
let p = new Person("aisha", 40);
console.log("Constructor function:", p);

// using ES6 Class
class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }
}
let s = new Student("Tweety", "A");
console.log("ES6 class:", s);

// using Object.create()
let base = { greet: "Hello" };
let objFromBase = Object.create(base);
console.log("Object.create():", objFromBase.greet); // Inherited from base

// Accessing Properties

let user = {
  username: "Darshan",
  role: "Admin"
};

console.log("Dot notation:", user.username);       
console.log("Bracket notation:", user["role"]);    

let key = "username";
console.log("Access using variable key:", user[key]); 

//  Add New Property
user.email = "darshan@example.com";
console.log("After adding property:", user);

//  Delete a Property
delete user.role;
console.log("After deleting property:", user);

//  Check if Key Exists
console.log("username in user?", "username" in user); 
console.log("role in user?", "role" in user);         

// Keys Sorted Example
let sortedKeys = {
  "3": "three",
  "1": "one",
  "2": "two"
};
console.log("Keys may appear sorted numerically:", sortedKeys);

//  Full Object Operations Example
let book = {
  title: "JavaScript Essentials",
  pages: 200
};

// Access
console.log("Book title:", book.title);

// Add
book.author = "Jane Doe";

// Delete
delete book.pages;

// Check key
if ("author" in book) {
  console.log("Author exists:", book.author);
} else {
  console.log("Author not found.");
}

console.log("Final book object:", book);
