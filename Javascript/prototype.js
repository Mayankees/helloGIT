var arr = [];
var obj = {};

function abc() {
  console.log("Prototypal Inheritance");
}
abc();

console.log("Array vs Array constructor prototype");
console.log(arr.__proto__);
console.log(Array.prototype);
console.log(Array.prototype.__proto__);
console.log(Array.prototype.prototype); //Undefined

console.log("Prototype of Array prototype vs Object prototype");
console.log(arr.__proto__.__proto__);
console.log(obj.__proto__);

console.log("Function prototype");
console.log(abc.__proto__);
console.log(abc.__proto__.__proto__);

console.log("Prototype of Object prototype ");
console.log(obj.__proto__.__proto__); //null
console.log(Object.prototype.__proto__); //null


let user = {
    name:"Mayank",
    sayHi:function () {
        console.log(`${this.name} says Hi`);
    }
};

let admin = {
    role:"admin",
    age:30
}

console.log(admin.name);    //Undefined

// Inheritance of user's property in admin object
admin.__proto__ = user;

console.log(admin.name);
admin.name = "Mayank Singh";
admin.sayHi();
user.sayHi();

// Question I: Working with prototype 
// Which values are shown in the process?
/*
let animal = {
  jumps: null,
};
let rabbit = {
  __proto__: animal,
  jumps: true,
};
console.log(rabbit.jumps); // ? (1) = true
delete rabbit.jumps;
console.log(rabbit.jumps); // ? (2) = null
delete animal.jumps;
console.log(rabbit.jumps); // ? (3) = undefined
*/


// Question II: Searching algorithm
// 1) Use __proto__ to assign prototypes in a way that any property lookup will follow the path: pockets → bed → table → head. For instance, pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head).
// 2) Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed. = no difference
let head = {
  glasses: 1,
};
let table = {
  pen: 3,
};
let bed = {
  sheet: 1,
  pillow: 2,
  __proto__:head,
};
let pockets = {
  money: 2000,
  __proto__:table,
};
console.log(pockets.pen);
console.log(head.glasses);
console.log(bed.glasses);
console.log(table.money);   //Undefined


