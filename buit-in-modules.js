//lets explore some built in modules
const path= require("path");
//get the path
console.log(path.dirname("D:/lvlTwo/learn-node/buit-in-modules.js"));

//it can be devide all parts into single single part
console.log(path.parse("D:/lvlTwo/learn-node/buit-in-modules.js"));

//same as dirname but in this case we can join things like extra pathname
console.log(path.join("D:/lvlTwo/learn-node/", "buit-in-modules.js"));
