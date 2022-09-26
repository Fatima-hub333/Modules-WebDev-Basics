1. What does HTTP stand for?
HTTP stands for (HyperText Transfer Protocol)

2. How would you describe what a protocol is to a complete newbie?
Protocol is basically an agreed upon standard way of doing something

3. Which part of this URL describes the protocol?: 
https:
ftp:
Smtp (simple mail transfer protocol)

1. If you had to guess, which request method (GET, POST, PUT, DELETE) would you
think we made in the previous challenge when we asked for data from the 
JSON Placeholder API?
Get!


Path: address where your desired resources "lives"
BaseURL vs. Endpoint
BaseURL; https://apis.scrimba.com/jsonplaceholder
endpoint: /posts, /activity, /user


<!-- Quiz Start -->

1. What's the difference between a Base URL and an Endpoint?

* Base URL is the part of the URL that won't change, no matter which resource we want to get from the API.

* Endpoint specifies exactly which resource we want to get from the API.

Given the following URLs from an example API:
* https://blahblahblah.com/api/v2/users
* https://blahblahblah.com/api/v2/products
* https://blahblahblah.com/api/v2/products/123

1. Which part is the Base URL?
https://blahblahblah.com/api/v2
https://blahblahblah.com/api/v2
https://blahblahblah.com/api/v2/

3. What are the available endpoints?
users/
products/
products/<some-id-of-the-product-here>

<!-- Quiz end -->
GET: Getting data
POST: Add new data (like blog POST or Facebook POST)
PUT: updating existing data
DELETE: removing data


<!-- Methods Quiz start -->
Try to think of a time you used each of the four main methods
(GET, POST, PUT, DELETE) in the real world as you went about
your regular usage of the internet. E.g. today, I checked the
weather on my phone which probably sent a GET request to retrieve
weather information.

GET: 
Today I checked my uber ride history which probably sent GET request to retrive my rides information.

POST: 
Create new branch in my project repo

PUT: 
Share my project updates with my team in a whatsapp chat

DELETE:
I delete message which I sent to my friend on whatsapp
<!-- Methids quiz end -->

fetch("https://apis.scrimba.com/jsonplaceholder/todos", {
    method: "POST",
    body: JSON.stringify({
        title: "Buy Milk",
        completed: false
    }),
  headers: {
      "Content-Type": "application/json"
    }
})
    .then(res => res.json())
    .then(data => console.log(data))

<!-- REST -->
Representational State Transfer
REST is a design pattern to provide a standard way for clients & servers to communicate each other.

Priciples of REST
1- Client & server seperation

<!-- REST Quiz start from here -->
1. How would you describe what REST is to your non-technical friend?
A standardize way to have your computer, like your laptop, get or sent information to another computer (like a server)

2. What does a RESTful API usually return in response to incoming requests?
JSON data

3. What kind of client devices can make use of a RESTful API?
4. ALL of them


<!--  -->
stateleseness
accessing resources

<!-- Quiz -->
1. What does it mean for the server to be "Stateless"?
It forgets the interaction after the response is sent.

* In the Mike's Bikes example, what URL endpoint (and request method)
  would you expect to use in order to accomplish the following:
  
1. Retrieve a list of all the bikes that are sold?
GET /bikes

2. Retrieve detailed information about the bike with an ID of 42?
GET /bikes/42

3. Update the price of the bike with an ID of 21?
PUT /bikes/21

4. Add a new bike to the list of bikes being sold?
POST /bikes/:id

5. Remove the bike with an ID of 56 from the list of bikes?
DELETE /bikes/56

<!-- QUIZ -->
1. How is a nested resource URL like /bikes/123/reviews different from an endpoint like /reviews?
/bikes/123/reviews - return an array of reviews about that specific bike.
/reviews - return an array of all reviews on the site

2. Describe a "URL Parameter" in your own words:
Variable inside the URL that acts as a placeholder for the real value.
(Oftentimes they replace the ID of the resourcse. )

3. What URL might you use to GET the review with an ID of 5 on the bike
   with the ID of 123?
/bikes/123/reviews/5

<!-- JSON PLACEHOLDER API -->
fetch("https://apis.scrimba.com/jsonplaceholder/posts/2/comments")
  .then(res => res.json())
  .then(data => console.log(data))

<!-- Query Strings -->
Allow us to filter the results to get back./ A way to filter results. i.e
/bikes?type=mountain - this is the query stribg of Url.

<!-- Quiz -->
At Mike's Bikes, they also sell bike racks (endpoint is /bikeracks).

What would you expect the endpoints to be for the following tasks:

1. Get a list of all bike racks sold on the site?
/bikeracks

2. Get a list of all bike racks available in the physical store right now?
   (Assume a query called "available" that is a boolean true/false)
/bikeracks?available=true

3. Get a list of all "Thule"-brand bike racks that can hold 4 bikes?
   (Assume there are "brand" and "numBikes" queries)
/bikeracks?brand=thule&numBikes=4