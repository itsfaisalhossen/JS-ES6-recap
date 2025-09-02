const numbers = [11, 22, 33, 44, 55, 66];
for (const num of numbers) {
  console.log(num);
}

const employee = {
  name: "Mr. F",
  designation: "QA",
  salary: 20000,
  experiance: 1,
};

for (const key in employee) {
  const value = employee[key];
  console.log(key, value);
}

const keys = Object.keys(employee);
console.log(keys);
for (const key of keys) {
  console.log(key);
}
