// Learning Functions in JavaScript

// 1. Normal function

function helloWorld() {
    console.log("Hello World");
}

helloWorld();

var hW= helloWorld();
console.log(hW);

function sum(a,b) {
    return a+b;
}

var x=909;
var y=808;
// var s=sum(x,y);
console.log(sum(x,y));


// 2. Functions Expression

let add= function addition(a, b) {
    return a+b;
}
console.log(add(89,87));

let sub=function subtraction(a,b) {
    return a-b;    
}
console.log(sub(89,56));


// 3. IIFE => Immediately Invoke Functions Expression

let num=0;
let pos_neg= (function positiveOrNegative(params) {
    if (num>0) {
        console.log("Positive");
    }
    else if (num<0){
        console.log("Negative");
    }
    else{
        console.log("It's a Zero");
    }
}(0));
