# API-Test

npm init

 
Due to high volume not able to upload the node_modules packages, Instead of which i am sharing you the below code to install the packages.
For Express and Mongodb installation,
npm install --save express body-parser mongoose


GET Request

We have two options findbyid and findall,

http://localhost:1234/products/:id

http://localhost:1234/products/findall


POST Request

http://localhost:1234/products/create


Pass the below json formats in request body 
{
"id": 3,

"type": "buy",

"userId": 101,

"userName": "Beckham",

"symbol": "$$$",

"shares": 120,

"price": 130

}


Delete Request by id

http://localhost:1234/products/:id/delete


Delete all records


http://localhost:1234/products/deleteall


MONGO DB
I've used my account for connecting the database for successful responses.
Already we have 3 entries in Brokerage DB for manipulating the request and response.

Cluster Name: api01-bwqka.mongodb.net

DB Name: Brokerage

Collection Name: trades

