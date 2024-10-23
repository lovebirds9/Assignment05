// ADD A FUNCTION CALLED CALCULATE

const calculate = (first, second, operation) => {
    

    switch(operation) {
        case '+': {
            return first + second
            
        }
        case '-' : {
            return first - second
        
        }
        case '*': {
            return first * second
        
        }
        case '/': {
            return first/second
        
        }
        default: return 'error' 

        }
      
}



// COLLECT FIRST NUMBER FROM USER

const process = () => {
   

    do {
        const firstNumber = parseInt(prompt('Please enter first number: '))
        const secondNumber = parseInt(prompt('Please enter second number: '))
        const operation = prompt('Please enter operation type: +, -, *, / ') 
        const answer = calculate(firstNumber, secondNumber, operation)
        if(answer !== 'error') {
            document.write(answer)
        } else {
            alert('Please enter a valid operation type')
        }
    } while (operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/')
    
}

process()



// COLLECT SECOND NUMBER FROM USER

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
