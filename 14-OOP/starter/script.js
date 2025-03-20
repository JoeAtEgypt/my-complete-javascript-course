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
/*
///////////////////////////////////////
// ES6 Classes

// Class expression
// const PersonCl = class {}

// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  } 

  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica); // PersonCl {_fullName: 'Jessica Davis', birthYear: 1996}
jessica.calcAge(); // 41
console.log(jessica.age); // 41

console.log(jessica.__proto__ === PersonCl.prototype); // ture

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet(); // Hey Jessica Davis

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter White', 1965);
PersonCl.hey();
/**  
Hey there 👋
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() …


///////////////////////////////////////
// Setters and Getters
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); // 300
console.log(account.movements); // [200, 530, 120, 300]

account.latest = 50;
console.log(account.movements); // [200, 530, 120, 300, 50]
**/
/*
///////////////////////////////////////
// Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
/*{}
birthYear: 2002
name: "Steven"
[[Prototype]]: Object
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge(); // 35

console.log(steven.__proto__ === PersonProto); // true

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge(); // 58
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h 
(but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀

class Car {
  constructor(speed, map) {
    this.speed = speed;
    this.map = map;
  }
  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
const ford = new Car(120, 'Ford');
ford.speedUS = 100;
ford.accelerate();
ford.brake();
ford.accelerate();
console.log(ford.speedUS);
*/
