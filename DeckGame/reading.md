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
Promises are in one of 3 tates at any given time
- pending
- Fulfilled
- Rejected

<!-- Chainning Methods -->
const voters = [
  {name: "Joe", email: "joe@joe.com", voted: true},
  {name: "Jane", email: "jane@jane.com", voted: true},
  {name: "Bo", email: "bo@bo.com", voted: false},
  {name: "Bane", email: "bane@bane.com", voted: false}
]

const finalResult = voters.filter(voter => voter.voted).map(voter => voter.email)
console.log(finalResult)

const promise = fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
// const promise2 = promise.then(response => response.json())
promise.then(response => response.json())
console.log(promise)
// .then(data => console.log(data))

/**
 * Mini challenge: Figure out what `promise.then()` returns! 
 * Save the result to a variable and log it to the console.
 */

fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
  .then(res => res.json())
  .then(data => console.log(data))
  .then(callback)

fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
  .then(function (res) {
    return "Hello"
  })
  .then(function (whatever) {
    console.log(whatever)
    return "World"
  })
  .then(function (testing) {
    console.log(testing)
    return "Testing"
  })
  .then(function (another) {
    console.log(another)
    return "Blah"
  })

  <!-- Async & Await -->
  introduced in ECMAScript 2017 (A.K.A ES8)
  Make asynchronous code appear to be synchronous
  Async goes before the function
  Await goes before a method/function that returns a promise
