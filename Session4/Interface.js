var p1 = {
    name: "Alice",
    age: 25
};
var book = { name: "TypeScript Book" };
var car = { model: "Tesla", year: 2023 };
var user = {
    name: "Darshan",
    greet: function () {
        return "Hello, ".concat(this.name);
    }
};
console.log(user.greet());
