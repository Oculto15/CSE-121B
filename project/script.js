let user = ["Player", "Computer"];
let pScore = 0;
let cScore = 0;
let gameIsOver = false;

const selectionButtons = document.querySelectorAll("[data-selection]");
const finalColumn = document.querySelector("[computerdata]");
const computerScore = document.querySelector("[computerscore]");
const playerScore = document.querySelector("[myscore]");
const SELECTIONS = [
  {
    name: "rock",
    icon: "🪨",
    beats: "scissors",
  },
  {
    name: "paper",
    icon: "📄",
    beats: "rock",
  },
  {
    name: "scissors",
    icon: "✂",
    beats: "paper",
  },
];

selectionButtons.forEach((selectionButton) => {
  selectionButton.addEventListener("click", (e) => {
    const selectionName = selectionButton.dataset.selection;
    const selection = SELECTIONS.find(
      (selection) => selection.name === selectionName
    );
    makeSelection(selection);
  });
});

function makeSelection(selection) {
  const computerChoice = randomSelection();
  const playerWinner = isWinner(selection, computerChoice);
  const computerWinner = isWinner(computerChoice, selection);

  addSelectionResult(computerChoice, computerWinner);
  addSelectionResult(selection, playerWinner);

  if (playerWinner) incrementScore(playerScore);
  if (computerWinner) incrementScore(computerScore);
}

function incrementScore(sumScore) {
  sumScore.innerText = parseInt(sumScore.innerText) + 1;
}

function addSelectionResult(selection, winner) {
  const div = document.createElement("div");
  div.innerText = selection.icon;
  div.classList.add("result-selection");
  if (winner) div.classList.add("winner");
  finalColumn.after(div);
}

function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name;
}

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
  return SELECTIONS[randomIndex];
}

let isGameOver = (score) => {
  if (pScore === 3 || cScore === 3) {
    return true;
  }
  return false;
}

let play = document.querySelector("#startgame");
play.addEventListener("click", function () {
  let selection = document.querySelectorAll(".selection");
  selection.forEach(function (item) {
    item.style.display = "block";
  });
  let resultScore = document.querySelectorAll(".result-score");
  resultScore.forEach(function (item) {
    item.style.display = "inline";
  });
  let name = document.querySelectorAll(".name");
  name.forEach(function (item) {
    item.style.display = "inline";
  });
});
