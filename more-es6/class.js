/**
 * class ----> template
 * propertise
 * method ( a special type of function inside a class without the function keyword )
 *
 * object
 *
 */
// const player = {};

class Player {
  goal() {
    console.log("score a goal");
    this.name = name;
    this.age = age;
    this.location = "Bangladesh";
    console.log("calling the constructor method", name);
  }
  getTeam() {
    return "Barsa";
  }
  constructor(name) {
    console.log("calling the constructor method", name);
  }
}

const player1 = new Player("Tom Brady");
const player2 = new Player("O Shanto");
// player1.goal();
// player1.constructor();

console.log(player1);
