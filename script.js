let computer = 0;
let human = 0;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const humanScore = document.querySelector("#human");
const computerScore = document.querySelector("#computer");
const resoult = document.querySelector("#qwer");
const info = document.querySelector("#sdf");

function random() {
  const arr = ["paper", "rock", "scissor"];
  const random1 = Math.floor(Math.random() * arr.length);
  return arr[random1];
}
random();

rock.onclick = function () {
  if (random() == "paper") {
    computer++;
    computerScore.innerHTML = `Computer Score: ${computer}`;
    info.innerHTML = "Computer wins";
  } else if (random() == "scissor") {
    human++;
    humanScore.innerHTML = `Player Score: ${human}`;
    info.innerHTML = "Player wins";
  } else {
    info.innerHTML = "It's a tie!";
  }
};

paper.onclick = function () {
  if (random() == "rock") {
    human++;
    humanScore.innerHTML = `Player Score: ${human}`;
    info.innerHTML = "Player wins";
  } else if (random() == "scissor") {
    computer++;
    computerScore.innerHTML = `Computer Score: ${computer}`;
    info.innerHTML = "Computer wins";
  } else {
    info.innerHTML = "It's a tie!";
  }
};

scissor.onclick = function () {
  if (random() == "paper") {
    human++;
    humanScore.innerHTML = `Player Score: ${human}`;
    info.innerHTML = "Player wins";
  } else if (random() == "rock") {
    computer++;
    computerScore.innerHTML = `Computer Score: ${computer}`;
    info.innerHTML = "Computer wins";
  } else {
    info.innerHTML = "It's a tie!";
  }
};

reset.onclick = function () {
  computer = 0;
  human = 0;
  computerScore.innerHTML = `Computer Score: ${computer}`;
  humanScore.innerHTML = `Player Score: ${human}`;
  info.innerHTML = "";
  }
