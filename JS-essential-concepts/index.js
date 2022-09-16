let openModal = document.getElementById("open-modal")
openModal.addEventListener("click", () => {
  document.getElementById("overlay").style.display = 'block'
})

let closeModal = document.getElementById("close-modal")
closeModal.addEventListener("click", () => {
  document.getElementById("overlay").style.display = 'none'
})