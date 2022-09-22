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