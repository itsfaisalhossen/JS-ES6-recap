function multiply(z, x) {
  z = z + 10;
  x = x + 10;
  const mult = z * x;
  return mult;
}

const a = 10;
const b = 10;
const result = multiply(a, b);
// console.log(result);

// None primitive value
const manik = {
  name: "Manik",
  balance: 40000,
};
const roton = {
  name: "Roton",
  balance: 80000,
};

function totalMoney(person1, person2) {
  person1.balance = 0;
  person2.balance = person2.balance / 2;
  const total = person1.balance + person2.balance;
  return total;
}

const balance = totalMoney(manik, roton);
console.log("balance :", balance);

console.log("After function call :", manik, roton);
