//type checking
interface User {
    name: string;
    age: number;
}

const user: User = {
    name: "Darshan",
   // age: "21"  // ❌ Error: Type 'string' is not assignable to type 'number'
   age:21
};

console.log(user.age + 1);
