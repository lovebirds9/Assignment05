const theGame = (userChoice) => {
    const random1 = Math.random()*100
    const random2 = Math.random()*100
    const random3 = Math.random()*100

    let computerChoice = 'Rock'

    if(random1  > random2) {
        computerChoice = 'Scissor'
    } else if (random2 > random3) {
        computerChoice =  'Paper'
    } else {
        computerChoice = 'Rock'
    }

    if(userChoice === 'Rock' && computerChoice === 'Rock') {
        return `it's a tie`
    }

    if(userChoice === 'Rock' && computerChoice === 'Paper') {
        return `You Lost!`
    }

    if(userChoice === 'Rock' && computerChoice === 'Scissor') {
        return `You Won!`
    }

    if(userChoice === 'Paper' && computerChoice === 'Scissor') {
        return `You Lost!`
    }
    if(userChoice === 'Paper' && computerChoice === 'Rock') {
        return `You Won!`
    }

    if(userChoice === 'Paper' && computerChoice === 'Paer') {
        return `It's a Tie!`
    }

    if(userChoice === 'Scissor' && computerChoice === 'Scissor') {
        return `It's a Tie!`
    }

    if(userChoice === 'Scissor' && computerChoice === 'Rock') {
        return `You Lost!`
    }
    if(userChoice === 'Scissor' && computerChoice === 'Paper') {
        return `You Won!`
    }
    
}

const playGame = () => {
    const userChoice = prompt('Please write one of the choices: Paper, Scissor, or Rock!')

    if(userChoice === 'Scissor' || userChoice === 'Rock' || userChoice === 'Paper') {
        const message = theGame(userChoice)
        if(message) {
            document.write(`${message} <br>`)
        } else {
            document.write('unwanted error happened')
        }
    } else {
        document.write(`Please enter a valid choice`)
    }
}

playGame()