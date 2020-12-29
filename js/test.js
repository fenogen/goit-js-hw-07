'use strict'; 
// const f = function()

const m = ['Oleg', 'Alex', 'Lena', 'Airon'];

// console.log(m);

for (const M of m) { 
    console.log(M);
}


const OBJECT = {
    name: 'oleg',
    stars: 5,
    capacity: 100,
};

const { name, stars } = OBJECT;

console.log(OBJECT);
console.log(name);
console.log(stars);

// ---------------------------

console.log('Hello');
const numbers = [1, 2, 3];

// const doubledNumbers = numbers.map(num => num * 2);
console.log(numbers.map(num => num * 2)); // [2, 4, 6]

//----------------------------


const users = [
  { name: 'Mango', isActive: true },
  { name: 'Poly', isActive: false },
  { name: 'Ajax', isActive: true },
  { name: 'Chelsey', isActive: false },
];

// Для каждого элемента коллекции (user) проверим поле isActive.
// Если оно true, то текущий элемент (user) будет записан в результирующий массив.
const activeUsers = users.filter(user => user.isActive);
console.log(activeUsers);

// Для каждого элемента коллекции (user) проверим поле isActive.
// Если оно false, то текущий элемент (user) будет записан в результирующий массив.
const inactiveUsers = users.filter(user => !user.isActive);
console.log(inactiveUsers);



// --------------------------

const numbers2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numbers2.find(num => num > 5)); // 6

console.log(numbers2.find(num => num < 5)); // 0

console.log(numbers2.find(num => num === 5)); // 5



// --------------------------

const users2 = [
  { id: '000', name: 'Mango', isActive: true },
  { id: '001', name: 'Poly', isActive: false },
  { id: '002', name: 'Ajax', isActive: true },
  { id: '003', name: 'Chelsey', isActive: false },
];

// Для каждого элемента коллекции (user) проверим поле id.
// Если оно совпадает с искомым идентификатором, то find прекратит
// выполнение и вернет текущий элемент (user) как результат выполнения
const user = users2.find(user => user.id === '002');
console.log(user);

// --------------------------

const numbers3 = [1, 2, 3, 4, 5];

const summ = numbers3.reduce((acc, value) => acc + value, 0);

console.log(summ); // 15