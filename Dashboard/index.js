const author = document.getElementById("author")

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