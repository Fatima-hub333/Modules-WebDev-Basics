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
const recipient = "James"
const sender = "Fatima"
// const email = "Hey " + recipient + "! How is it going? Cheers Fatima"
const email = `Hey ${recipient}!
How is it going?
Cheers ${sender}`
console.log(email)