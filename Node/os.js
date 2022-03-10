// learning OS module
const os=require("os");

// Returns the operating system CPU architecture for which the Node.js binary was compiled
console.log(os.arch());

// Returns an array of objects containing information about each logical CPU core.
console.log(os.cpus());

// Returns the host name of the operating system as a string.
console.log(os.hostname());

// Returns information about the currently effective user.
console.log(os.userInfo());

// Returns an object containing network interfaces that have been assigned a network address.
console.log(os.networkInterfaces());

// Returns the operating system as a string.
console.log(os.release());

// Returns a string identifying the operating system platform.
console.log(os.platform());

// Returns the operating system name
console.log(os.type());

// Returns the total amount of system memory in bytes as an integer.
console.log(os.totalmem());


// Returns the system uptime in number of seconds.
console.log(os.uptime()/3600);
