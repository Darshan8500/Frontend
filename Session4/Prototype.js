

//  Inheritance using __proto__
let animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  }
};

let rabbit = {
  jumps: true
};
rabbit.__proto__ = animal;

console.log("rabbit.eats:", rabbit.eats);   
console.log("rabbit.jumps:", rabbit.jumps); 
rabbit.walk();                              

//  Inheritance Chain Example
let grandParent = { hasHouse: true };
let parent = { __proto__: grandParent };
let child = { __proto__: parent };

console.log("child.hasHouse:", child.hasHouse); // true (inherited from grandParent)

//  Using Object.create()
let baseUser = {
  greet() {
    console.log("Hello from baseUser");
  }
};

let newUser = Object.create(baseUser); // Create new object with baseUser as prototype
newUser.name = "Darshan";
newUser.greet(); // "Hello from baseUser" (inherited)

//  Using Object.setPrototypeOf()
let flyer = { flies: true };
let bird = {};
Object.setPrototypeOf(bird, flyer);

console.log("bird.flies:", bird.flies); // true 

//  Another example with prototype lookup
let car = {
  wheels: 4,
  start() {
    console.log("Car starting...");
  }
};

let electricCar = {
  battery: "100%"
};
electricCar.__proto__ = car;

console.log("electricCar.wheels:", electricCar.wheels); 
electricCar.start();                                     
