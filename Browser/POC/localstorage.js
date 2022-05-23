// setItem(key, value)
localStorage.setItem("name", "Mayank");
localStorage.setItem("lastName", "Singh");
localStorage.age = 25;

// getItem(key);
let data = localStorage.getItem("name");
console.log(data);
console.log(localStorage.age);

// length;
let length = localStorage.length;
console.log(length);
console.log(localStorage.lastName);
console.log(localStorage.length);

// key(index)
let key = localStorage.key(0);
console.log(key);

// removeItem(key);
localStorage.removeItem("name");
delete localStorage.age;

// clear()
localStorage.clear();
