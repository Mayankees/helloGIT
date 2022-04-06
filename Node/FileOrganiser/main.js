// entry point of command line

let helpFunc = require("./commands/help");
let orgFunc = require("./commands/organize");
let treeFunc = require("./commands/tree");
// helpFunc.help();
// we have to slice I 2 data (node main.js) from the input array
let inputArr = process.argv.slice(2);
let command = inputArr[0];
let path = inputArr[1];

switch (command) {
  case "tree": // call tree function
    treeFunc.tree(path);
    // console.log("Tree command " + path);
    break;
  case "help": // call help function and give list of command
    helpFunc.help();
    // console.log("Help command "+path);
    break;
  case "organize": // call organize function organize files in their respective folder
    orgFunc.organize(path);
    // console.log("Organize command "+path);
    break;
  default:
    console.log("Invalid command " + path);
    break;
}
