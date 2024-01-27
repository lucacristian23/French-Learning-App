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
    // Use event delegation to handle clicks on the options container
    this._options.addEventListener("click", function (e) {
      e.preventDefault();

      // Check if the clicked element has the class "buttonOption"
      if (e.target.classList.contains("optionButtons1")) {
        // Get the inner HTML of the clicked element
        const innerHTML = e.target.innerHTML;
        // Pass the innerHTML to the handler
        handler(innerHTML);
      }
    });
  }
}
export default new wordsView();
