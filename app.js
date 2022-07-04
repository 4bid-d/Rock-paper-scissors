const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const winOrLooseDisplay =  document.getElementById('win-or-lose')
const possibleChoices = document.querySelectorAll('button')
let userChoice    
let computerChoice           
let result 

possibleChoices.forEach(possibleChoice =>possibleChoice.addEventListener('click',(e)=>{ 
    userChoice = e.target.id
    userChoiceDisplay.innerHTML= userChoice
    generateComputerChoice()
    computerChoiceDisplay.innerHTML= computerChoice
    getResult()
    resultDisplay.innerHTML= result
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3 )
    
if (randomNumber === 1){
    computerChoice = 'Stone'
}
if (randomNumber === 2){
    computerChoice = 'Scissors'
}
if (randomNumber === 3){
    computerChoice = 'Paper'
}

    return computerChoice
}
function getResult(){
    if (computerChoice === userChoice){
        result = ' Its a Draw!'
    }
    else if (computerChoice === 'Stone' && userChoice === 'Paper'){
        result = ' You Got It! '
    }
    else if (computerChoice === 'Paper' && userChoice === 'Scissors'){
        result = ' You Got It! '
    }
    else if (computerChoice === 'Scissors' && userChoice === 'Stone'){
        result = ' You Got It! '
    }
    else if (computerChoice === 'Paper' && userChoice === 'Stone'){
        result = ' Oh You Lose! '
    }
    else if (computerChoice === 'Scissors' && userChoice === 'Paper'){
        result = ' Oh You Lose! '
    }
    else if (computerChoice === 'Stone' && userChoice === 'Scissors'){
        result = ' Oh You Lose! '
    }
    
 

}