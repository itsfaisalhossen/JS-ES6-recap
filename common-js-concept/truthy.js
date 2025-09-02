let data;
data = 0;
data = "";
data = " ";
data = "0";
data = false;
data = true;
data = null;
data = {};
data = [];
data = false;
data = true;
data = [];
console.log("value of data", typeof data);

// if (data) {
//   console.log("value of data is truthy");
// } else {
//   console.log(data, "is falsy");
// }

// if is need to capture the false value to go inside if lock
// Use logical not

// capture all positive value
// double not !!
if (!!data === true) {
  // console.log("inside if with a falsey value");
  console.log("Only true inside the double not");
}
