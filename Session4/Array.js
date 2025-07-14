

//  Creating Arrays


let fruits = ["apple", "banana", "cherry"];
console.log("Fruits:", fruits);


let colors = new Array("red", "green", "blue");
console.log("Colors:", colors);


let csv = "one,two,three";
let items = csv.split(",");
console.log("Items from string:", items);

//  Data Types
let mixedArray = [42, "hello", true];
console.log("Mixed array:", mixedArray);

// Accessing by index
console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);

//   Array Methods

// push()
fruits.push("orange");
console.log("After push:", fruits);

// pop()
fruits.pop();
console.log("After pop:", fruits);

// shift()
fruits.shift();
console.log("After shift:", fruits);

// unshift()
fruits.unshift("kiwi");
console.log("After unshift:", fruits);

// slice()
let slicedFruits = fruits.slice(1, 3);
console.log("Sliced fruits (1 to 2):", slicedFruits);

// splice() – remove
let nums = [1, 2, 3, 4, 5];
nums.splice(2, 1); // remove 1 item at index 2
console.log("After splice remove:", nums);

// splice() – insert
nums.splice(2, 0, 99);
console.log("After splice insert:", nums);

// indexOf()
console.log("Index of 'green':", colors.indexOf("green"));

// includes()
console.log("Colors includes 'blue'?", colors.includes("blue"));

// sort()
let unsortedNums = [4, 2, 9, 1];
unsortedNums.sort((a, b) => a - b);
console.log("Sorted numbers:", unsortedNums);

// map()
let numbers = [1, 2, 3];
let doubled = numbers.map(n => n * 2);
console.log("Doubled numbers:", doubled);

// filter()
let even = numbers.filter(n => n % 2 === 0);
console.log("Even numbers:", even);

// Combined Example
let testNums = [5, 2, 9, 1];
testNums.push(10);
let sorted = testNums.sort((a, b) => a - b);
let filtered = sorted.filter(n => n > 5);
let result = filtered.map(n => n * 2);
console.log("Final result:", result);
