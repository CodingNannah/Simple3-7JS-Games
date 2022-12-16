const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let computerChoice
let userChoice
let result


// Tutorial Code
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id 
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    // this was only allowing me to smash the button 3 times:
    // const randomNumber = Math.floor(Math.random() * possibleChoices.length)
    const randomNumber = Math.floor(Math.random() * 3)
    console.log(randomNumber)

    if (randomNumber === 0) {
        computerChoice = 'rock'
    }
    if (randomNumber === 1) {
        computerChoice = 'paper'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "No winner! It's a draw."
    }

    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'Paper covers rock. YOU WIN!'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'Rock smashes scissors. Computer wins.'
    }

    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'Scissors cut paper. YOU WIN!'
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'Paper covers rock. Computer wins.'
    }

    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'Rock smashes scissors. YOU WIN!'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'Scissors cut paper. Computer wins.'
    }
    resultDisplay.innerHTML = result
}