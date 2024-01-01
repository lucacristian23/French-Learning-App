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