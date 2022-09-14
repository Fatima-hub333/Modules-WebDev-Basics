// let box = document.getElementById("box")
// box.addEventListener("click", function () {
//   console.log("I want to open the box")
// })

// const baseprice = 520
// const discount = 120
// let shippingCost = 12
// let shippingTime = "5-12 days"

// shippingCost = 15
// shippingTime = "7-14 days"

// const fullprice = baseprice - discount + shippingCost
  
// console.log("Total cost: " + fullprice + ". it will arrive in " + shippingTime)

// const container = document.getElementById("container")

// container.innerHTML = "<button onclick='buy()'> Button!</button>"

// function buy() {
//   container.innerHTML += "<p>Thank You for buying!</p>"
// }

// template strings/literals
// const recipient = "James"
// const sender = "Fatima"
// const email = "Hey " + recipient + "! How is it going? Cheers Fatima"
// const email = `Hey ${recipient}!
// How is it going?
// Cheers ${sender}`
// console.log(email)

//Setting the stage
// const player = "Fatima"
// const opponent = "Nick"
// const game = "AmazingFighter"
// let points = 0
// let hasWon = false
// Playing the game
// points += 100
// hasWon = true

// Announcing the winner
// if (hasWon) {
//     console.log(`${player} got ${points} and won the ${game}game!`)
// } else {
//     console.log(`The winner is ${opponent}!
//     ${player} lost the game"`)
// }

// let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]
// function logItems(arr) {
//   for (let i = 0; i < arr.length; i += 1){
//     console.log(arr[i])
//   }
// }

// logItems(myCourses)
// let player = localStorage.getItem("player")
// console.log(player)
// let data = [
//   {
//     player: "Jane",
//     score: 52
//   },
//   {
//     player: "Mark",
//     score: 41
//   }
// ]

// const logBtn = document.getElementById("log-btn")
// logBtn.addEventListener("click", function () {
//   console.log(data[0].score)
// })

// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2: If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge

// function generateSentence(desc, arr) {
//   let baseString = `The ${arr.length} ${desc} are `
//   const lastIndex = arr.length - 1
//   for (let i = 0; i < arr.length; i += 1) {
//     if (i === lastIndex) {
//       baseString += arr[i]
//     } else {
//       baseString += arr[i] + ","
//     }
    
//   }
//   return baseString
// }

// const sentence = generateSentence("largest countries", ["China", "India", "USA"])
// console.log(sentence)

// const imgs = [
//   "images/hip1.jpg",
//   "images/hip2.jpg",
//   "images/hip3.jpg"
// ]

// const container = document.getElementById("container")


// function renderImages() {
//   let imgsDOM = ''
//   for (let i = 0; i < imgs.length; i += 1) {
//     imgsDOM += `<img alt="employee in the company" class="team-img" src="${imgs[i]}">`
//   }
//   container.innerHTML = imgsDOM
// }
// renderImages()

// Challenge:
// Round the price in the button down to two decimal places.
// Don't know which method to use? Google it!

const totalPrice = "420.69235632455"

const btn = document.getElementById("purchase-btn")
btn.textContent = `Buy €${Number(totalPrice).toFixed(2)}`