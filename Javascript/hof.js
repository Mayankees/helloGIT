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

// get the number of people with a particular age
// function nOfPeopleWithAge(obj) {
//   if()
// }


// get firstName of all user with age less than 30 years
function lessThan(obj) {

  let age = obj.age;
  if(age<30){
    return obj.firstName;
  }
}

var ans = users.map(lessThan);
console.log(ans);