class startView {
  _startButton = document.querySelector(".button");
  _earlySubmit = document.querySelector(".earlySubmit");
  _backButton = document.querySelector(".backButton");
  displayGameModes(handler) {
    this._startButton.addEventListener("click", function (e) {
      e.preventDefault();

      handler();
    });
  }

  backButton(handler) {
    this._backButton.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }

  earlySubmitButton(handler) {
    this._earlySubmit.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new startView();
