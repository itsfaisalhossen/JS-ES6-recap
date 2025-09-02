/**
 *
 *
 *
 * undefined ----> not defined
 */

let money;
console.log(money);

function total(a, b) {
  console.log("value of perameters", a, b);
  const sum = a + b;
  console.log("total is", sum);
  if (a && b) {
    const sum = a + b;
    return sum;
  }
}

total(2);
const result = total(5, 7);
console.log("value of function call", result);

console.log("type of null ----->", typeof null);
