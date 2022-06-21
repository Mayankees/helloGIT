const arr = [5, 6, 8, 9, 3, 2, 4];

let diag = function (arr) {
  let d = [];
  for (let i = 0; i < arr.length; i++) {
    d.push(Math.sqrt(2) * arr[i]);
  }
  //   return d;
};

// console.log(diag(arr));

let area = function (a) {
  return a * a;
};

let peri = function (a) {
  return 4 * a;
};

let diagonal = function (a) {
  return Math.sqrt(2) * a;
};

let calc = function (arr, logic) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    ans.push(logic(arr[i]));
  }
  return ans;
};

// console.log(calc(arr, area));
// console.log(calc(arr, peri));
// console.log(calc(arr, diagonal));


// Reduce

// I
// write a code to calculate largest element

const arrL =[2,500,8,6,78,101];
let largest = arrL.reduce((acc,num)=>{
  if (acc<num) {
    acc = num;
  }
  return acc;
})
// console.log(largest);

function largestElem(max, curr) {
  if (max<curr) {
    max = curr;
  }
  return max;
}

let larg = arrL.reduce(largestElem, -Infinity);
// console.log(larg);

// II
var users = [
  { firstName: "Mayank", lastName: "Singh", age: 55 },
  { firstName: "Jyoti", lastName: "Jauhari", age: 25 },
  { firstName: "Saket", lastName: "Bharti", age: 15 },
];

// get fullName of users
function getfullName(obj) {
  return obj.firstName+" "+obj.lastName;
}
var ans = users.map(getfullName);
console.log(ans);

console.log(users.map((obj) => obj.firstName+" "+obj.lastName));

//write a code to get firstName of all the users with age less than 30
var ans = users.filter((obj)=> obj.age<30);
console.log(ans);
var ans = ans.map(getfullName);
console.log(ans);

// chaining 
console.log(
  users.filter((obj)=>obj.age<30)
  .map(getfullName)
);

// using reduce
function getByAge(arr, obj) {
  if(obj.age<30){
    arr.push(obj.firstName+" "+obj.lastName);
  }
  return arr;
}
var ans = users.reduce(getByAge,[]);
console.log(ans);

// III
// write a code to return the number of people with paricular age
function peopleAge(rObj, cObj) {
  let age = cObj.age;
  if(rObj[age]){
    rObj[age] = rObj[age]+1;
  }
  else{
    rObj[age] = 1;
  }
  return rObj;
}
var obj = users.reduce(peopleAge, {});
console.log(obj);


Array.prototype.myMap = function (logic) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(logic(this[i]));
  }
  return res;
}

console.log(arrL.myMap(area));
console.log(arrL.myMap(peri));
console.log(arrL.myMap(diagonal));