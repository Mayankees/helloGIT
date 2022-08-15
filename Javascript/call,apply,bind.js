// Explicit this

let welcome = function (number, location) {
  console.log(`Welcome ${this.firstName} ${this.lastName}
    Thank you for signing up!
    Your email ID is ${this.firstName}@${this.lastName}.com
    Your registered number is ${number}
    Your location is ${location}`);
};
let user = {
  firstName: "Kapil",
  lastName: "Dev",
  welcome: function () {
    console.log(`Welcome ${this.firstName} ${this.lastName}`);
  },
};
user.welcome(); // Welcome Kapil Dev

let user2 = {
  firstName: "Ravi",
  lastName: "Shastri",
};

// Call method:
// Syntax:  function_Name.call(objToWhichThisWillPoint);
user.welcome.call(user2); // Welcome Ravi Shastri
console.log("Call Method");
welcome.call(user); // Welcome Kapil Dev
welcome.call(user2); // Welcome Ravi Shastri

// Apply method:
console.log("Apply Method");
welcome.apply(user, [155, "Mumbai"]);

// Bind Method:
console.log("Bind Method");
let bindedFn = welcome.bind(user2, 00123456, "Delhi"); //returns a copy of "user2" fn in "bindedFn"
// console.log(bindedFn);
bindedFn();
