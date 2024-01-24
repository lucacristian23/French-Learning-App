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
    // Use event delegation to handle clicks on the options container
    this._options.addEventListener("click", function (e) {
      e.preventDefault();

      // Check if the clicked element has the class "buttonOption"
      if (e.target.classList.contains("optionButtons")) {
        // Get the inner HTML of the clicked element
        const innerHTML = e.target.innerHTML;
        // Pass the innerHTML to the handler
        handler(innerHTML);
      }
    });
  }
}
export default new wordsView();
