// import characterData from './data.js'
// import Character from './Character.js'

// function attack(){
//   wizard.getDiceHtml()
//   orc.getDiceHtml()
//   wizard.takeDamage(orc.currentDiceScore)
//   orc.takeDamage(wizard.currentDiceScore)
//   render()
//   if (wizard.dead || orc.dead) {
//     endGame()
//   }
// }

// function endGame() {
//   console.log('The game is over')
// }

// function render() {
//   document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
//   document.getElementById('monster').innerHTML = orc.getCharacterHtml();
// }

// document.getElementById("attack-button").addEventListener('click', attack)

// const wizard = new Character(characterData.hero)
// const orc = new Character(characterData.monster)
// render()


const playerGuess = 3
const correctAnswer = 6

/*
Challenge 
1. Refactor the if else statement to use a ternary operator.
*/

// let message = '' 
// if(playerGuess === correctAnswer){
//     message = 'Correct!'
// }
// else{
//     message = 'Wrong!'
// }

const message = playerGuess < correctAnswer ? 'Too Low'
  : playerGuess > correctAnswer ? 'Too High' 
  : 'Exactly right'
console.log(message)