import * as model from './model.js'
import startView from './views/startView.js';
import gameModesView from './views/gameModesView.js'
import substantiveView from './views/substantiveView.js';
import verbView from './views/verbView.js';
const init = function(){
    startView.displayGameModes(model.generateGameModes);
    gameModesView.displayGame1Description(model.displayGame1)
    gameModesView.removeGame1Description(model.removeGame1)
    gameModesView.displayGame2Description(model.displayGame2)
    gameModesView.removeGame2Description(model.removeGame2)
    gameModesView.displayGame3Description(model.displayGame3)
    gameModesView.removeGame3Description(model.removeGame3)
    gameModesView.displayGame4Description(model.displayGame4)
    gameModesView.removeGame4Description(model.removeGame4)
    substantiveView.displayGameButtons(model.startGame1)
    substantiveView.checkGuess(model.procesateGuess)
    substantiveView.leaderBoard(model.procesateLeaderBoard1)
    substantiveView.skipButton(model.procesateSkipButton)
    verbView.displayGameButtons(model.displayCheckBoxesGame2)
    verbView.startGame2(model.startAndProcesateGame2)
}
init();


function startGame() {
    // Retrieve selected tenses using JavaScript
    const form = document.getElementById("tenseSelectionForm");
    const selectedTenses = Array.from(form.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.name);

    // Use selectedTenses for game logic or other actions
    console.log("Selected Tenses:", selectedTenses);
    // Add your game logic here
}