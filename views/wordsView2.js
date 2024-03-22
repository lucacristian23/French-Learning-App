class wordsView {
  _button4 = document.querySelector(".dice-button4");
  _options = document.querySelector(".buttonOption1");
  displayGameButtons(handler) {
    this._button4.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }

  procesateGuess(handler) {
    this._options.addEventListener("click", function (e) {
      e.preventDefault();

      if (e.target.classList.contains("optionButtons1")) {
        const innerHTML = e.target.innerHTML;
        handler(innerHTML);
      }
    });
  }
}
export default new wordsView();
