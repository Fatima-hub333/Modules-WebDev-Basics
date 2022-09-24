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