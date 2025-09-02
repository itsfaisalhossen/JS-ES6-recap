function add(num1, num2) {
  return num1 + num2;
}

// function expression
const addition = function (num1, num2) {
  return num1 + num2;
};

// Arrow funtion
const add2 = (num1, num2) => num1 + num2;
const multiply = (num1, num2) => num1 * num2;
const sumAll = (a, b, c, d, e, f) => a + b + c + d + e + f;

// multiline arrow function
const doMath = (x, y) => {
  const makeDouble = x * 2;
};

const result = addition(12, 23);
const result2 = add2(44, 55);
const mult = add2(444, 455);
console.log(result);
console.log(result2);
console.log(mult);
