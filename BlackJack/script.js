let messageEl = document.getElementById('message-el')
let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasblackJack = false
let isAlive = true
let message = ''

function startGame() {
  console.log("Start button clicked")
}

if (sum <= 20) {
  message = "Do you want to draw a new card? 🙂"
} else if (sum === 21) {
  message = "Wohoo! You've got Blackjack! 🥳"
  hasblackJack = true
} else {
  message = "You're out of the game! 😭"
  isAlive = false
}

console.log(message)
