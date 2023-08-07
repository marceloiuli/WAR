/*----- constants -----*/


/*----- state variables -----*/
let board; //update card(s) played on board
let turn; //update message & score
let winner; //update message & show reset btn

/*----- cached elements  -----*/
const messageEl = document.querySelector('h2')
const playDeck = document.getElementById('playDeck')
const playWar = document.getElementById('playWar')

/*----- event listeners -----*/
document.addEventListener('click', info)
function info(evt){
    console.log(evt.target)
}

/*----- functions -----*/
init();
//initialize all state, then call render
function init() {
    
}