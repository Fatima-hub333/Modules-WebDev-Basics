fetch("https://apis.scrimba.com/jsonplaceholder/todos", {method: "GET"})
  .then(response => response.json())
  .then(data => console.log(data))