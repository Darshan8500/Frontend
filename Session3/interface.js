//no type checking in js
const user = {
    name: "Darshan",
    age: "21"  // 🛑 age is a string instead of number
};

console.log(user.age + 1); // Outputs "211" due to string concat
//corresponding example in interface1.ts