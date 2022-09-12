let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl =document.getElementById('cards-el')

let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasblackJack = false
let isAlive = true
let message = ''

function getRandomCard() {
  return Math.floor(Math.random()* 13) + 1
}

function startGame() {
  renderGame()
}

function renderGame() {
  for (let i = 0; i < cards.length; i += 1) {
    cardsEl.textContent = "Cards: " + cards + "  "
  }

  sumEl.textContent = "Sum: " + sum
  if (sum <= 20) {
  message= "Do you want to draw a new card?"
} else if (sum === 21) {
  message = "Wohoo! You've got Blackjack!"
  hasblackJack = true
} else {
  message = "You're out of the game!"
  isAlive = false
}
messageEl.textContent = message
}

function newCard() {
  let card = getRandomCard()
  sum += card
  cards.push(card)
  renderGame()
}
