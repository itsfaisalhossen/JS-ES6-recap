const student = {
  name: "Mr. x",
  1: 50,
  "home-address": "Kochukhet",
  marks: 55,
};

// dot notation
const studentName = student.name;
// console.log(studentName);

// bracket notation
const studentOne = student["1"];
console.log(student["home-address"]);

for (const key in student) {
  const values = student[key];
  // console.log(values);
}

const propName = "marks";
console.log(student[propName]);
