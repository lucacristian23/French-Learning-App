class gameModesView {
 _button1 = document.querySelector('.dice-button1')
 _button2 = document.querySelector('.dice-button2')
 _button3 = document.querySelector('.dice-button3')
_button4 = document.querySelector('.dice-button4')
    displayGame1Description(handler){
       
        this._button1.addEventListener('mouseenter', function(e){
          e.preventDefault(); 
       handler();
       })
    }

    removeGame1Description(handler){
       
      this._button1.addEventListener('mouseleave', function(e){
        e.preventDefault(); 
     handler();
     })
  }

  displayGame2Description(handler){
       
    this._button2.addEventListener('mouseenter', function(e){
      e.preventDefault(); 
   handler();
   })
}

removeGame2Description(handler){
   
  this._button2.addEventListener('mouseleave', function(e){
    e.preventDefault(); 
 handler();
 })
}
displayGame3Description(handler){
       
  this._button3.addEventListener('mouseenter', function(e){
    e.preventDefault(); 
 handler();
 })
}

removeGame3Description(handler){
 
this._button3.addEventListener('mouseleave', function(e){
  e.preventDefault(); 
handler();
})
}
displayGame4Description(handler){
       
  this._button4.addEventListener('mouseenter', function(e){
    e.preventDefault(); 
 handler();
 })
}

removeGame4Description(handler){
 
this._button4.addEventListener('mouseleave', function(e){
  e.preventDefault(); 
handler();
})
}
}


export default new gameModesView();