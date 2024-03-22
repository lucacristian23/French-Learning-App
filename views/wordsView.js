class wordsView {
  _button3 = document.querySelector(".dice-button3");
  _options = document.querySelector(".buttonOption");
  displayGameButtons(handler) {
    this._button3.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }

  procesateGuess(handler) {
    this._options.addEventListener("click", function (e) {
      e.preventDefault();

      if (e.target.classList.contains("optionButtons")) {
        const innerHTML = e.target.innerHTML;
        handler(innerHTML);
      }
    });
  }
}
export default new wordsView();
