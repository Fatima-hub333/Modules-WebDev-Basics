/**
 Challenge:
 
 GET a list of blog posts from the JSON Placeholder API.
 
 BaseURL: https://apis.scrimba.com/jsonplaceholder/
 Endpoint: /posts
 
 Since there's so many posts, let's limit the array to just 5 items.
 You can use the `.slice()` array method to just grab the first 5 objects
 from the data array that comes back from the API
 */

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then(response => response.json())
  .then(data => {
    const postsArray = data.slice(0, 5)
    let html = ""
    for (let post of postsArray) {
      html += `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <hr />
        `
    }
    document.getElementById("blog-list").innerHTML = html
  })