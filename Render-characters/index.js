function getDiceRollArray(diceCount) {
  return new Array(diceCount).fill('0').map(function(num) {
    return Math.floor(Math.random()*6) + 1
  })
}

const characterData = {
    hero: {
    elementId: 'hero',
    name:'Wizard' ,
    avatar:'images/wizard.png' ,
    health:'60',
    diceCount: 3
  },
    monster: {
    elementId:'monster' ,
    name:'Orc' ,
    avatar:'images/orc.png' ,
    health: '10',
    diceCount: 1
  }
}


function Character(data) {
  Object.assign(this, data)
  this.getDiceHtml = function (diceCount) {
    return getDiceRollArray(diceCount).map(function(num) {
    return `<div class="dice">${num}</div>`
  }).join('')
  }

  this.getCharacterHtml = function () {
    const { elementId, name, avatar, health, diceCount } = this
    const diceHtml = this.getDiceHtml(diceCount)

    return `
    <div class="character-card">
      <h4 class="name"> ${name} </h4>
      <img class="avatar" src="${avatar}"/>
      <p class="health">health: <b> ${health} </b></p>
      <div class="dice-container">${diceHtml} </div>
    </div>
  `
  }
}

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)

function render() {
  document.getElementById(wizard.elementId).innerHTML = wizard.getCharacterHtml()
  document.getElementById(orc.elementId).innerHTML = orc.getCharacterHtml()
}

render()