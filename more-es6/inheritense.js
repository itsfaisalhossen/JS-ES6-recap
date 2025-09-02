class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }
  bark() {
    console.log(`${this.name} is breking`);
  }
}

class Cat {
  constructor(name, breed, age) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }
  bark() {
    console.log(`${this.name} is breking`);
  }
}

const dog1 = new Dog("coffee", "deshi");
dog1.eat();

const cat1 = new Cat("Sp", "white", 5);
cat1.eat();
console.log(cat1);
