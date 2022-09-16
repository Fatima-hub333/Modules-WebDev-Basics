let searchInput = document.getElementById("searchInput")
searchInput.addEventListener('keyup', () => {
  let searchQuery = event.target.value.toLowerCase()
  console.log(searchQuery)
})