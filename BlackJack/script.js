// let messageEl = document.getElementById('message-el')
// let sumEl = document.getElementById('sum-el')
// let cardsEl =document.getElementById('cards-el')

// let firstCard = 10
// let secondCard = 4
// let cards = [firstCard, secondCard]
// let sum = firstCard + secondCard
// let hasblackJack = false
// let isAlive = true
// let message = ''

// function startGame() {
//   renderGame()
// }

// function renderGame() {
//   cardsEl.textContent = "Cards: " + cards[0] + ' ' + cards[1]
//   sumEl.textContent = "Sum: " + sum
//   if (sum <= 20) {
//   message= "Do you want to draw a new card?"
// } else if (sum === 21) {
//   message = "Wohoo! You've got Blackjack!"
//   hasblackJack = true
// } else {
//   message = "You're out of the game!"
//   isAlive = false
// }
// messageEl.textContent = message
// }

// function newCard() {
//   let card = 6
//   sum += card
//   cards.push(card)
//   console.log(cards)
//   renderGame()
// }

let messages = [
  "Hey, how's it going?",        
  "I'm great, thank you! How about you?",
  "All good. Been working on my portfolio lately.",
  "Same here!",
  "🙌"
]

for (let i = 0; i < messages.length; i +=1) {
  console.log(messages[i])
}

