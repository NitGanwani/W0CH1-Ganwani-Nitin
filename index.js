const deck = [
  { card: "2", value: 1, type: "hearts" },
  { card: "3", value: 2, type: "hearts" },
  { card: "4", value: 3, type: "hearts" },
  { card: "5", value: 4, type: "hearts" },
  { card: "6", value: 5, type: "hearts" },
  { card: "7", value: 6, type: "hearts" },
  { card: "8", value: 7, type: "hearts" },
  { card: "9", value: 8, type: "hearts" },
  { card: "10", value: 9, type: "hearts" },
  { card: "Jack", value: 10, type: "hearts" },
  { card: "Queen", value: 11, type: "hearts" },
  { card: "King", value: 12, type: "hearts" },
  { card: "Ace", value: 13, type: "hearts" },
  { card: "2", value: 1, type: "diamonds" },
  { card: "3", value: 2, type: "diamonds" },
  { card: "4", value: 3, type: "diamonds" },
  { card: "5", value: 4, type: "diamonds" },
  { card: "6", value: 5, type: "diamonds" },
  { card: "7", value: 6, type: "diamonds" },
  { card: "8", value: 7, type: "diamonds" },
  { card: "9", value: 8, type: "diamonds" },
  { card: "10", value: 9, type: "diamonds" },
  { card: "Jack", value: 10, type: "diamonds" },
  { card: "Queen", value: 11, type: "diamonds" },
  { card: "King", value: 12, type: "diamonds" },
  { card: "Ace", value: 13, type: "diamonds" },
  { card: "2", value: 1, type: "clubs" },
  { card: "3", value: 2, type: "clubs" },
  { card: "4", value: 3, type: "clubs" },
  { card: "5", value: 4, type: "clubs" },
  { card: "6", value: 5, type: "clubs" },
  { card: "7", value: 6, type: "clubs" },
  { card: "8", value: 7, type: "clubs" },
  { card: "9", value: 8, type: "clubs" },
  { card: "10", value: 9, type: "clubs" },
  { card: "Jack", value: 10, type: "clubs" },
  { card: "Queen", value: 11, type: "clubs" },
  { card: "King", value: 12, type: "clubs" },
  { card: "Ace", value: 13, type: "clubs" },
  { card: "2", value: 1, type: "spades" },
  { card: "3", value: 2, type: "spades" },
  { card: "4", value: 3, type: "spades" },
  { card: "5", value: 4, type: "spades" },
  { card: "6", value: 5, type: "spades" },
  { card: "7", value: 6, type: "spades" },
  { card: "8", value: 7, type: "spades" },
  { card: "9", value: 8, type: "spades" },
  { card: "10", value: 9, type: "spades" },
  { card: "Jack", value: 10, type: "spades" },
  { card: "Queen", value: 11, type: "spades" },
  { card: "King", value: 12, type: "spades" },
  { card: "Ace", value: 13, type: "spades" },
];

const randomCardButton = document.querySelector(".random-btn");
const higherButton = document.querySelector(".higher-btn");
const lowerButton = document.querySelector(".lower-btn");
const randomCard = document.querySelector(".random-card");
const randomCardDisplay = document.querySelector(".random-card-display");
const newRandomCard = document.querySelector(".new-random-card");
const guessResult = document.querySelector(".result-display");
const playAgainButton = document.querySelector(".restart-btn");

let randomCardDisplayed = "";
let randomCardtoPlay = "";
let newRandomCardDisplay = "";
let resultDisplay = "";
let points = 0;

const showDisplay = () => {
  randomCard.innerText = randomCardDisplayed;
  newRandomCard.innerText = newRandomCardDisplay;
  guessResult.innerText = resultDisplay;
};

const handleRandomCardButton = () => {
  let generateRandomCard = deck[Math.floor(Math.random() * deck.length)];
  randomCardtoPlay = generateRandomCard;
  randomCardDisplayed = `Your card is the ${randomCardtoPlay.card} of ${randomCardtoPlay.type}.`;
  return showDisplay();
};

const getNewRandomCard = () => {
  let generateNewCard = deck[Math.floor(Math.random() * deck.length)];
  newRandomCardDisplay = generateNewCard;
};

const handleHigherButton = () => {
  getNewRandomCard();
  if (newRandomCardDisplay.value > randomCardtoPlay.value) {
    newRandomCardDisplay = `Congrats!! Your guess was right. The card is the ${newRandomCardDisplay.card} of ${newRandomCardDisplay.type}.`;
  } else if (newRandomCardDisplay.value === randomCardtoPlay.value) {
    newRandomCardDisplay = `Wow, this is not usual. We have a tie! You neither win nor lose. The card is the ${newRandomCardDisplay.card} of ${newRandomCardDisplay.type}.`;
  } else {
    newRandomCardDisplay = `Oooooh. 😢😢 Your guess was wrong. The card is the ${newRandomCardDisplay.card} of ${newRandomCardDisplay.type}.`;
  }
  randomCardButton.disabled = true;
  higherButton.disabled = true;
  lowerButton.disabled = true;
  return showDisplay();
};

const handleLowerButton = () => {
  getNewRandomCard();
  if (newRandomCardDisplay.value < randomCardtoPlay.value) {
    newRandomCardDisplay = `Congrats!! Your guess was right. The card is the ${newRandomCardDisplay.card} of ${newRandomCardDisplay.type}.`;
  } else if (newRandomCardDisplay.value === randomCardtoPlay.value) {
    newRandomCardDisplay = `Wow, this is not usual. We have a tie! You neither win nor lose. The card is the ${newRandomCardDisplay.card} of ${newRandomCardDisplay.type}.`;
  } else {
    newRandomCardDisplay = `Oooooh. 😢😢 Your guess was wrong. The card is the ${newRandomCardDisplay.card} of ${newRandomCardDisplay.type}.`;
  }
  randomCardButton.disabled = true;
  higherButton.disabled = true;
  lowerButton.disabled = true;
  return showDisplay();
};

const startCardGame = () => {
  randomCardButton.addEventListener("click", () => {
    handleRandomCardButton();
  });

  higherButton.addEventListener("click", () => {
    handleHigherButton();
  });

  lowerButton.addEventListener("click", () => {
    handleLowerButton();
  });

  playAgainButton.addEventListener("click", () => {
    handlePlayAgainButton();
  });
};

const handlePlayAgainButton = () => {
  randomCardDisplayed = "";
  randomCardtoPlay = "";
  newRandomCardDisplay = "";
  showDisplay();
  randomCardButton.disabled = false;
  higherButton.disabled = false;
  lowerButton.disabled = false;
  startCardGame();
};

startCardGame();
