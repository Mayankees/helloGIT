// Starting Javascript

// var let const


// var keyword
// variable declaration
var a;
// varaible initialization
a=99;
console.log(a);
console.log(typeof a);

// varaible re-initialization
a="Hello JS";
console.log(a);
console.log(typeof a);

// ' ', " ", ` `
// Singlequotes,Double quotes , Back ticks
a="O";
console.log(a);
console.log(typeof a);

// variable re-declaration
a=false;
console.log(a);
console.log(typeof a);

a=null;
console.log(a);
console.log(typeof a);

a=2.85;
console.log(a);
console.log(typeof a);

a=228;
console.log(`half of ${a} is ${a/2}`);
console.log(typeof a);

a='Hello welcome to Yankeeverse. \nThis is euphoria';
console.log(a);
console.log(typeof a);

a=`Hello welcome to Yankeeverse.
This is euphoria.`;
console.log(a);
console.log(typeof a );

// let keyword
// variable declaration & initialization
let b=90;
console.log(b);

// variable re-initialization
b=58;
console.log(b);

// does not allow re-declaration
    // let b=65;
    // console.log(b);
// SyntaxError: Identifier 'b' has already been declared


// const keyword
// varaible declaration & initialization
const c="Constant";
console.log(c);

// does not allow variable re-initialization
    // c="Delta";
    // console.log(c);
// TypeError: Assignment to constant variable.

// does not allow variable re-declaration
    // const c="Beta";
    // console.log(c);
// SyntaxError: Identifier 'c' has already been declared

// loops

let num=198;
let oCount=0;
let eCount=0;
for (let i = 1; i <= num; i++) {
    if (i%2==0) {
        console.log(i+" Even");
        eCount++;
    }
    else{
        console.log(i+" Odd");
        oCount++;
    }
    
}
console.log("Total Even numbers are: "+eCount);
console.log("Total Odd numbers are: "+oCount);