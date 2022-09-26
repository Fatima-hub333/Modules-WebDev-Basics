// const people = [
//   { name: "Jack", hasPet: true },
//   { name: "Jill", hasPet: false },
//   { name: "Alice", hasPet: true },
//   { name: "Bob", hasPet: false },
// ]

// const gimmeThePets = person => person.hasPet

// const peopleWithPets = people.filter(gimmeThePets)
// console.log(peopleWithPets)

// https://www.javascripttutorial.net/javascript-array-filter

const people = [
    { name: "Jack", hasPet: true, age: 12 },
    { name: "Jill", hasPet: false, age: 18 },
    { name: "Alice", hasPet: true, age: 22 },
    { name: "Bob", hasPet: false, age: 32 },
]

const olderPeople = person => person.age >= 18

const peopleOlder = people.filter(olderPeople)

console.log(peopleOlder)

//  * Extra challenge to practice array.filter:
//  *
//  * Using .filter, create a new array of people who are 18 and older
//  * (should be Jill, Alice, and Bob)
//  *

const people = [
  { name: "Jack", hasPet: true },
  { name: "Jill", hasPet: false },
  { name: "Alice", hasPet: true },
  { name: "Bob", hasPet: false },
]

function filterArray(array, callback) {
  const resultingArray = []
  for (let item of array){
    const shouldBeIncluded = callback(item)
    if (shouldBeIncluded) {
      resultingArray.push(item)
    }
  }
  return resultingArray
}

const peopleWithPets = filterArray(people, person => person.hasPet)

console.log(peopleWithPets)

<!-- Promises -->