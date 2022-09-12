// let course = {
//   title: "Learn CSS Grid for free",
//   lessons: 16,
//   creator: "Fatima Zahir",
//   length: 63,
//   level: 2,
//   isFree: true,
//   tags: ["html", "css"]
// }

// console.log(course.tags)

// let castle = {
//   title: "Live like a king in my castle",
//   price: 190,
//   isSuperHost: true,
//   features: ["4 guests", "1 bedroom", "2 beds"]
// }

// console.log(castle.price)
// console.log(castle.isSuperHost)

// let person = {
//   name: "Fatima ",
//   age: 25 ,
//   country: "Pakistan"
// }

// function logData() {
//   console.log(person.name + "is " + person.age + " years old and lives in " + person.country)
// }

// logData()

// let age = 25

// if (age < 6) {
//   console.log("Free")
// } else if (age <= 18) {
//   console.log("Child Discount")
// } else if (age <= 26) {
//   console.log ("Student discount")
// } else if (age <= 67) {
//   console.log("Full price")
// } else {
//   console.log("Senior Citizen Discount")
// }

// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]
// for (let i = 0; i < largeCountries.length; i += 1) {
//   console.log("- " + largeCountries[i])
// }

// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]
// largeCountries.shift()
// largeCountries.unshift("China")
// largeCountries.pop()
// largeCountries.push("Pakistan")
// console.log(largeCountries)

// let dayOfMonth = 13
// let weekday = "Friday"
// if (dayOfMonth === 13 && weekday === "Friday") {
//   console.log("😱")
// }

// let hands = ["rock", "paper", "scissors"]
// function getHand() {
//   let randomIndex = Math.floor(Math.random() * 3)
//   return hands[randomIndex]
// }
// console.log(getHand())

// let fighters = ["🐉", "🐥", "🐊", "💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷", "🐆", "🦕", "🦁"]
// let stageEl = document.getElementById("stage-el")
// let fightButton = document.getElementById("fightButton")
 
// fightButton.addEventListener("click", function () {
//   let randomIndexOne = Math.floor(Math.random() * fighters.length)
//   let randomIndexTwo = Math.floor(Math.random() * fighters.length)
//   stageEl.textContent = fighters[randomIndexOne] + " VS " + fighters[randomIndexTwo]
// })

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function sortFruit() {
  for (let i = 0; i < fruit.length; i += 1){
    if (fruit[i] === "🍎") {
      appleShelf.textContent += "🍎"
    } else if (fruit[i] === "🍊") {
      orangeShelf.textContent += "🍊"
    }
  }
}

sortFruit()