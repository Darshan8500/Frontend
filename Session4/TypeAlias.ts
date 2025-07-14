

//  Simple Type Alias
type UserID = number;

let id1: UserID = 101;
let id2: UserID = 202;

//  Object Type Alias
type User = {
  name: string;
  age: number;
};

let user1: User = { name: "Alice", age: 25 };
let user2: User = { name: "Bob", age: 30 };

//  Union Type Alias
type Status = "success" | "error" | "loading";

let responseStatus: Status = "success";
responseStatus = "loading";
// responseStatus = "done"; 

//  Function using Type Alias
function greet(user: User): string {
  return `Hello, ${user.name}`;
}

const u: User = { name: "Darshan", age: 21 };
console.log(greet(u)); 

//  Nested & Complex Type Alias
type Address = {
  street: string;
  city: string;
};

type Employee = {
  id: number;
  name: string;
  address: Address;
};

const emp: Employee = {
  id: 1,
  name: "John",
  address: {
    street: "123 Main St",
    city: "Bangalore"
  }
};
