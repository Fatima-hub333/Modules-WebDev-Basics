let searchInput = document.getElementById("searchInput")
searchInput.addEventListener('keyup', () => {
  let searchQuery = event.target.value.toLowerCase()
  let allNamesDOMCollection = document.getElementsByClassName("name")
  
  for (let counter = 0; counter < allNamesDOMCollection.length; counter ++) {
    const currentName = allNamesDOMCollection[counter].textContent.toLocaleLowerCase()
    if (currentName.includes(searchQuery)) {
      allNamesDOMCollection[counter].style.display = "block"
    } else {
      allNamesDOMCollection[counter].style.display = "none"
    }
  }
})
