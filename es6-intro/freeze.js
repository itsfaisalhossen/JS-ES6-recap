const employee = {
  name: "Mr. F",
  designation: "QA",
  salary: 20000,
  experiance: 1,
};
Object.freeze(employee);
delete employee.experiance;
console.log(employee);

employee.salary = employee.salary + 5000;
employee.location = "Dhaka";
console.log(employee);
