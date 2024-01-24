import {
  wordsArray,
  randomNumber,
  leaderboard1,
  timerGame1,
  verbsArray,
  timerGame2,
  timerGame3,
  nameGame1,
  nameGame2,
  nameGame3,
  wordsArray2,
} from "./config.js";
import substantiveView from "./views/substantiveView.js";
console.log(wordsArray);
const button1 = document.querySelector(".dice-button1");
const button2 = document.querySelector(".dice-button2");
const button3 = document.querySelector(".dice-button3");
const button4 = document.querySelector(".dice-button4");
const franceFlag = document.querySelector(".image-above");
const startButton = document.querySelector(".button");
const masculineButton = document.querySelector(".masculine-button");
const feminineButton = document.querySelector(".feminine-button");
const substantiveContainer = document.querySelector(".displaySubstantive");
const scoreContainer = document.querySelector(".displayScore1");
const leaderboardForm = document.getElementById("leaderboardForm");
const scoreTitle = document.querySelector(".scoreTitle");
const checkBoxes = document.querySelector(".checkBoxes");
const verbView = document.querySelector(`.verbsView`);
const displayVerb = document.querySelector(`.displayVerb`);
const displayTense = document.querySelector(`.displayTense`);
const displayPerson = document.querySelector(`.displayPerson`);
const userAnswerLabel = document.querySelector(".inputPerson");
const verbForm = document.querySelector(".inputVerbForm");
const buttonOption1 = document.querySelector(".option1Button");
const buttonOption2 = document.querySelector(".option2Button");
const buttonOption3 = document.querySelector(".option3Button");
const displayWord = document.querySelector(".displayWord");
let currentGame;
let verbConjugationOutsideScope;

export const generateGameModes = function () {
  button1.classList.toggle("display");
  button2.classList.toggle("display");
  button3.classList.toggle("display");
  button4.classList.toggle("display");
  franceFlag.classList.toggle("display1");
  startButton.classList.toggle("display1");
};
const container = document.querySelector(".displayGameInfo");
export const displayGame1 = function () {
  container.innerHTML = `Dive into the fascinating world of French noun genders with 'Guess the Gender of the Substantive' mini-game! Test your quick thinking as you race against the clock to identify whether each displayed noun is masculine or feminine. With just one minute on the clock, challenge yourself to make swift decisions, clicking between 'masculine' or 'feminine' buttons for each noun that appears. Enhance your French language skills and have a blast mastering noun genders in this fast-paced, thrilling game!`;
};
export const removeGame1 = function () {
  container.innerHTML = "";
};
export const displayGame2 = function () {
  console.log(container);
  container.innerHTML = `Dive into rapid-fire French verb conjugation with 'Type the Correct Verb Form'! Confronted with random verbs, tenses, and persons, your challenge is to swiftly type the accurate conjugated form within a dynamic three-minute window. Enhance your verb mastery, typing speed, and accuracy as you race against time. Ready to conquer French grammar? Get typing!`;
};
export const removeGame2 = function () {
  container.innerHTML = "";
};
export const displayGame3 = function () {
  console.log(container);
  container.innerHTML = `Boost your French vocabulary with our rapid 'Image-to-Word' challenge! Identify random images by choosing the correct word from three options. With just two minutes on the clock, immerse yourself in a flurry of visuals and expand your vocabulary. Ready to match images to words? Let's begin!`;
};
export const removeGame3 = function () {
  container.innerHTML = "";
};
export const displayGame4 = function () {
  console.log(container);
  container.innerHTML = "This is some text inside the container.D";
};
export const removeGame4 = function () {
  container.innerHTML = "";
};

export const startGame1 = function () {
  button1.classList.toggle("display");
  button2.classList.toggle("display");
  button3.classList.toggle("display");
  button4.classList.toggle("display");
  masculineButton.classList.toggle("display");
  feminineButton.classList.toggle("display");
  scoreContainer.classList.toggle("display");
  container.innerHTML = "";
  currentGame = nameGame1;
  setTimeout(displayLeaderboardForm, timerGame1);
  displayRandomSubstantive();
};
let randomOutsideScope;
export const displayRandomSubstantive = function () {
  const random = randomNumber();
  randomOutsideScope = random;
  substantiveContainer.innerHTML = `${wordsArray[random].word}/${wordsArray[random].english}`;
  // console.log(`wordsArray[${randomNumber}].word`);
};
let score = 0;
export const procesateGuess = function () {
  let g1;
  let g2;

  if (wordsArray[randomOutsideScope].gender === "M") g1 = 0;
  else g1 = 1;

  if (substantiveView.clickedElement.classList.contains("masculine-button"))
    g2 = 0;
  else g2 = 1;

  if (g1 === g2) {
    score = score + 100;
    console.log(score);
    scoreContainer.innerHTML = ``;
    scoreContainer.innerHTML = `SCORE:${score}`;
  } else {
    score = score - 100;
    console.log(score);
    scoreContainer.innerHTML = ``;
    scoreContainer.innerHTML = `SCORE:${score}`;
  }

  displayRandomSubstantive();
};

