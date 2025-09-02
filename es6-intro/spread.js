const numbers = [11, 22, 44, 55, 66, 10, 120];
console.log(numbers);
console.log(...numbers);

// const max = Math.max(21, 33, 44, 55, 66);
const max = Math.max(...numbers);
console.log(max);

// const first = [1, 2, 3, 4, 5];
// const second = first;
// second.push(6);
// console.log(first);

const first = [1, 2, 3, 4, 5];
const second = [...first];
const third = [...first, 33, 44, 55];
second.push(6);
// console.log(first);
// console.log(second);
// console.log(third);

const ages = [44, 55, 66];
const price = [99, 88, 77];
const all = [...ages, 5555, ...price];
console.log(all);

const person = { name: "Faisal", age: 25 };
const employ = { designation: "dev", ...person };
console.log(employ);
