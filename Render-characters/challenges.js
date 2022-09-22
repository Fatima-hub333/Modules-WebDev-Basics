// const animalForRelease1 = {
//   name: 'Tilly',
//   species: 'tiger',
//   weightKg: 56,
//   age: 2,
//   dateOfRelease: '03-02-2022'
// }
// const animalForRelease2 = {
//   name: 'Nelly',
//   species: 'elephant',
//   weightKg: 320,
//   age: 16,
//   dateOfRelease: '03-02-2022'
// }

// function Animal(data) {
//   this.name = data.name
//   this.species = data.species
//   this.weightKg = data.weightKg
//   this.age = data.age
//   this.dateOfRelease = data.dateOfRelease
// }

// const tillytheTiger = new Animal(animalForRelease1)
// const nellytheElephant = new Animal(animalForRelease2)

// console.log(tillytheTiger)
// console.log(nellytheElephant)

const hotel1 = {
	name: 'Safari View',
	rooms: 30,
	stars: '⭐⭐⭐⭐⭐',
	costPerNightAdult: 240,
}

const hotel2 = {
	name: 'Leopard Mansion',
	rooms: 96,
	stars: '⭐⭐⭐',
	costPerNightAdult: 120,
}

function NationalParkHotels(data) {
  this.name = data.name
  this.rooms = data.rooms
  this.stars = data.stars
  this.costPerNightAdult = data.costPerNightAdult
}

const hotelSafari = new NationalParkHotels(hotel1)
const hotelLeopard = new NationalParkHotels(hotel2)

console.log(hotelSafari)
console.log(hotelLeopard)