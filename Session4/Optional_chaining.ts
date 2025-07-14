

//  Accessing Nested Property with Optional Contact
const usernew: {
  name: string;
  address: { city: string };
  contact?: { phone: string };
} = {
  name: "Darshan",
  address: {
    city: "Bangalore"
  }
};

console.log(usernew.address?.city);  
console.log(usernew.contact?.phone);    

//  Accessing Array Index
const items1: string[] | undefined = undefined;
const firstItem1 = items1?.[0];
console.log(firstItem1);  

// Optional Method Call with Defined Types
const logger1: {
  log: () => void;
  debug?: () => void;
} = {
  log: () => console.log("Logging...")
};

logger1.log?.();      
logger1.debug?.();   

// Functions That Might Not Exist
type Config = {
  onInit?: () => void;
};

const config1: Config = {};
config1.onInit?.(); 

// Optional Chaining with Parameters
function printUser1(user?: { name?: string }) {
  console.log(user?.name?.toUpperCase() ?? "No name");
}

printUser1({ name: "Alice" }); 
printUser1();             

//  Optional Chaining with Nullish Coalescing

const newsettings: {
  profile?: {
    bio?: string;
  }
} = {
  profile: undefined
};

 const bio = newsettings.profile?.bio ?? "Not available";
console.log(bio); 


