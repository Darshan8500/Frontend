

// Function Declaration (Named Function)
function greet() {
  console.log("Hello from a function declaration!");
}
greet();

// Function Expression (Anonymous Function Assigned to a Variable)
const sayHello = function() {
  console.log("Hello from a function expression!");
};
sayHello();

//  Arrow Function 
const greetUser = () => {
  console.log("Hello from an arrow function!");
};
greetUser();

// Arrow function with return
const multiply = (a, b) => a * b;
console.log("Multiply 2 * 3 =", multiply(2, 3)); // 6

//  Function Reusability (Code without Repetition)
function add(a, b) {
  return a + b;
}
console.log("Add 5 + 3 =", add(5, 3));
console.log("Add 10 + 20 =", add(10, 20));



//  Stored in a variable
const greetAgain = function() {
  console.log("Hi again!");
};
greetAgain();

//  Passed as argument to another function
function runFunction(fn) {
  console.log("Running the passed function:");
  fn();
}

function sayBye() {
  console.log("Bye!");
}
runFunction(sayBye);

//  Returned from another function
function getWelcomeFunction() {
  return function() {
    console.log("Welcome!");
  };
}

const welcome = getWelcomeFunction();
welcome();

//  Used in array methods (map)
let numbers = [1, 2, 3];

let squares = numbers.map(function(num) {
  return num * num;
});
console.log("Squares using map():", squares);

// Same using arrow function
let squaresArrow = numbers.map(n => n * n);
console.log("Squares with arrow function:", squaresArrow);

// Filter even numbers
let evens = numbers.filter(n => n % 2 === 0);
console.log("Even numbers using filter():", evens);
