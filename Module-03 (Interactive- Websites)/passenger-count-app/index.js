// document.getElementById('count-el').innerHTML = 5

// change the count-el in the HTML to reflect the new count
let countEl = document.getElementById('count-el')
let count = 0
function increment() {
  count = count + 1
  countEl.innerText = count
}
increment()