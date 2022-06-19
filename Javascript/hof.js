const arr = [5, 6, 8, 9, 3, 2, 4];

let diag = function (arr) {
  let d = [];
  for (let i = 0; i < arr.length; i++) {
    d.push(Math.sqrt(2) * arr[i]);
  }
  //   return d;
};

console.log(diag(arr));

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

console.log(calc(arr, area));
console.log(calc(arr, peri));
console.log(calc(arr, diagonal));


// Map

let aarea = arr.map((a) => {
  return a*a;
})