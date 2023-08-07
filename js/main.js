/*----- constants -----*/
const DECK = [
's02', 's03', 's04', 's05', 's06', 's07', 's08', 's09', 's10', 'sJ', 'sQ', 'sK', 'sA',
'c02', 'c03', 'c04', 'c05', 'c06', 'c07', 'c08', 'c09', 'c10', 'cJ', 'cQ', 'cK', 'cA',
'd02', 'd03', 'd04', 'd05', 'd06', 'd07', 'd08', 'd09', 'd10', 'dJ', 'dQ', 'dK', 'dA',
'h02', 'h03', 'h04', 'h05', 'h06', 'h07', 'h08', 'h09', 'h10', 'hJ', 'hQ', 'hK', 'hA'
]


/*----- state variables -----*/
let board; //update card(s) played on board
let turn; //update message & score
let winner; //update message & show reset btn

/*----- cached elements  -----*/
const messageEl = document.querySelector('h2')
const playDeck = document.getElementById('playDeck')
const playWar = document.getElementById('playWar')
const comDeck = document.getElementById('comDeck')
const comWar = document.getElementById('comWar')
const resetBtn = document.querySelector('button')
/*----- event listeners -----*/
document.addEventListener('click', info)
function info(evt){
    console.log(evt.target)
}

playDeck.addEventListener('click', handleCards)
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

function shuffle(arr) {
    const shuffledDeck = [...DECK];
    const length = shuffledDeck.length;
    for(let i = 0; i < length; i++) {
        const randomOrder = Math.floor((shuffledDeck.length - i) * Math.random())
        const randomDeck = shuffledDeck.splice(randomOrder, 1)
        shuffledDeck.push(...randomDeck)
    }
    return shuffledDeck
}