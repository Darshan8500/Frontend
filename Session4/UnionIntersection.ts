// TypeScript – Union & Intersection Examples

//  Union Type
let value: string | number;

value = "Hello"; 
value = 123;      


//  Union in a Function
function printId(id: number | string) {
  console.log("ID:", id);
}

printId(101);
printId("abc123");

//  Narrowing Union Types
function handleInput(input: string | number) {
  if (typeof input === "string") {
    console.log("Uppercase:", input.toUpperCase());
  } else {
    console.log("Doubled:", input * 2);
  }
}

handleInput("hello"); 
handleInput(5);       

//  Intersection Type
type Name = {
  name: string;
};

type Age = {
  age: number;
};

type Person = Name & Age;

const person: Person = {
  name: "Darshan",
  age: 21
};

//  Combining Union & Intersection
type Admin = {
  role: "admin";
  accessLevel: number;
};

type User = {
  name: string;
};

type AdminUser = Admin & User;

const darshan: AdminUser = {
  role: "admin",
  accessLevel: 5,
  name: "Darshan"
};

//  Literal Type Union
type Status = "success" | "error" | "loading";

function showStatus(s: Status) {
  console.log("Current status:", s);
}

showStatus("success");
showStatus("loading");

