// Spread operator
// It is used to split up arr element or object properties

const nums = [1, 2, 3, 4];
const newNums = [...nums, 5, 6, 7];
const newNums1 = [nums, 5, 6, 7];
console.log(newNums);
console.log(newNums1);

const obj = {
  name: "Aman",
  age: 24,
};
const nObj = { ...obj, age: 23 };
console.log(obj);
console.log(nObj);

// Rest operator
// Used to merge a list of function argument into an array

function fun(...args) {
  console.log(args);
  console.log(typeof args);
  console.log(...args);
  args.forEach((args) => console.log(args));
}
fun("Hello", "is this ", true, "or ", null);

// Destructuring

// In Array
[a, b, c] = [1, 2, 3];
console.log(a, b, c); //1 2 3
[e, , f] = [4, 5, 6];
console.log(e, f); //4 6

// In Objects
let anObj = {
  name: "Shivani",
  age: 25,
};
let { name } = anObj;
let { name: herName } = anObj;
console.log(name); //Shivani
console.log(herName); //Shivani
