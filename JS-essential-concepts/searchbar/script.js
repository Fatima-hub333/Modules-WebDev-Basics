let usernameInput = document.getElementById("usernameInput")
usernameInput.addEventListener("keyup", () => {
  let username = event.target.value.toLowerCase()
  console.log(username)
})