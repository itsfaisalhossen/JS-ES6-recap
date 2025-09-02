function counter() {
  let count = 0;
  const nums = [];
  function innerFun() {
    console.log("inside the inner function, some one call me");
  }
  return innerFun;
}

const outPut = counter();
console.log(outPut());

function counter() {
  let count = 10;
  return function (user) {
    count = count + 1;
    console.log("inside the inner func", user, count);
  };
}

const rahimCount = counter();
rahimCount("rahim");
rahimCount("rahim");
rahimCount("rahim");

console.log("--------------");

const karimCounter = counter();
karimCounter("karim");
karimCounter("karim");
karimCounter("karim");

console.log("--------------");

const tomCounter = counter();
tomCounter("tom");
tomCounter("tom");
tomCounter("tom");
karimCounter("karim");
