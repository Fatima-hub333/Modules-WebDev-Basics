let searchInput = document.getElementById("searchInput")
searchInput.addEventListener('keyup', () => {
  let searchQuery = event.target.value.toLowerCase()
  let allNamesDOMCollection = document.getElementsByClassName("name")
  console.log(allNamesDOMCollection[0])
})
