/*----- constants -----*/
const DECK = [
's02', 's03', 's04', 's05', 's06', 's07', 's08', 's09', 's10', 'sJ', 'sQ', 'sK', 'sA',
'c02', 'c03', 'c04', 'c05', 'c06', 'c07', 'c08', 'c09', 'c10', 'cJ', 'cQ', 'cK', 'cA',
'd02', 'd03', 'd04', 'd05', 'd06', 'd07', 'd08', 'd09', 'd10', 'dJ', 'dQ', 'dK', 'dA',
'h02', 'h03', 'h04', 'h05', 'h06', 'h07', 'h08', 'h09', 'h10', 'hJ', 'hQ', 'hK', 'hA'
];

const RANKS = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
/*----- state variables -----*/
let playerDeck = [];
let computerDeck = [];

/*----- cached elements  -----*/
//const boardEl = document.getElementsByClassName('board')
const msgEl = document.querySelector('h2')
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
// playWar.addEventListener('click', handleScore)
// resetBtn.addEventListener('click', initialize)
/*----- functions -----*/
initialize();
//initialize all state, then call render()
function initialize() {
    const shuffledDeck = shuffle(DECK)
    playerDeck = shuffledDeck.slice(0, 26)
    computerDeck = shuffledDeck.slice(26)
    //render()
}

//stub up render func to update state
function render() {
    renderBoard()
    renderTurn()
    renderScore()
    renderWinner()
}

function shuffle(arr) {
    const shuffledDeck = [...DECK];
    for(let i = 0; i < shuffledDeck.length; i++) {
        const randomOrder = Math.floor((shuffledDeck.length - i) * Math.random());
        const randomDeck = shuffledDeck.splice(randomOrder, 1);
        shuffledDeck.push(...randomDeck);
    }
    return shuffledDeck;
}

function handleCards() {
    const playerValue = playerDeck.pop();
    const computerValue = computerDeck.pop();
    let playerRank = 0;
    let computerRank = 0;
    playWar.innerHTML = `<div class="card ${playerValue} large" id="playWar"></div>`;
    comWar.innerHTML = `<div class="card ${computerValue} large" id="comWar"></div>`;
    if (playerValue.length === 3) playerRank = parseInt(playerValue[2]) !== 0 ? parseInt(playerValue[2]) : 10;
    if (playerValue.length === 2) {
        playerValue[1] === 'J' ? playerRank = 11 : null
        playerValue[1] === 'Q' ? playerRank = 12 : null
        playerValue[1] === 'K' ? playerRank = 13 : null
        playerValue[1] === 'A' ? playerRank = 14 : null
    };
    
    if (computerValue.length === 3) computerRank = parseInt(computerValue[2]) !== 0 ? parseInt(computerValue[2]) : 10;
    if (computerValue.length === 2) {
        computerValue[1] === 'J' ? computerRank = 11 : null
        computerValue[1] === 'Q' ? computerRank = 12 : null
        computerValue[1] === 'K' ? computerRank = 13 : null
        computerValue[1] === 'A' ? computerRank = 14 : null
    };

    if (playerRank === computerRank) {
        msgEl.innerText = 'THIS MEANS WAR!!!'
    }
    else if (playerRank > computerRank) {
        msgEl.innerText = 'YOU WIN THIS BATTLE!'
    }
    else {
        msgEl.innerText = 'COMPUTER WON THIS BATTLE!'
    };
    console.log(playerRank)
    console.log(computerRank)
}
