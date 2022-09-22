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
//   const endMessage = wizard.health === 0 && orc.health === 0 ? "No victors - all creatures are dead"
//     : wizard.health > 0 ? "The Wizard Wins"
//       : "The Orc is Victorious"
//   const endEmoji = wizard.health > 0 ? "🔮" : "☠️"
//   document.body.innerHTML = `
//     <div class="end-game">
//         <h2>Game Over</h2>
//         <h3>${endMessage}</h3>
//         <p class="end-emoji">${endEmoji}</p>
//     </div>
//   `
// }

// function render() {
//   document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
//   document.getElementById('monster').innerHTML = orc.getCharacterHtml();
// }

// document.getElementById("attack-button").addEventListener('click', attack)

// const wizard = new Character(characterData.hero)
// const orc = new Character(characterData.monster)
// render()

/*
Challenge
1. Refactor this function so it only warns drivers 
   who are going over the speed limit.
2. The function now needs to take in two parameters. 
   The first is the speed limit, the second is the 
   driver's actual speed.
*/

const speedWarning = (speedLimit, speed) => {
  if (speed > speedLimit) {
    return`You are going at ${speed} mph!`
  }
  
}

console.log(speedWarning(30, 40))