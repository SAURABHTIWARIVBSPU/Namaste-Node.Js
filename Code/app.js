
require("./xyz.js"); // one module into another
const calculateSum = require("./sum.js");
var name = "Namaste Nodejs";

var a = 10;
var b = 20;
calculateSum(a, b);

console.log(globalThis == globalThis); // Correctly using globalThis
