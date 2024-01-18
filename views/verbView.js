class verbView{

    _button2 = document.querySelector('.dice-button2')
_startGame2Button = document.querySelector('.startGame2Button')
_verbForm = document.querySelector('.inputVerbForm')
 _specialButtons = document.querySelectorAll('.buttonSpecial');
    displayGameButtons(handler){
       
        this._button2.addEventListener('click', function(e){
          e.preventDefault(); 
       handler();
       })
    }

    startGame2(handler){
        this._startGame2Button.addEventListener('click', function(e){
            e.preventDefault(); 
         handler();
         })
    }
    handleAnswer(handler) {
       
        
        this._verbForm.addEventListener('submit', function(e) {
          e.preventDefault();
          
          // Get the user's answer from the input field
          const userAnswerInput = document.getElementById('userAnswer');
          const userAnswer = userAnswerInput.value.trim(); // Trim to remove leading and trailing spaces
          
          // Call the handler with the user's answer
          handler(userAnswer);
        });
      }

    introduceSpecialLetter(handler) {
        const specialButtons = document.querySelectorAll('.buttonSpecial');
      
        specialButtons.forEach(button => {
          button.addEventListener('click', function() {
            const buttonText = button.textContent;
            handler(buttonText);
          });
        });
      }
}

export default new verbView();