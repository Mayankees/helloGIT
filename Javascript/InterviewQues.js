// I - Create an obj with an array that gives the occurrence of each element in it:
/*
let arr = ["1", "2", "4", "1", "2", "3", "1", "2", "3", "4"];
// let ans = { '1': 5, '2': 3, '3': 2, '4': 2, '5': 5 };

// Method 01
let ans = {};
for (let i = 0; i < arr.length; i++) {
  let key = arr[i];
  ans[key] = null;
}

for (const keys in ans) {
  let c = 0;
  for (let i = 0; i < arr.length; i++) {
    if (keys == arr[i]) {
      c++;
    }
  }
  ans[keys] = c;
}
console.log(ans);

// Method 02
let ans2 = {};
for (let i = 0; i < arr.length; i++) {
  // using ternary operator
  ans2[arr[i]] = ans2[arr[i]] == undefined ? 1 : ans2[arr[i]] + 1;
}
console.log(ans2);
*/

// II - Deep clone an object(Flatten an object):
/*
let user  = {
  name: "Mayank",
  age : 25,
  interest:{
    music:"Hip-Hop",
    games:"action",
    movies:"sci-fi",
  },
  home:"Delhi",
  places: {
    outside:{
      UP:"4",
      HP:"2",
      JP:"4",
    },
  },
};
console.log(user);

// Method-1:
let assignMethod = Object.assign({}, user);
console.log("Object.assign");
console.log(assignMethod);

// Method-2:
let stringifyMethod = JSON.parse(JSON.stringify(user));
console.log("Parse/stringify");
console.log(stringifyMethod);

// Method-3:
let createdMethod = cloneObject(user);
function cloneObject(obj) {
  let clone = {};
  for (let i in obj) {
    if (typeof (obj[i]) == "object" && obj[i] != null) {
      clone[i] = cloneObject(obj[i]);
    }
    else{
      clone[i] = obj[i];
    }
  }
  return clone;
}
console.log("created method/recursive");
console.log(createdMethod);
*/

// let a = undefined
// console.log(typeof a);
// console.log(null);
// console.log(a);
// console.log(NaN);

// III - "this" in Object :
// 1. The value of "this" is evaluated during the run-time, depending the context
// 2.

/*

// 'use strict'
// function sayHi() {
//   console.log(this+"");
// }
// sayHi()

// function sayHi() {
//   console.log(this.name);
// }
// sayHi();

// 1=>
let user = {
  name: "John",
  age: 30,
};

function sayHi() {
  return this.age;
}
// console.log(user);
user.f = sayHi;
// console.log(user);
// console.log(typeof user.f);
let z = user.f();
// console.log(user.f+"");
console.log(z);

// 2=>
function type1() {
  console.log(this.name);
  console.log(this.names);
}
var name = "JoJo"; //JoJo
let names = "JoJo"; //Undefined
type1(); // JoJo

// // 3=>
function type2() {
  console.log(this.lName);
}
var lName = "Rabbit";
var mName = {
  lName: "Bizarre",
  type2,
};
mName.type2(); // Bizarre

//  4=>
var food = "Pizza";
var lunch = {
  food: "Pasta",
  eat() {
    console.log("I am eating " + this.food);
  },
};
var obj = lunch.eat;
obj(); // I am eating Pizza

// 5=>
var length = 1;
function square() {
  let cb = function () {
    console.log(this.length*this.length);
  }
  setTimeout(cb,2000);
}
var area = {
  length : 3,
  square
}
area.square();
*/

// Arrow function
/*
let length = 5;
let breadth = 7;
let areaS = (num) => console.log(num * num);
areaS(length);

let areaR = (l, b) => console.log(l * b);
areaR(length, breadth);

let pY = () => {
  let l = 2;
  let b = 5;
  areaR(l, b);
};
pY();
// Arrow function
let ask = (question, yes, no) => {
  confirm(question) ? yes() : no();
};
ask(
  "Do you agree?",
  function () {
    alert("You agreed.");
  },
  function () {
    alert("You cancelled the execution.");
  }
);
*/

// var obj;
// let x = {};
// console.log(x.y ? x.y.z : undefined);

// console.log(x.y && x.y.z);

// console.log(x ?. y ?. z);

/*
function checkAge(age) {
  // let flag = age > 18 ? true : "Did your parents allow you? ";
  let flag = age > 18 ||  "Did your parents allow you? ";
  return flag;
}
console.log(checkAge(2));
*/

/*
function min(a, b) {
  // return a>b ? b : a;
  return a>b ? b : a;
}
console.log(min(3,-4));
*/

/*
function pow(n, p) {
  if (p == 0) {
    return 1;
  }
  let pNM1 = pow(n, p-1);
  return n*pNM1;
}
console.log(pow(5,-5));
*/

// "use strict"
/*
let age = 2;

if (age<18) {
  welcome();
  let welcome =function () {
    console.log("less than 18");
  welcome();
  }
} else {
  welcome();
  function welcome() {
    console.log("more than 18");
  }
}
// welcome();

let age = 52;
let welcome;
if (age<18) {
  welcome =function () {
    console.log("less than 18");
  }
} else {
  welcome = function () {
    console.log("more than 18");
  }
}
welcome();

let age = 15;
let welcome = age<18 ? function () {
  console.log("Less than 18");
}:function () {
  console.log("More than 18");
}
welcome();
*/

// console.log(5**4);
// console.log(null === undefined);

/*
let user = { name: "John" };
alert(user);
alert(user.valueOf());
alert(user.toString());
console.log(user);
console.log(user.valueOf());
*/

// Swap variable without using temp variable
/*
let num1 = 10;
let num2 = 30;

[num2, num1] = [num1, num2];
console.log(num1);
console.log(num2);

num1 = num1+num2;
num2 = num1-num2;
num1 = num1-num2;
console.log(num1);
console.log(num2);
*/

// Sort array with setTimeout
let arr = [5, 44, 6, 8, 9, 1, 3, 77, 44, 55, 66, 25];
for (const num of arr) {
  setTimeout(() => console.log(num), num);
}
