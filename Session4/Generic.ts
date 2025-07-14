

// Generic Function
function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Hello"));  
console.log(identity<number>(123));     

//  Type Inference with Generics
function printValue<T>(value: T): void {
  console.log("Value:", value);
}

printValue("Test");  
printValue(42);      

//  Generic with Arrays
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

const firstNum = getFirst([1, 2, 3]);
const firstStr = getFirst(["a", "b", "c"]);

//  Generic Interface
interface Box<T> {
  value: T;
}

const numberBox: Box<number> = { value: 99 };
const stringBox: Box<string> = { value: "Hello" };

// Generic Class
class Container<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

const stringContainer = new Container<string>();
stringContainer.add("Apple");
stringContainer.add("Banana");

console.log(stringContainer.getAll()); 

//  Generic Type Alias
type Pair<T, U> = {
  first: T;
  second: U;
};

const coordinates: Pair<number, number> = { first: 10, second: 20 };
const login1: Pair<string, boolean> = { first: "user1", second: true };

// 7. Real-Life Example: API Response
type ApiResponse<T> = {
  status: number;
  data: T;
};

const userResponse: ApiResponse<{ name: string; age: number }> = {
  status: 200,
  data: {
    name: "Darshan",
    age: 21
  }
};
