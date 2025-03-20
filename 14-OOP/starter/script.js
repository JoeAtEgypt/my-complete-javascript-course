'use strict';
/*
///////////////////////////////////////
// Constructor Functions and the new Operator
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never to this!
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas); // Person {firstName: 'Jonas', birthYear: 1991}

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(jonas instanceof Person); // true

Person.hey = function () {
  console.log('Hey there 👋');
  console.log(this);
};
Person.hey(); // Hey there 👋
/* ƒ (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never to this!
  // this.calcAge = function () {
  //   console.log(2037 - this.bir…*/
/*
///////////////////////////////////////
// Prototypes

console.log('Prototypes');
console.log(Person.prototype);
/*{}
calcAge: ƒ ()
species: "Homo Sapiens"
constructor: ƒ (firstName, birthYear)
[[Prototype]]: Object*/
/*
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge(); // 46
console.log(jonas); // Person {firstName: 'Jonas', birthYear: 1991} does not have the function, its Prototype has.
matilda.calcAge(); // 20

console.log(jonas.__proto__);
/*{calcAge: f}
calcAge: ƒ ()
species: "Homo Sapiens"
constructor: ƒ (firstName, birthYear)
[[Prototype]]: Object*/
/*
console.log(jonas.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(jonas)); // true
console.log(Person.prototype.isPrototypeOf(matilda)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

// .prototyeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species); // Homo Sapiens Homo Sapiens

console.log(jonas.hasOwnProperty('firstName')); // true
console.log(jonas.hasOwnProperty('species')); // false

///////////////////////////////////////
// Prototypal Inheritance on Built-In Objects
console.log('Prototypal Inheritance on Built-In Objects');
console.log(jonas.__proto__);
/*{species: 'Homo Sapiens', calcAge: ƒ}*/
/*
// Object.prototype (top of prototype chain)

console.log(jonas.__proto__.__proto__);
/* {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …} */
/*
console.log(jonas.__proto__.__proto__.__proto__); // null

console.dir(Person.prototype.constructor); // ƒ Person(firstName, birthYear)

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__); // [at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
console.log(arr.__proto__ === Array.prototype); // true
console.log(arr.__proto__.__proto__);
/* {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …} */
/*
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique()); // [3, 6, 5, 9]

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
*/
///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car.
 A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀


// 1.
const Car = function (speed) {
  this.speed = speed;
};

// 2.
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

// 3.
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

// 4.
const bmw = new Car(120);
const Mercedes = new Car(95);
// console.log(BMW.speed);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
*/
