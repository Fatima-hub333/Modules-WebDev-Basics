function getDiceRollArray(diceCount) {
  const newDiceRolls = []
  for (let i = 0; i < diceCount; i += 1) {
    newDiceRolls.push(Math.floor(Math.random() * 6) + 1)
  }
  return newDiceRolls
}

function getDiceHtml(diceCount) {
  return getDiceRollArray(diceCount).map(function(num) {
    return `<div class="dice">${num}</div>`
  }).join('')
}

const hero = {
  elementId: 'hero',
  name:'Wizard' ,
  avatar:'images/wizard.png' ,
  health:'60' ,
  diceRoll: [3, 1, 4],
  diceCount: 3
}

const monster = {
  elementId:'monster' ,
  name:'Orc' ,
  avatar:'images/orc.png' ,
  health: '10',
  diceRoll: [2],
  diceCount: 1
}

function renderCharacter(data) {
  const { elementId, name, avatar, health, diceRoll, diceCount } = data
  const diceHtml = getDiceHtml(diceCount)

  document.getElementById(elementId).innerHTML = `
    <div class="character-card">
      <h4 class="name"> ${name} </h4>
      <img class="avatar" src="${avatar}"/>
      <p class="health">health: <b> ${health} </b></p>
      <div class="dice-container">${diceHtml} </div>
    </div>
  `
}

renderCharacter(hero)
renderCharacter (monster)


/*
Challenge 
1. Create a function called getDiceHtml. 
2. getDiceHtml should map over the array of dice rolls 
   returned from getDiceRollArray to generate the html 
   we need to render our dice with random values. This is 
   the HTML: `<div class="dice">DICE VALUE HERE</div>`
3. Think about the parameters and arguments!
4. Down in renderCharacter(), set diceHtml equals to our 
   new getDiceHtml function. Remember to give it the argument
   it needs. 
5. Delete any code we no longer need.
**hint.md for help**
*/
