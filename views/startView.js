class startView {
  _startButton = document.querySelector(".button");

  _backButton = document.querySelector(".backButton");
  displayGameModes(handler) {
    this._startButton.addEventListener("click", function (e) {
      e.preventDefault();
      // console.log(this._button1);
      // this._button1.classList.toggle('display');
      // this._button2.classList.toggle('display');
      // this._button3.classList.toggle('display');
      // this._button4.classList.toggle('display');
      handler();
    });
  }

  backButton(handler) {
    this._backButton.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new startView();
