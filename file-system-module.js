//here i explore about file system module
//require fs module
const fs = require("fs");
//---------------Sync----------------
//reading file text
const readText =  fs.readFileSync("./texts/read.txt","utf-8");
console.log(readText);


//write file text
const writeText = fs.writeFileSync("./texts/write-text.txt", readText+"i am writing");
console.log(writeText);
