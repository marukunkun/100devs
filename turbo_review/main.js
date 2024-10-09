// *Variables*
// Declare a variable and assign it to your fav drink as a string. 
// Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = '   Coca-Cola    '
console.log(favDrink.trim())

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let sentence = 'Hello, I\'m Jesus and I good boy, my favorite color is red and I like playing with Magic the gathering with my friend on weekend.'
console.log(sentence.search('Magic'))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors() {
    let result = Math.floor(Math.random() * 3)
	return result === 0 ? 'Rock' : result === 1 ? 'Paper' : 'Scissors'
}


// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function battleAgainstBot() {
    let botResult = rockPaperScissors()
    let playerResult = rockPaperScissors()
    if(botResult === playerResult) {
        console.log('Draw!')
    } else if(botResult === 'Rock' && playerResult !== 'Paper') {
        console.log('Computer won!')
    } else if(botResult === 'Paper' && playerResult !== 'Scissors') {
        console.log('Computer won!')
    } else if(botResult === 'Scissors' && playerResult !== 'Rock') {
        console.log('Computer won!')
    } else {
        console.log('You won!')
    }
}

battleAgainstBot()

//*Loops*
// Create a function that takes an array of choices. 
// Play the game x times where x is the number of choices in the array.
// Print the results of each game to the console.
function choice(n) { 
    let choice = []
    for(let i = 0; i < n; i++) {
        choice.push(rockPaperScissors())
    }
    return choice
}   

console.log(choice(10))