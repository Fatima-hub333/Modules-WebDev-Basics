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

let cards = [7, 3, 9]
for (let i = 0; i < cards.length; i +=1) {
  console.log(cards[i])
}

let sentence = ["Hello", "my", "name", "is", "fatima"]
let greetingEl = document.getElementById("greeting-el")
for (let i = 0; i < sentence.length; i += 1) {
  greetingEl.textContent += sentence[i] + " "
}