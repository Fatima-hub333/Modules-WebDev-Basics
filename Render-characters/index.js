import characterData from './data.js'
import Character from './Character.js'

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)

function attack() {
  console.log('Attack button clicked')
}

document.getElementById('attack-button').addEventListener('click', attack)

function render() {
  document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
  document.getElementById('monster').innerHTML = orc.getCharacterHtml()
}

render()