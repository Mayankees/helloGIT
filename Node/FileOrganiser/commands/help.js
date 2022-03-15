// creating help command
function help() {
    console.log(`
        These are some myCLI commands used in various situations:

        1. node main.js tree <path>
        2. node main.js help <path>
        3. node main.js organize <path>
    `);
} 
// help();

// to export functions to main file
module.exports ={
    help: help
}