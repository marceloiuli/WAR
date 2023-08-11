/*----- constants -----*/
const DECK = [
's02', 's03', 's04', 's05', 's06', 's07', 's08', 's09', 's10', 'sJ', 'sQ', 'sK', 'sA',
'c02', 'c03', 'c04', 'c05', 'c06', 'c07', 'c08', 'c09', 'c10', 'cJ', 'cQ', 'cK', 'cA',
'd02', 'd03', 'd04', 'd05', 'd06', 'd07', 'd08', 'd09', 'd10', 'dJ', 'dQ', 'dK', 'dA',
'h02', 'h03', 'h04', 'h05', 'h06', 'h07', 'h08', 'h09', 'h10', 'hJ', 'hQ', 'hK', 'hA'
];

/*----- state variables -----*/
let playerDeck,
    computerDeck,
    playerScore,
    computerScore,
    playerRank,
    computerRank,
    playerValue,
    computerValue,
    winner

/*----- cached elements  -----*/
const msgEl = document.querySelector('h2')
const playDeck = document.getElementById('playDeck')
const playWar = document.getElementById('playWar')
const playScore = document.getElementById('playScore')
const comDeck = document.getElementById('comDeck')
const comWar = document.getElementById('comWar')
const comScore = document.getElementById('comScore')
const resetBtn = document.querySelector('button')

/*----- event listeners -----*/
resetBtn.addEventListener('click', initialize)

/*----- functions -----*/
initialize();

function initialize() {
    playerDeck = []
    computerDeck = []
    playerScore = 0
    computerScore = 0
    playDeck.addEventListener('click', handleCards)
    playWar.addEventListener('click', handleWarClick)
    const shuffledDeck = shuffle(DECK)
    playerDeck = shuffledDeck.slice(0, 26)
    computerDeck = shuffledDeck.slice(26)
    resetBtn.style.visibility = 'hidden'
    winner = null
    render()
};

function shuffle(arr) {
    const shuffledDeck = [...DECK]
    for(let i = 0; i < shuffledDeck.length; i++) {
        const randomOrder = Math.floor((shuffledDeck.length - i) * Math.random())
        const randomDeck = shuffledDeck.splice(randomOrder, 1)
        shuffledDeck.push(...randomDeck)
    }
    return shuffledDeck;
};

function handleWarClick() {
    playerValue = null
    computerValue = null
    playerRank = null
    computerRank = null
    render()
};

function handleCards() {
    playerValue = playerDeck.pop();
    computerValue = computerDeck.pop();
    if (playerValue.length === 3) playerRank = parseInt(playerValue[2]) !== 0 ? parseInt(playerValue[2]) : 10
    if (playerValue.length === 2) {
        playerValue[1] === 'J' ? playerRank = 11 : null
        playerValue[1] === 'Q' ? playerRank = 12 : null
        playerValue[1] === 'K' ? playerRank = 13 : null
        playerValue[1] === 'A' ? playerRank = 14 : null
    };
    if (computerValue.length === 3) computerRank = parseInt(computerValue[2]) !== 0 ? parseInt(computerValue[2]) : 10
    if (computerValue.length === 2) {
        computerValue[1] === 'J' ? computerRank = 11 : null
        computerValue[1] === 'Q' ? computerRank = 12 : null
        computerValue[1] === 'K' ? computerRank = 13 : null
        computerValue[1] === 'A' ? computerRank = 14 : null
    };
    if (playerRank > computerRank) {
        playerScore += 2
    }
    else if (playerRank < computerRank) {
        computerScore += 2
    }
    checkWinner()
    render()
};

function renderCards() {
    if (playerValue && computerValue) {
        playWar.innerHTML = `<div class="card ${playerValue} large" id="playWar"></div>`
        comWar.innerHTML = `<div class="card ${computerValue} large" id="comWar"></div>`
    } else {
        playWar.innerHTML = `<div class="" id="playWar"></div>`
        comWar.innerHTML = `<div class="" id="comWar"></div>`
        msgEl.innerText = ''
    }
};

function renderScore() {
    playScore.innerText = `${playerScore}`
    comScore.innerText = `${computerScore}`
};

function renderMessage() {
    if(!playerRank && !computerRank) {
        msgEl.innerText = ''
    } else if (playerRank === computerRank) {
        msgEl.innerText = 'THIS MEANS WAR!!!'
    } else if (playerRank > computerRank) {
        msgEl.innerText = 'YOU WIN THIS BATTLE!'
    } else {
        msgEl.innerText = 'COMPUTER WON THIS BATTLE!'
    }
};

function checkWinner() {
    if (playerScore >= 26) {
        winner = 'player'
    } else if (computerScore >= 26) {
        winner = 'computer'
    } else if (!playerDeck.length && !computerDeck.length) {
        winner = 'tie'
    } else {
        winner = null
    }
};

function renderWinner() {
    if (winner === 'player') {
        msgEl.innerText = 'YOU HAVE WON THE WAR!!!'
        resetBtn.style.visibility = 'visible'
    } else if (winner === 'computer') {
        msgEl.innerText = 'COMPUTER DEFEATED YOU IN THE WAR...'
        resetBtn.style.visibility = 'visible'
    } else if (winner === 'tie') {
        msgEl.innerText = '...THE WAR IS A DRAW SOMEHOW...'
        resetBtn.style.visibility = 'visible'
    }
    if (winner) {
        playDeck.removeEventListener('click', handleCards)
        playWar.removeEventListener('click', handleWarClick)
    }
};

function render() {
    renderCards()
    renderScore()
    renderMessage()
    renderWinner()
};