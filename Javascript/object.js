// Learning Objects

// JavaScripts objects are always in key value pair

let obj = {}; //empty object
console.log(obj);
let food = [1, 2, 3, 4];
let person = {
  // key : value
  name: "Mayank",
  age: food[1],
  phone: 9999131313,
  gender: "Male",
  height: "172cm",
};

let mob = person.mob;
mob = "Vivo";
console.log(person);
console.log(mob);

person.age = 5;
console.log(person.age);

console.log(person.name);

console.log(`Hi ${person.name}. 
How are you?`);
console.log(`Your age is ${person.age}`);
console.log(`Your contact is ${person["phone"]}`);

let str = "Waba laba dub dub";
console.log(str.length); //dot notation
console.log(str["length"]); //square bracket notation

// nesting of objects

let captainAmerica = {
  firstName: "Steve",
  lastName: "Jobs",
  friends: ["Steve wozniak", "Bill gates", "Einstein"],
  address: {
    state: "California",
    city: "Palo Alto",
    country: "USA",
  },
  steveQuotes: function quotes() {
    console.log(`Alright everyone ${this.firstName} is here`);
  },
};

console.log(captainAmerica);
console.log(captainAmerica.friends);
console.log(captainAmerica.friends[1]);
captainAmerica.steveQuotes;
captainAmerica.steveQuotes(); //accessing method

// for loop
// `in` keyword in JS is used to get keys from objects

for (let key in captainAmerica) {
  //key
  console.log(
    `${key} : ${captainAmerica[key]} : ${typeof captainAmerica[key]}`
  );
  //key variable contains values of key

  // to access the binded value in key variable
  // console.log(captainAmerica[key]); //bracket notation
  // console.log(typeof captainAmerica[key]);
}

export const key = "SHA-12524500";
export const exportedObj = {
  name: "Mayank",
  age: 25,
};
