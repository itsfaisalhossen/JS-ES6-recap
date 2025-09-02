// const numbers = [11, 22, 33, 44, 55, 6, 8, 9, 10];
const numbers = [10, 20, 30];

// let sum = 0;
// for (const num of numbers) {
//   sum = sum + num;
// }
// console.log(sum);

const total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(total);
