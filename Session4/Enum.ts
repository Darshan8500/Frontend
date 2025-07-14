

// Numeric Enums (default)
enum Direction {
  Up,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Left;
console.log("Direction.Left:", move); 

//  Numeric Enums with custom values
enum StatusCode {
  Success = 200,
  NotFound = 404,
  ServerError = 500
}

console.log("StatusCode.Success:", StatusCode.Success); 

//  String Enums
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}

let favorite: Color = Color.Green;
console.log("Favorite color:", favorite); 

//  Using Enums in Functions
enum Role {
  Admin,
  User,
  Guest
}

function checkAccess(role: Role): string {
  if (role === Role.Admin) {
    return "Full Access";
  } else if (role === Role.User) {
    return "Limited Access";
  } else {
    return "Guest Access";
  }
}

console.log("Access for User:", checkAccess(Role.User)); // Limited Access

// Reverse Mapping 
enum Month {
  Jan = 1,
  Feb,
  Mar
}

console.log("Month[2]:", Month[2]); 
console.log("Month.Feb:", Month.Feb); 
