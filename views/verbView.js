class verbView{

    _button2 = document.querySelector('.dice-button2')
_startGame2Button = document.querySelector('.startGame2Button')

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
}

export default new verbView();