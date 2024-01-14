import { wordsArray, randomNumber, leaderboard1, timerGame1, verbsArray } from './config.js';
import substantiveView from './views/substantiveView.js'
console.log(wordsArray);
const button1 = document.querySelector('.dice-button1')
   const button2 = document.querySelector('.dice-button2')
   const button3 = document.querySelector('.dice-button3')
   const button4 = document.querySelector('.dice-button4')
   const franceFlag = document.querySelector('.image-above')
   const startButton = document.querySelector('.button')
const masculineButton = document.querySelector('.masculine-button')
const feminineButton = document.querySelector('.feminine-button')
const substantiveContainer = document.querySelector('.displaySubstantive')
const scoreContainer = document.querySelector('.displayScore1')
const leaderboardForm = document.getElementById('leaderboardForm');
const scoreTitle = document.querySelector('.scoreTitle');
const checkBoxes = document.querySelector('.checkBoxes');
const verbView = document.querySelector(`.verbsView`);
const displayVerb = document.querySelector(`.displayVerb`)
const displayTense = document.querySelector(`.displayTense`)
const displayPerson = document.querySelector(`.displayPerson`)



export const generateGameModes = function(){
   
  
   
   button1.classList.toggle('display');
   button2.classList.toggle('display');
   button3.classList.toggle('display');
   button4.classList.toggle('display');
   franceFlag.classList.toggle('display1');
   startButton.classList.toggle('display1');
}
const container = document.querySelector('.displayGameInfo');
export const displayGame1 = function(){
   

   container.innerHTML = `Dive into the fascinating world of French noun genders with 'Guess the Gender of the Substantive' mini-game! Test your quick thinking as you race against the clock to identify whether each displayed noun is masculine or feminine. With just one minute on the clock, challenge yourself to make swift decisions, clicking between 'masculine' or 'feminine' buttons for each noun that appears. Enhance your French language skills and have a blast mastering noun genders in this fast-paced, thrilling game!`;
}
export const removeGame1 = function(){
  
   
   container.innerHTML = '';
}
export const displayGame2 = function(){
   
   console.log(container);
   container.innerHTML = `Dive into rapid-fire French verb conjugation with 'Type the Correct Verb Form'! Confronted with random verbs, tenses, and persons, your challenge is to swiftly type the accurate conjugated form within a dynamic three-minute window. Enhance your verb mastery, typing speed, and accuracy as you race against time. Ready to conquer French grammar? Get typing!`;
}
export const removeGame2 = function(){
  
   
   container.innerHTML = '';
}
export const displayGame3 = function(){
   
   console.log(container);
   container.innerHTML = `Boost your French vocabulary with our rapid 'Image-to-Word' challenge! Identify random images by choosing the correct word from three options. With just two minutes on the clock, immerse yourself in a flurry of visuals and expand your vocabulary. Ready to match images to words? Let's begin!`;
}
export const removeGame3 = function(){
  
   
   container.innerHTML = '';
}
export const displayGame4 = function(){
   
   console.log(container);
   container.innerHTML = 'This is some text inside the container.D';
}
export const removeGame4 = function(){
  
   
   container.innerHTML = '';
}

export const startGame1 = function(){
   button1.classList.toggle('display');
   button2.classList.toggle('display');
   button3.classList.toggle('display');
   button4.classList.toggle('display');
   masculineButton.classList.toggle('display');
   feminineButton.classList.toggle('display');
   scoreContainer.classList.toggle('display');
   container.innerHTML = '';
   setTimeout(displayLeaderboardForm, timerGame1);
   displayRandomSubstantive();
}
let randomOutsideScope;
export const  displayRandomSubstantive= function(){
const  random = randomNumber();
randomOutsideScope = random;
substantiveContainer.innerHTML = `${wordsArray[random].word}/${wordsArray[random].english}`
// console.log(`wordsArray[${randomNumber}].word`);
}
let score = 0;
export const procesateGuess = function(){


let g1;
let g2;

if(wordsArray[randomOutsideScope].gender === 'M')
g1 = 0;
else
g1 = 1;

if (substantiveView.clickedElement.classList.contains('masculine-button') ) 
  g2 = 0
 else 
   g2 = 1;


   if(g1 === g2)
   {
      score = score + 100;
      console.log(score);
      scoreContainer.innerHTML = ``
      scoreContainer.innerHTML = `SCORE:${score}`
   }
else{
score = score - 100;
console.log(score);
scoreContainer.innerHTML = ``
scoreContainer.innerHTML = `SCORE:${score}`
}



displayRandomSubstantive()

}




const displayLeaderboardForm = function() {
  masculineButton.classList.toggle('display');
   feminineButton.classList.toggle('display');
   substantiveContainer.innerHTML = ''
   scoreTitle.innerHTML = score;
   leaderboardForm.classList.toggle(`display1`);
   console.log('test');
}
export const procesateLeaderBoard1 = function(){

   let playerName = document.getElementById('playerName').value;
 
   let playerData = {
      playerName: playerName,
      score: score
  };

  // Push the playerData object into the leaderboard array
  leaderboard1.push(playerData);
   
  
console.log(leaderboard1);
  
   document.getElementById('leaderboardForm').reset();

score = 0;
scoreContainer.innerHTML = ``
      scoreContainer.innerHTML = `SCORE:${score}`

   button1.classList.toggle('display');
   button2.classList.toggle('display');
   button3.classList.toggle('display');
   button4.classList.toggle('display');
  scoreContainer.classList.toggle('display');
  leaderboardForm.classList.toggle(`display1`);
}

export const procesateSkipButton = function(){
   button1.classList.toggle('display');
   button2.classList.toggle('display');
   button3.classList.toggle('display');
   button4.classList.toggle('display');
  scoreContainer.classList.toggle('display');
  leaderboardForm.classList.toggle(`display1`);

  score = 0;
scoreContainer.innerHTML = ``
      scoreContainer.innerHTML = `SCORE:${score}`
}

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

   const commonTenses = tenseProperties.filter(tense => selectedTenses.includes(tense));

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
 




export const displayCheckBoxesGame2 = function(){
   button1.classList.toggle('display');
   button2.classList.toggle('display');
   button3.classList.toggle('display');
   button4.classList.toggle('display');
   container.innerHTML = '';
   checkBoxes.classList.toggle('display1');

}
let selectedTenses;
export const startAndProcesateGame2 = function(){
   const form = document.getElementById("tenseSelectionForm");
    selectedTenses = Array.from(form.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.name);
   console.log("Selected Tenses:", selectedTenses);




   const randomVerb = getRandomVerb();
 const randomTense = getRandomTense(randomVerb);
 const randomPerson = getRandomPerson(randomVerb[randomTense]);
 checkBoxes.classList.toggle('display1');
 //console.log(`Infinitive: ${randomVerb.infinitive}`);
//console.log(`Tense: ${randomTense}`);
//console.log(`Person: ${randomPerson}`);
//console.log(`Conjugation: ${randomVerb[randomTense][randomPerson]}`);
verbView.classList.toggle('display1');
displayTense.innerHTML =randomTense ;
displayPerson.innerHTML = randomPerson;

displayVerb.innerHTML = randomVerb.infinitive;
}
//const displayVerb = document.querySelector(`.displayVerb`) 
//const displayTense = document.querySelector(`.displayTense`)
//const displayPerson = document.querySelector(`.displayPerson`)