const displayLeaderboardForm = function () {
  masculineButton.classList.toggle("display");
  feminineButton.classList.toggle("display");
  substantiveContainer.innerHTML = "";
  scoreTitle.innerHTML = score;
  leaderboardForm.classList.toggle(`display1`);
};
const displayLeaderboardForm2 = function () {
  leaderboardForm.classList.toggle(`display1`);
  verbView.classList.toggle("display1");
  scoreTitle.innerHTML = score;
};
const displayLeaderboardForm3 = function () {
  buttonOption1.classList.toggle("display1");
  buttonOption2.classList.toggle("display1");
  buttonOption3.classList.toggle("display1");
  leaderboardForm.classList.toggle(`display1`);
  scoreTitle.innerHTML = score;
  displayWord.innerHTML = "";
};
export const procesateLeaderBoard1 = function () {
  let playerName = document.querySelector(".playerName").value;

  let playerData = {
    playerName: playerName,
    score: score,
    game: currentGame,
  };

  // Push the playerData object into the leaderboard array
  leaderboard1.push(playerData);

  console.log(leaderboard1);

  document.getElementById("leaderboardForm").reset();

  button1.classList.toggle("display");
  button2.classList.toggle("display");
  button3.classList.toggle("display");
  button4.classList.toggle("display");
  scoreContainer.classList.toggle("display");
  leaderboardForm.classList.toggle(`display1`);
};

export const procesateSkipButton = function () {
  button1.classList.toggle("display");
  button2.classList.toggle("display");
  button3.classList.toggle("display");
  button4.classList.toggle("display");
  scoreContainer.classList.toggle("display");
  leaderboardForm.classList.toggle(`display1`);

  score = 0;
  scoreContainer.innerHTML = ``;
  scoreContainer.innerHTML = `SCORE:${score}`;
};

function getRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

// Function to get a random verb object from the array
function getRandomVerb() {
  const randomIndex = getRandomNumber(verbsArray.length - 1);
  return verbsArray[randomIndex];
}

// Function to get a random tense property from a verb object
function getRandomTense(verbObject) {
  const tenseProperties = Object.keys(verbObject);

  const commonTenses = tenseProperties.filter((tense) =>
    selectedTenses.includes(tense)
  );

  const randomTenseIndex = getRandomNumber(commonTenses.length - 1);
  return commonTenses[randomTenseIndex];
}

// Function to get a random person property from a tense object
function getRandomPerson(tenseObject) {
  const personProperties = Object.keys(tenseObject);
  const randomPersonIndex = getRandomNumber(personProperties.length - 1);
  return personProperties[randomPersonIndex];
}

// Example usage

