const OPTIONS = ['pedra', 'papel', 'tesoura']

const WINS_LOGIC_OBJECT = {
    'pedra': 'tesoura',
    'tesoura': 'papel',
    'papel': 'pedra'
}

const playerOptionElement = document.querySelector('#player-options')
const playerChoiceElement = document.querySelector('#player-choice')
const computerChoiceElement = document.querySelector('#computer-choice')
const resultElement = document.querySelector('#result')

let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3)
    return OPTIONS[random]
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice == humanChoice) {
        return 'TIE!'
    }
    else if (WINS_LOGIC_OBJECT[humanChoice] == computerChoice) {
        humanScore += 1
        return 'HUMAN WINS!'
    }
    computerScore += 1
    return 'COMPUTER WINS!'
}

function insertPlayerOptionEvents() {
    playerOptionElement.childNodes.forEach((option) => {
        option.addEventListener('click', () => {

            let playerChoice = option.value
            playerChoiceElement.classList.remove('idle')
            playerChoiceElement.src = `assets/images/${playerChoice}.png`

            let computerChoice = getComputerChoice()
            computerChoiceElement.classList.remove('idle')
            computerChoiceElement.src = `assets/images/${computerChoice}.png`

            let result = playRound(computerChoice, playerChoice)
            result += `<br> ${humanScore} X ${computerScore}`
            resultElement.innerHTML = result
            resultElement.classList.remove('none')

            setTimeout(() => {
                reset()
            }, 3000)

        })
    })
}

function reset() {

    playerChoiceElement.classList.add('idle')
    playerChoiceElement.src = `assets/images/pedra.png`

    computerChoiceElement.classList.add('idle')
    computerChoiceElement.src = `assets/images/pedra.png`

    resultElement.classList.add('none')
}

function insertFooterContent() {
    const footerCopyright = document.querySelector('#copyright')
    const curentYear = new Date().getFullYear()
    footerCopyright.textContent = `Copyright © ${curentYear} - Brauuu`
}

insertFooterContent()
insertPlayerOptionEvents()