import * as model from './model.js'
import startView from './views/startView.js';
const init = function(){
    startView.displayGameModes(model.generateGameModes);
}
init();