export const displayCheckBoxesGame2 = function () {
  button1.classList.toggle("display");
  button2.classList.toggle("display");
  button3.classList.toggle("display");
  button4.classList.toggle("display");
  container.innerHTML = "";
  checkBoxes.classList.toggle("display1");
};
let selectedTenses;
let randomVerb;
let randomTense;
let randomPerson;
export const startAndProcesateGame2 = function () {
  setTimeout(displayLeaderboardForm2, timerGame2);
  const form = document.getElementById("tenseSelectionForm");
  currentGame = nameGame2;
  selectedTenses = Array.from(
    form.querySelectorAll('input[type="checkbox"]:checked')
  ).map((checkbox) => checkbox.name);

  scoreContainer.classList.toggle("display");

  scoreContainer.innerHTML = `SCORE:${score}`;
  previousAnswer.innerHTML = "";
  previousCorrectAnswer.innerHTML = "";

  randomVerb = getRandomVerb();
  randomTense = getRandomTense(randomVerb);
  randomPerson = getRandomPerson(randomVerb[randomTense]);
  checkBoxes.classList.toggle("display1");
  //console.log(`Infinitive: ${randomVerb.infinitive}`);
  //console.log(`Tense: ${randomTense}`);
  //console.log(`Person: ${randomPerson}`);
  // console.log(`${randomVerb[randomTense][randomPerson]}`);
  verbConjugationOutsideScope = `${randomVerb[randomTense][randomPerson]}`;
  verbView.classList.toggle("display1");
  displayTense.innerHTML = randomTense;
  // displayPerson.innerHTML = randomPerson;
  displayVerb.innerHTML = randomVerb.infinitive;

  // Corrected selector
  userAnswerLabel.innerText = `${randomPerson}`;
};
const previousAnswer = document.querySelector(".displayPreviousAnswer");
const previousCorrectAnswer = document.querySelector(
  ".displayPreviousCorrectAnswer"
);
export const procesateAnswer = function (answer) {
  let verbConjugation;

  verbConjugation = verbConjugationOutsideScope;
  verbForm.reset();
  if (answer === verbConjugation) score = score + 100;
  else score = score - 100;
  console.log(answer);
  console.log(verbConjugationOutsideScope);

  previousAnswer.innerHTML = `${answer}`;
  previousCorrectAnswer.innerHTML = `${verbConjugation}`;
  scoreContainer.innerHTML = `SCORE:${score}`;

  randomVerb = getRandomVerb();
  randomTense = getRandomTense(randomVerb);
  randomPerson = getRandomPerson(randomVerb[randomTense]);
  verbConjugationOutsideScope = `${randomVerb[randomTense][randomPerson]}`;
  displayTense.innerHTML = randomTense;
  displayVerb.innerHTML = randomVerb.infinitive;
  userAnswerLabel.innerText = `${randomPerson}`;
};
//const displayVerb = document.querySelector(`.displayVerb`)
//const displayTense = document.querySelector(`.displayTense`)
//const displayPerson = document.querySelector(`.displayPerson`)
// export const insertLetter=function(letter) {
//  const inputField = document.getElementById('userAnswer');
// const cursorPos = inputField.selectionStart;
// const textBefore = inputField.value.substring(0, cursorPos);
// const textAfter = inputField.value.substring(cursorPos);
//  inputField.value = textBefore + letter + textAfter;
//  inputField.focus();
// inputField.setSelectionRange(cursorPos + 1, cursorPos + 1);
// }

export const specialButtonsProcesate = function (letter) {
  console.log(`Clicked special button with letter: ${letter}`);

  const inputField = document.getElementById("userAnswer");
  const cursorPos = inputField.selectionStart;
  const textBefore = inputField.value.substring(0, cursorPos);
  const textAfter = inputField.value.substring(cursorPos);
  inputField.value = textBefore + letter + textAfter;
  inputField.focus();
  inputField.setSelectionRange(cursorPos + 1, cursorPos + 1);
};
let englishOutsideScope;
export const startGame3 = function () {
  currentGame = nameGame3;
  setTimeout(displayLeaderboardForm3, timerGame3);

  buttonOption1.classList.toggle("display1");
  buttonOption2.classList.toggle("display1");
  buttonOption3.classList.toggle("display1");
  button1.classList.toggle("display");
  button2.classList.toggle("display");
  button3.classList.toggle("display");
  button4.classList.toggle("display");
  displayWord.classList.toggle("display1");
  score = 0;
  scoreContainer.classList.toggle("display");

  scoreContainer.innerHTML = `SCORE:${score}`;

  game3();
};

// Function to get unique random indices
function getRandomUniqueIndices(max, excludeIndex, count) {
  const indices = [];

  while (indices.length < count) {
    const randomIndex = getRandomNumber(max - 1);

    // Ensure the index is not the excluded index or already in the array
    if (randomIndex !== excludeIndex && !indices.includes(randomIndex)) {
      indices.push(randomIndex);
    }
  }

  return indices;
}

// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export const procesateGuess3 = function (html) {
  if (html === englishOutsideScope) {
    score = score + 100;
    scoreContainer.innerHTML = `SCORE:${score}`;
  } else {
    score = score - 100;
    scoreContainer.innerHTML = `SCORE:${score}`;
  }

  game3();
};

const game3 = function () {
  const randomWordIndex = getRandomNumber(wordsArray2.length);
  const randomWord = wordsArray2[randomWordIndex];

  // Display the French word in displayWord element
  displayWord.innerHTML = randomWord.french;
  englishOutsideScope = randomWord.english;
  // Get two unique random indices for the other two buttons
  const indices = getRandomUniqueIndices(
    wordsArray2.length,
    randomWordIndex,
    2
  );
  const randomIndex1 = indices[0];
  const randomIndex2 = indices[1];

  // Create an array with the English words
  const englishWords = [
    wordsArray2[randomIndex1].english,
    randomWord.english,
    wordsArray2[randomIndex2].english,
  ];

  // Shuffle the array to randomize the positions
  shuffleArray(englishWords);

  // Set English words for the options buttons
  buttonOption1.innerHTML = englishWords[0];
  buttonOption2.innerHTML = englishWords[1]; // Displaying the English word for the main display word
  buttonOption3.innerHTML = englishWords[2];
};
