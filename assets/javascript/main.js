// variables
let numDice = document.querySelector("#numDice");
let totalScore = document.querySelector("#totalScore");
const rollButton = document.querySelector("#rollButton");
const showRolls = document.querySelector("#showRolls");
let rollsList = document.querySelector("#rollsList");
let numSides = document.querySelector("#numSides");
let errorMessage = document.querySelector("#error");
let rollsShown = false;

let dieRolls = []; // will record die roll values here

// event listeners
rollButton.addEventListener("click", rollDie);
showRolls.addEventListener("click", showAllRolls);

// functions
function rollDie() {
  if (rollButton.innerHTML.toLowerCase() === "reset") {
    reset();
  } else if (numDice.value !== ""){
    // reset error message if necessary
    errorMessage.innerHTML = "";
    // number of rolls
    let count = Number(numDice.value);
    // number of sides
    let sides = Number(numSides.value);
    if (sides === 0) sides = 6;
    // will be our total score value
    let sum = 0;

    while (count > 0) {
      // generate random number based on number of sides
      let roll = Math.ceil(Math.random() * sides);
      // adding roll to the total score
      sum += roll;
      // add roll item to the dieRolls array
      dieRolls.push(roll);
      // decrease count value by 1 (decrement)
      count--;
    } 
    // show sum as total score on the page
    totalScore.innerHTML = sum;
    // change "roll" button into "reset" button
    rollButton.innerHTML = "Reset";
    rollButton.style.backgroundColor = "red";
  } else errorMessage.innerHTML = "Please enter a number of dice to roll!";
}

function reset() {
  dieRolls = [];
  totalScore.innerHTML = "";
  numDice.value = "";
  numSides.value = "";
  rollsList.innerHTML = "";
  sum = 0;
  rollsShown = false;
  rollButton.innerHTML = "Roll!";
  rollButton.style.backgroundColor = "blue";
}

function showAllRolls() {
  if (!rollsShown && numDice.value !== "") {
    let index = 0;
    while (index < dieRolls.length) {
      // insert each item of the array into the Ordered List
      rollsList.innerHTML += `<li><div class="die"><span class="dieValue">${dieRolls[index]}</span></div></li>`;
      // increment index
      index++;
    }
    rollsShown = true;
  }
}
