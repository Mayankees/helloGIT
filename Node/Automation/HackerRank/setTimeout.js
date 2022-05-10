// function setTime() {
//   const a = 55;

//   function cb() {
//     console.log("Hello how are you ?");
//   }

//   setTimeout(cb, 6000);

//   console.log(a);
// }

// // setTime();

// for (let i = 1; i <= 10; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 2000*i);
// }

// Fetch API

// const fetch = require("node-fetch");

console.log("before");
setTimeout(function () {
  console.log("Time Over");
}, 5000);

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(function (response) {
    response.json();
  })
  .then(function (json) {
    console.log(console.log(json));
  });

console.log("after");
