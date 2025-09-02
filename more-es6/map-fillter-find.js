const students = [
  { id: 1, name: "Abul", marks: 50 },
  { id: 2, name: "Naul", marks: 95 },
  { id: 3, name: "Daul", marks: 85 },
  { id: 4, name: "Jabul", marks: 70 },
];

const name = students.map((student) => student.marks * 0.75);
const goodStudents = students.filter((student) => student.marks > 80);
const goodStudent = students.find((student) => student.marks > 80);
console.log(name);
console.log(goodStudents);
console.log(goodStudent);
