// Task 1
let fruits = ['apple', 'banana', 'orange'];

fruits.push('pineapple');
fruits.pop('apple');
console.log(fruits)

// Task 2
let numbers = [3, 1, 5, 2, 4]

sortedNumbers = numbers.sort();
console.log(sortedNumbers);

// Task 3
let doubleNumbers = numbers.map(number => number * 2);
console.log(doubleNumbers);

let filterNumbers = numbers.filter(number => number % 2 === 0);
console.log(filterNumbers);

let sumNumbers = numbers.reduce((acc, currentValue) => {return acc + currentValue;}, 0);
console.log(sumNumbers);