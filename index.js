//import data in common js way with destructuring
const { num, add } = require("./local-1");
const { num:numTwo, add:addTwo } = require("./local-2");

console.log(add(10,10));
console.log(addTwo(30,20));
