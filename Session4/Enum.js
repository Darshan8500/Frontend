// Numeric Enums (default)
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var move = Direction.Left;
console.log("Direction.Left:", move);
//  Numeric Enums with custom values
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["ServerError"] = 500] = "ServerError";
})(StatusCode || (StatusCode = {}));
console.log("StatusCode.Success:", StatusCode.Success); 
// String Enums
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
var favorite = Color.Green;
console.log("Favorite color:", favorite); 
//  Using Enums in Functions
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
function checkAccess(role) {
    if (role === Role.Admin) {
        return "Full Access";
    }
    else if (role === Role.User) {
        return "Limited Access";
    }
    else {
        return "Guest Access";
    }
}
console.log("Access for User:", checkAccess(Role.User)); // Limited Access
//  Reverse Mapping 
var Month;
(function (Month) {
    Month[Month["Jan"] = 1] = "Jan";
    Month[Month["Feb"] = 2] = "Feb";
    Month[Month["Mar"] = 3] = "Mar";
})(Month || (Month = {}));
console.log("Month[2]:", Month[2]);
console.log("Month.Feb:", Month.Feb);
