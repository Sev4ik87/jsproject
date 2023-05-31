"use strict";

class Animals {
  constructor(age, name, weight, limbAmount) {
    this.age = age;
    this.name = name;
    this.weight = weight;
    this.limbAmount = limbAmount;
  }

  move() {
    console.log("Животное движется");
  }

  say() {
    console.log("Животное звук");
  }

  eat() {
    console.log("Животное питается");
  }

  static isAnimals(obj) {
    return obj instanceof Animals;
  }
}

// Подклассы Mammals, Birds и Fish
class Mammals extends Animals {
  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }

  static isMammals(obj) {
    return obj instanceof Mammals;
  }
}

class Birds extends Animals {
  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }

  static isBirds(obj) {
    return obj instanceof Birds;
  }

  move() {
    console.log("Птица летит");
  }
}

class Fish extends Animals {
  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }

  static isFish(obj) {
    return obj instanceof Fish;
  }

  move() {
    console.log("Рыба плывет");
  }
}

class Predators extends Mammals {
  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }

  static isPredators(obj) {
    return obj instanceof Predators;
  }

  say() {
    console.log("Хищник звук");
  }
}

class Whales extends Mammals {
  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }

  static isWhales(obj) {
    return obj instanceof Whales;
  }

  move() {
    console.log("Кит плывет");
  }
}

class Primates extends Mammals {
  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }

  static isPrimates(obj) {
    return obj instanceof Primates;
  }

  
  say() {
    console.log("Примат звук");
  }
}

class Dog extends Predators {
  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }

  static isDog(obj) {
    return obj instanceof Dog;
  }

  say() {
    console.log("Собака лает.");
  }
}

class Dolphin extends Whales {
  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }

  static isDolphin(obj) {
    return obj instanceof Dolphin;
  }

  say() {
    console.log("Дельфин издает звуки.");
  }
}

class Human extends Primates {
  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }

  static isHuman(obj) {
    return obj instanceof Human
  }
}

const bird1 = new Birds(1, "Воробей", 0.1, 2);
const bird2 = new Birds(2, "Голубь", 0.2, 2);

const fish1 = new Fish(1, "Золотая рыбка", 0.05, 0);
const fish2 = new Fish(3, "Акула", 100, 0);

const predator1 = new Predators(6, "Волк", 30, 4);
const predator2 = new Predators(8, "Леопард", 70, 4);

const whale1 = new Whales(10, "Синий кит", 200000, 0);
const whale2 = new Whales(15, "Гренландский кит", 100000, 0);

const primate1 = new Primates(5, "Шимпанзе", 50, 4);
const primate2 = new Primates(7, "Горилла", 200, 4);

const dog1 = new Dog(2, "Бульдог", 25, 4);
const dog2 = new Dog(4, "Лабрадор", 30, 4);

const dolphin1 = new Dolphin(8, "Белуха", 400, 0);
const dolphin2 = new Dolphin(12, "Делфин-носатка", 500, 0);

const human1 = new Human(30, "Джон", 70, 4);
const human2 = new Human(25, "Алиса", 65, 4);

const animal1 = new Animals(5, "Лев", 200, 4);
console.log(animal1.age); 
console.log(animal1.name); 
animal1.move(); 
animal1.say(); 
animal1.eat(); 

const animal2 = new Animals(3, "Тигр", 150, 4);
console.log(animal2.age); 
console.log(animal2.name); 
animal2.move(); 
animal2.say(); 
animal2.eat(); 

const mammal1 = new Mammals(2, "Собака", 20, 4);
console.log(mammal1.age);
console.log(mammal1.name); 
mammal1.move(); 
mammal1.say(); 
mammal1.eat(); 

const mammal2 = new Mammals(4, "Кошка", 10, 4);
console.log(mammal2.age); 
console.log(mammal2.name); 
mammal2.move(); 
mammal2.say();
mammal2.eat(); 

