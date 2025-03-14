'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// 'Steven Thomas Williams' -> 'stw'
const createUserNames = accs =>
  accs.forEach(
    acc =>
      (acc.username = acc.owner
        .toLowerCase()
        .split(' ')
        .map(name => name[0])
        .join(''))
  );
createUserNames(accounts);

// Calculating Balance
const calculateBalance = accs =>
  accs.forEach(
    acc => (acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0))
  );

calculateBalance(accounts);

const calcDisplaySummary = accs =>
  accs.forEach(acc => {
    const incomes = acc.movements
      .filter(mov => mov > 0)
      .reduce((mov, acc) => mov + acc, 0);
    labelSumIn.textContent = `${incomes}€`;

    const outcomes = acc.movements
      .filter(mov => mov < 0)
      .reduce((mov, acc) => mov + acc, 0);
    labelSumIn.textContent = `${Math.abs(outcomes)}€`;

    const interest = acc.movements
      .filter(mov => mov > 0)
      .map(deposit => (deposit * acc.interestRate) / 100)
      .filter((int, i, arr) => {
        return int >= 1;
      })
      .reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = `${interest}€`;
  });

calcDisplaySummary(accounts);

// console.log(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// Simple Array Methods
// let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// SPLICE
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// REVERSE
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// JOIN
// console.log(letters.join(' - '));

///////////////////////////////////////
// The new at Method
// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// // getting last array element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// console.log('jonas'.at(0));
// console.log('jonas'.at(-1));

///////////////////////////////////////
// Looping Arrays: forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
//   for (const [i, movement] of movements.entries()) {
//     if (movement > 0) {
//       console.log(`Movement ${i + 1}: You deposited ${movement}`);
//     } else {
//       console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//     }
//   }
// }

// console.log('---- FOREACH ----');
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

/////////////////////////////////////
// forEach With Maps and Sets
// Map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // Set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });
/*
///////////////////////////////////////
// The map Method
const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

const movementsUSD = movements.map(mov => Math.round(mov * eurToUsd));

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);

// The filter Method
const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
///////////////////////////////////////
// The reduce Method
console.log(movements);

// accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);

const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages 
and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. 
   If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old 
(which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs 
(you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
// const calcAverageHumanAge = dogsAges => {
//   // 1.
//   const humanAges = dogsAges.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   console.log(humanAges);

//   // 2.
//   const adultDogsAges = humanAges.filter(age => age >= 18);
//   console.log(adultDogsAges);

//   // 3.
//   const averageHumanAge =
//     adultDogsAges.reduce((age, curr) => curr + age, 0) / adultDogsAges.length;
//   console.log(averageHumanAge);

//   // Chaining Methods
//   const averageHumanAge2 =
//     dogsAges
//       .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//       .filter(age => age >= 18)
//       .reduce((age, curr) => curr + age, 0) / adultDogsAges.length;
//   console.log(averageHumanAge2 === averageHumanAge);
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

/*
///////////////////////////////////////////////////
// The find Method
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements); // [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(firstWithdrawal); // -400

console.log(accounts); 

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account); 
// balance: 11720
// interestRate: 1.5
// movements: (8) [5000, 3400, -150, -790, -3210, -1000, 8500, -30]
// owner: "Jessica Davis"
// pin: 2222
// username: "jd"
*/

///////////////////////////////////////
// Coding Challenge #4
const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];
/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"

2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)

3. Create an array "allActivities" of all the activities of all the dog breeds

4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). 
HINT: Use a technique with a special data structure that we studied a few sections ago.

5. Many dog breeds like to swim. What other activities do these dogs like? 
Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".

6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".

7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. 
Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? 
HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:
*/
// 1. Done
const huskyWeight = breeds.find(breed => breed.breed === 'Husky').averageWeight;
console.log(huskyWeight);

// 2. Done
const dogBothActivities = breeds.find(
  breed =>
    breed.activities.includes('running') && breed.activities.includes('fetch')
).breed;
console.log(dogBothActivities);

// 3. Done
const allActivities = breeds.flatMap(breed => breed.activities);
console.log(allActivities);

// 4. Done
const uniqueActivities = new Set(allActivities);
console.log(uniqueActivities);

// 5. Done
const swimmingAdjacent = [
  ...new Set(
    breeds
      .filter(breed => breed.activities.includes('swimming'))
      .flatMap(breed => breed.activities)
      .filter(activity => activity !== 'swimming')
  ),
];
console.log(swimmingAdjacent);

// 6. Done
console.log(breeds.every(breed => breed.averageWeight >= 10));

// 7. Done
console.log(breeds.some(breed => breed.activities.length >= 3));

// BONUS. Done
const averageHeaviestDogFetch = Math.max(
  ...breeds
    .filter(breed => breed.activities.includes('fetch'))
    .map(breed => breed.averageWeight)
);
console.log(averageHeaviestDogFetch);
