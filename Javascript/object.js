// Learning Objects

// JavaScripts objects are always in key value pair

let obj ={};    //empty object
console.log(obj);

let person={
    // key : value
    name: "Mayank",
    age: 25,
    phone: 9999131313,
    gender: "Male",
    height: "172cm"
};

console.log(`Hi ${person.name}. 
How are you?`);
console.log(`Your age is ${person.age}`);
console.log(`Your contact is ${person["phone"]}`);


let str="Waba laba dub dub";
console.log(str.length); //dot notation
console.log(str["length"]); //square bracket notation

// nesting of objects

let captainAmerica = {
    firstName: "Steve",
    lastName: "Jobs",
    friends: ["Steve wozniak", "Bill gates", "Einstein"],
    address: {
        state:"California",
        city: "Palo Alto",
        country: "USA"
    },
    steveQuotes: function quotes() {
        console.log(`Alright everyone ${this.firstName} is here`);
    }
};

console.log(captainAmerica);
console.log(captainAmerica.friends);
console.log(captainAmerica.friends[1]);
captainAmerica.steveQuotes;
captainAmerica.steveQuotes(); //accessing method

// for loop 
// `in` keyword in JS is used to get keys from objects

for (let key in captainAmerica){
    //key
    console.log(key);
    //key variable contains values of key 

    // to access the binded value in key variable
    console.log(captainAmerica[key]); //bracket notation 
}
