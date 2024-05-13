//here i also explore about fs module but in async way
//at first require
const fs = require("fs");

//read file with async
fs.readFile("./texts/readAsync.txt", "utf-8", (err, data) => {
  if (err) {
    throw Error("we can't read");
  }
  console.log(data);
  //write file with async
  fs.writeFile(
    "./texts/readAsync.txt",
    "./texts/write-text-async.txt",
    "utf-8",
    (err) => {
      if (err) {
        throw Error("error on writing data");
      }
    }
  );
});
