const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const doubled = [];
// for (const num of numbers) {
//   const result = num * 2;
//   doubled.push(result);
// }

// const doubleIt = (x) => x * 2;
// const doubled = numbers.map(doubleIt);

const doubled = numbers.map((x) => x * 2);
const fiveTimes = numbers.map((num) => num * 5);
const squared = numbers.map((num) => num * num);
console.log(doubled);
console.log(fiveTimes);
console.log(squared);

const friends = ["AXZX", "BEWEW", "CNJM", "DIOJO"];
const nameLength = friends.map((name) => name.length);
console.log(nameLength);
