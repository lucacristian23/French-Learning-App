class leaderboardView {
  _leaderboardButton = document.querySelector(".button-leaderboard");
  _previousButton = document.querySelector(".previousButton");
  _nextButton = document.querySelector(".nextButton");
  displayLeaderboard(handler) {
    this._leaderboardButton.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }

  nextGame(handler) {
    this._nextButton.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }

  previousGame(handler) {
    this._previousButton.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new leaderboardView();
