class Penguin {
  constructor() {
    this.habitat = "Antartica";
  }
  printPlaceOfOrigin() {
    console.log(this.habitat);
  }
}
const myPenguin = new Penguin();
console.log(myPenguin);
console.log(myPenguin.printPlaceOfOrigin);
myPenguin.printPlaceOfOrigin();

// Inheritance (extends keyword)
class Animal {
  constructor() {
    this.breaths = true;
  }
  isBreathing() {
    console.log(this.breaths);
  }
}

class Birds extends Animal {
  constructor() {
    super();
    this.fly = true;
  }
  canFly() {
    console.log(this.fly);
  }
}

class Parrot extends Birds {
  constructor() {
    super();
    this.color = "Green";
  }
  color() {
    console.log(this.color);
  }
}

const myParrot = new Parrot();
console.log(myParrot);
myParrot.isBreathing(); // Inherits isBreathing from Animal
myParrot.canFly(); // Inherits canFly from Birds
console.log(myParrot.color);

// Must call super constructor in derived class before accessing 'this' or returning from derived constructor

// New syntax

class Cloths {
  material = "Cotton";
  printMaterial = () => console.log(this.material);
}

class Shirts extends Cloths {
  sleeves = true;
  isSleeves = () => console.log(this.sleeves);
}
const myShirts = new Shirts();
console.log(myShirts);
myShirts.isSleeves();
myShirts.printMaterial();
