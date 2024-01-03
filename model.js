export const generateGameModes = function(){
   
   const button1 = document.querySelector('.dice-button1')
   const button2 = document.querySelector('.dice-button2')
   const button3 = document.querySelector('.dice-button3')
   const button4 = document.querySelector('.dice-button4')
   const franceFlag = document.querySelector('.image-above')
   const startButton = document.querySelector('.button')
   button1.classList.toggle('display');
   button2.classList.toggle('display');
   button3.classList.toggle('display');
   button4.classList.toggle('display');
   franceFlag.classList.toggle('display1');
   startButton.classList.toggle('display1');
}
const container = document.querySelector('.displayGameInfo');
export const displayGame1 = function(){
   
   console.log(container);
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