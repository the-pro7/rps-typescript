const gameOptions = document.querySelectorAll(
  "[data-option]"
) as NodeListOf<HTMLButtonElement>;
const playerChoice = document.querySelector("[data-you]") as HTMLSpanElement;
const computerChoice = document.querySelector(
  "[data-computer]"
) as HTMLSpanElement;
const winner = document.querySelector("[data-winner]") as HTMLHeadingElement;

const choices: string[] = ["rock", "paper", "scissors"];
let playerOption: string = "";
let computerOption: string = "";
let isOver: boolean = false;

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

function computer() {
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

function announceWinner() {
  if (playerOption === computerOption) {
    winner.textContent = "It's a draw 😲!";
    isOver = true;
  } else if (game[playerOption].beats === computerOption) {
    winner.textContent = "Player wins! 🎉";
    isOver = true;
  } else {
    winner.textContent = "Computer wins! 🤖";
    isOver = true;
  }
}
