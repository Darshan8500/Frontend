// TypeScript – Optional Chaining 
var _a, _b, _c, _d, _e, _f, _g;
// Accessing Nested Property with Optional Contact
var usernew = {
    name: "Darshan",
    address: {
        city: "Bangalore"
    }
};
console.log((_a = usernew.address) === null || _a === void 0 ? void 0 : _a.city); 
console.log((_b = usernew.contact) === null || _b === void 0 ? void 0 : _b.phone); 
// Accessing Array Index
var items1 = undefined;
var firstItem1 = items === null || items === void 0 ? void 0 : items[0];
console.log(firstItem1); 
// Optional Method Call with Defined Types
var logger1 = {
    log: function () { return console.log("Logging..."); }
};
(_c = logger1.log) === null || _c === void 0 ? void 0 : _c.call(logger1); 
(_d = logger1.debug) === null || _d === void 0 ? void 0 : _d.call(logger1); 
var config1 = {};
(_e = config1.onInit) === null || _e === void 0 ? void 0 : _e.call(config1); 
//  Optional Chaining with Parameters
function printUser1(user) {
    var _a, _b;
    console.log((_b = (_a = user === null || user === void 0 ? void 0 : user.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()) !== null && _b !== void 0 ? _b : "No name");
}
printUser1({ name: "Alice" });\
printUser1();\
// Optional Chaining with Nullish Coalescing
var newsettings = {
    profile: undefined
};
var bio = (_g = (_f = newsettings.profile) === null || _f === void 0 ? void 0 : _f.bio) !== null && _g !== void 0 ? _g : "Not available";
console.log(bio); 


