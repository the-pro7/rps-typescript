const gameOptions = document.querySelectorAll(
  "[data-option]"
) as NodeListOf<HTMLButtonElement>;
const playerChoice = document.querySelector("[data-you]") as HTMLSpanElement;
const computerChoice = document.querySelector(
  "[data-computer]"
) as HTMLSpanElement;
const winner = document.querySelector("[data-winner]") as HTMLHeadingElement;
const playerScoreEl = document.querySelector(
  "[data-player-score]"
) as HTMLSpanElement;
const computerScoreEl = document.querySelector(
  "[data-computer-score]"
) as HTMLSpanElement;

// Config
const choices: string[] = ["rock", "paper", "scissors"];
let playerOption: string = "";
let computerOption: string = "";

// Score holders
let playerScore: number = 0;
let computerScore: number = 0;
const winningScore: number = 20;

const game: Record<string, Record<any, string>> = {
  rock: {
    beats: "scissors",
    defeatedBy: "paper",
  },
  scissors: {
    beats: "paper",
    defeatedBy: "rock",
  },
  paper: {
    beats: "rock",
    defeatedBy: "scissors",
  },
};

function random(): number {
  return Math.floor(Math.random() * choices.length);
}

function computer(): void {
  const choice = choices[random()];
  computerChoice.textContent = choice;
  computerOption = choice;
}

gameOptions.forEach((option) => {
  option.addEventListener("click", (event: Event) => {
    const target = event.target as HTMLButtonElement;
    playerOption = target.value;
    playerChoice.textContent = playerOption;

    computer(); // Call computer function when player makes a choice
    announceWinner(); // Check for the winner after both choices are made
  });
});

function announceOverallWinner(): void {
  if (playerScore === winningScore) {
    alert("You are the overall winner! 🎊");
    resetParams();
  } else if (computerScore === winningScore) {
    alert("Computer is the overall winner! 🎊");
    resetParams();
  }
}

function resetParams(): void {
  playerChoice.textContent = "null";
  computerChoice.textContent = "null";
  playerScoreEl.textContent = "0";
  computerScoreEl.textContent = "0";
  computerOption = "";
  playerOption = "";
  playerScore = 0;
  computerScore = 0;
  winner.textContent = "";
}

function announceWinner() {
  if (playerOption === computerOption) {
    winner.textContent = "It's a draw 😲!";
    playerScore = playerScore;
    computerScore = computerScore;
  } else if (game[playerOption].beats === computerOption) {
    playerScore++;
    playerScoreEl.textContent = String(playerScore);
    winner.textContent = "You win! 🎉";
  } else {
    computerScore++;
    computerScoreEl.textContent = String(computerScore);
    winner.textContent = "Computer wins! 🤖";
  }
  announceOverallWinner();
}
