/*----- constants -----*/


/*----- state variables -----*/
let board; //update card(s) played on board
let turn; //update message & score
let winner; //update message & show reset btn

/*----- cached elements  -----*/
const messageEl = document.querySelector('h2')
const playDeck = document.getElementById('playDeck')
const playWar = document.getElementById('playWar')
const comWar = document.getElementById('comWar')
const resetBtn = document.querySelector('button')
/*----- event listeners -----*/
document.addEventListener('click', info)
function info(evt){
    console.log(evt.target)
}

playDeck.addEventListener('click', handleCard)
playWar.addEventListener('click', handleScore)
resetBtn.addEventListener('click', init)
/*----- functions -----*/
init();
//initialize all state, then call render()
function init() {

    render()
}

//stub up render func to update state
function render() {
    
}