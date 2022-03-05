// fs-> file system 
const fs=require("fs");

let res=fs.appendFileSync("f1.txt", "Hi this is a F1 file.")
fs.appendFileSync("f2.txt", "I am F2 file")
console.log(res);

let data=fs.readFileSync("fs.js")
let dataa=fs.readFileSync("fs.js", "utf-8")
console.log(data);
console.log(dataa);