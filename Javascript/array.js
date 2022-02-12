// Learning array

// Defining an array
let cars=["BMW", "TATA", "Mercedes", 2022, 2023, 2024];

// accessing array
console.log(cars);
console.log(""+cars);

// accessing an element of array
console.log(cars[5]);
console.log(cars[0]);

// replacing an array
console.log("Before replacing "+cars[4]);
cars[4]="Ducati";
console.log("After replacing "+cars[4]);

// length of an array
console.log("Length of the array "+cars.length);

// adding an element at the end of an array
console.log("Before adding =>"+cars);
cars[6]="Benneli";
console.log("After adding =>"+ cars);

// Methods of an Array

// 1. pop method - It removes last element 
console.log("Before pop => "+cars);
cars.pop();
console.log("After pop => "+cars);

// 2. push method - It push a new element to the last 
console.log("Before push => "+cars);
cars.push("Lexus");
console.log("After push => "+cars);

// 3. unshift method - Its add new elements at the start of an array
console.log("Before unshift => "+cars);
cars.unshift("Dodge");
console.log("After unshift => "+cars);

// 4. shift method - It removes element at the 0th index of array
console.log("Before shift => "+cars);
cars.shift();
console.log("After shift => "+cars);


// 2d Array

let array2d=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(array2d);
console.table(array2d);
console.log(array2d[2][0]);