console.log("Learning ES6");

// dedault imports
import obj from "./string.js";
import imPorts from "./string.js";
console.log(obj);

// named imports
import { key } from "./object.js";
import { exportedObj } from "./object.js";

// import all
import * as bundled from "./string";

let b1 = bundled.key;
let b2 = bundled.exportedObj;

console.log(b1);
console.log(b2);
