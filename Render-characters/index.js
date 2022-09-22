// function getDiceRollArray(diceCount) {
//   return new Array(diceCount).fill('0').map(function(num) {
//     return Math.floor(Math.random()*6) + 1
//   })
// }

// function getDiceHtml(diceCount) {
//   return getDiceRollArray(diceCount).map(function(num) {
//     return `<div class="dice">${num}</div>`
//   }).join('')
// }

// const hero = {
//   elementId: 'hero',
//   name:'Wizard' ,
//   avatar:'images/wizard.png' ,
//   health:'60',
//   diceCount: 3
// }

// const monster = {
//   elementId:'monster' ,
//   name:'Orc' ,
//   avatar:'images/orc.png' ,
//   health: '10',
//   diceCount: 1
// }

// function renderCharacter(data) {
//   const { elementId, name, avatar, health, diceCount } = data
//   const diceHtml = getDiceHtml(diceCount)

//   document.getElementById(elementId).innerHTML = `
//     <div class="character-card">
//       <h4 class="name"> ${name} </h4>
//       <img class="avatar" src="${avatar}"/>
//       <p class="health">health: <b> ${health} </b></p>
//       <div class="dice-container">${diceHtml} </div>
//     </div>
//   `
// }

// renderCharacter(hero)
// renderCharacter (monster)

const animalForRelease1 = {
  name: 'Tilly',
  species: 'tiger',
  weightKg: 56,
  age: 2,
  dateOfRelease: '03-02-2022'
}
const animalForRelease2 = {
  name: 'Nelly',
  species: 'elephant',
  weightKg: 320,
  age: 16,
  dateOfRelease: '03-02-2022'
}

function Animal(data) {
  this.name = data.name
  this.species = data.species
  this.weightKg = data.weightKg
  this.age = data.age
  this.dateOfRelease = data.dateOfRelease
  this.summariseAnimal = function () {
    console.log(`${this.name} is a ${this.age} year old ${this.species} which weighs ${this.weightKg}kg and was released into the wild on ${this.dateOfRelease}`)
  }
}

const tillytheTiger = new Animal(animalForRelease1)
const nellytheElephant = new Animal(animalForRelease2)

tillytheTiger.summariseAnimal()
nellytheElephant.summariseAnimal()