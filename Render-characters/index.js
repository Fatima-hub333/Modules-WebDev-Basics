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

const hotel1 = {
	name: 'Safari View',
	rooms: 30,
	stars: '⭐⭐⭐⭐⭐',
  costPerNightAdult: 240,
  costPerNightChild: 180
}

const hotel2 = {
	name: 'Leopard Mansion',
	rooms: 96,
	stars: '⭐⭐⭐',
  costPerNightAdult: 120,
  costPerNightChild: 180
}

function NationalParkHotels(data) {
  this.name = data.name
  this.rooms = data.rooms
  this.stars = data.stars
  this.costPerNightAdult = data.costPerNightAdult
  this.costPerNightChild = data.costPerNightChild
  this.summariseHotel = function () {
    const totalPrice = this.costPerNightAdult * 2 + this.costPerNightChild * 2
    console.log(`A one night stay at the ${this.name} for two adults and two children costs a total of ${totalPrice}`)
  }
}

const hotelSafari = new NationalParkHotels(hotel1)
const hotelLeopard = new NationalParkHotels(hotel2)

hotelSafari.summariseHotel()
hotelLeopard.summariseHotel()