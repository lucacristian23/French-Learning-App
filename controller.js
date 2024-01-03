import * as model from './model.js'
import startView from './views/startView.js';
import gameModesView from './views/gameModesView.js'
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
}
init();



