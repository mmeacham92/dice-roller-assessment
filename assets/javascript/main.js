// variables
let numDice = document.querySelector("#numDice");
let totalScore = document.querySelector("#totalScore");
const rollButton = document.querySelector("#rollButton");
const showRolls = document.querySelector("#showRolls");
let rollsList = document.querySelector("#rollsList");

let dieRolls = []; // will record die roll values here
let rollsShown = false;

// event listeners
rollButton.addEventListener("click", rollDie);
showRolls.addEventListener("click", showAllRolls);

// functions
function rollDie() {
  if (rollButton.innerHTML.toLowerCase() === "reset") reset();
  else {
    // number of rolls
    let count = Number(numDice.value);
    // will be our total score value
    let sum = 0;

    while (count > 0) {
      // generate random number 1-6
      let roll = Math.ceil(Math.random() * 6);
      // adding roll to the total score
      sum += roll;
      // add roll item to the dieRolls array
      dieRolls.push(roll);
      // decrease count value by 1 (decrement)
      count--;
    }
    // show sum as total score on the page
    totalScore.innerHTML = sum;
    rollButton.innerHTML = "Reset";
  }
}

function reset() {
  dieRolls = [];
  totalScore.innerHTML = "";
  numDice.value = "";
  rollsList.innerHTML = "";
  sum = 0;
  rollsShown = false;
  rollButton.innerHTML = "Roll!";
}

function showAllRolls() {
  if (!rollsShown && numDice.value !== "") {
    let index = 0;
    while (index < dieRolls.length) {
      // insert each item of the array into the Ordered List
      rollsList.innerHTML += `<li><img src="./assets/images/${dieRolls[index]}.png"</li>`;
      // increment index (so we don't have an infinite loop)
      index++;
    }
    rollsShown = true;
  }
}
