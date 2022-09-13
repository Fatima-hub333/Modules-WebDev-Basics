let chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let passwordLength = 8

let password1El = document.getElementById("password1-el")
let password2El = document.getElementById("password2-el")
let password3El = document.getElementById("password3-el")
let password4El = document.getElementById("password4-el")

function generatePasswords() {
  let password = ''
  for (let i = 0; i < passwordLength; i += 1) {
    const randomIndex = Math.floor(Math.random() * chars.length)
    password += chars[randomIndex]
  }
  return password
}

function getGeneratePasswords() {
  password1El.textContent = generatePasswords()
  password2El.textContent = generatePasswords()
  password3El.textContent = generatePasswords()
  password4El.textContent = generatePasswords()
}

