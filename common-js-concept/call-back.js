// call back

function pakhihai(callMeBack, patro, patri) {
  console.log("Value of patro", patro);
  // console.log("Call me back parameter", callMeBack);

  if (patri) {
    // console.log(callMeBack);
    callMeBack(patro);
  } else {
    console.log("tor kopal a biya nai");
  }
}

function classSomeOne(person) {
  console.log("calling", person);
}

// classSomeOne("jodu");
pakhihai(classSomeOne, "jodu", "modhu");
