// Learning Hoisting

console.log(a);                 //Undefined
console.log(ok);                // log undefined var 
greet();                        //calls function
var a=10;                       //assign value to a
// ok();
function greet() {
    console.log("Hello there");
}

var ok= function ok() {
    console.log("It's OK");
}
ok();
