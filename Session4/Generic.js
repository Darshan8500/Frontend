
//  Generic Function
function identity(value) {
    return value;
}
console.log(identity("Hello")); 
console.log(identity(123)); 
//  Type Inference with Generics
function printValue(value) {
    console.log("Value:", value);
}
printValue("Test"); 
printValue(42); 
//  Generic with Arrays
function getFirst(arr) {
    return arr[0];
}
var firstNum = getFirst([1, 2, 3]);
var firstStr = getFirst(["a", "b", "c"]);
var numberBox = { value: 99 };
var stringBox = { value: "Hello" };
//  Generic Class
var Container = /** @class */ (function () {
    function Container() {
        this.items = [];
    }
    Container.prototype.add = function (item) {
        this.items.push(item);
    };
    Container.prototype.getAll = function () {
        return this.items;
    };
    return Container;
}());
var stringContainer = new Container();
stringContainer.add("Apple");
stringContainer.add("Banana");
console.log(stringContainer.getAll()); 
var coordinates = { first: 10, second: 20 };
var login = { first: "user1", second: true };
var userResponse = {
    status: 200,
    data: {
        name: "Darshan",
        age: 21
    }
};
