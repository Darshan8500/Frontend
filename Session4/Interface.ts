

//  Basic Interface
interface Person {
  name: string;
  age: number;
}

const p1: Person = {
  name: "Alice",
  age: 25
};

//  Optional Properties
interface Product {
  name: string;
  price?: number; // Optional
}

const book: Product = { name: "TypeScript Book" };

// Readonly Properties
interface Vehicle {
  readonly model: string;
  year: number;
}

const car: Vehicle = { model: "Tesla", year: 2023 };


// Function Signatures in Interface
interface Greeter {
  name: string;
  greet(): string;
}

const user: Greeter = {
  name: "Darshan",
  greet() {
    return `Hello, ${this.name}`;
  }
};

console.log(user.greet()); 

//  Interface Extension (Inheritance)
interface Animal {
  name: string;
}

interface Do
{}
