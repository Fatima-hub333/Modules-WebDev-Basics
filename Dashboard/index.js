const author = document.getElementById("author")
const crypto = document.getElementById("crypto")
const cryptoTop = document.getElementById("crypto-top")
const time = document.getElementById("time")

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
  .then(response => response.json())
  .then(data => {
    console.log(data.urls.regular)
    document.body.style.backgroundImage = `url(${data.urls.regular})`
    author.textContent = `By: ${data.user.name}`
  })

  .catch(error => {
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjQyMDYyMDg&ixlib=rb-1.2.1&q=80&w=1080)`
  })

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
  .then(res => {
    if (!res.ok) {
      throw Error("Something went wrong")
    }
    return res.json()
  })
  .then(data => {
    cryptoTop.innerHTML = `
      <img src=${data.image.small} />
      <span>${data.name}</span>
    `
    crypto.innerHTML += `
      <p>🎯: $${data.market_data.current_price.usd}</p>
      <p>👆: $${data.market_data.high_24h.usd}</p>
      <p>👇: $${data.market_data.low_24h.usd}</p>
    `
  })
  .catch(err => console.error(err))

function getCurrentTime() {
  const date = new Date()
time.textContent = date.toLocaleTimeString("en-us", { timeStyle: "short" })
}

setInterval(getCurrentTime, 1000)

navigator.geolocation.getCurrentPosition(position => {
  console.log(position)
})
