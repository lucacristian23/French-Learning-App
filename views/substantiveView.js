class substantiveView {
  _clickedElement = null;

  _button1 = document.querySelector(".dice-button1");
  _genderButtons = document.querySelectorAll(
    ".masculine-button, .feminine-button"
  );
  _leaderBoard = document.getElementById("leaderboardForm");
  _skipButton = document.querySelector(".skipButton");
  displayGameButtons(handler) {
    this._button1.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }

  checkGuess(handler) {
    const self = this;
    this._genderButtons.forEach((button) => {
      // Add a click event listener to each button
      button.addEventListener("click", function (e) {
        self.clickedElement = e.target;
        e.preventDefault();
        handler();
      });
    });
  }

  leaderBoard(handler) {
    this._leaderBoard.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }

  skipButton(handler) {
    this._skipButton.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new substantiveView();
