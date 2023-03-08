#!/usr/bin/env node

// the above line will be important when we make this an executable service
const http = require("http"); // import the http library from node
const express = require('express'); // import the express librar
const bodyParser = require('body-parser')//This body parser is needed 
//to help turn form data into objects.
const app = express(); // create an instance of express
const PORT = 3000; // the port we will listen on
app.listen(PORT, () => console.log(`Listening on ${ PORT }`)); // start the server

//This is middleware to parse the request body, essentially the from data
app.use(bodyParser.urlencoded({ extended: true }));

//This is just a test to see if the server is working
const listOfThings = [
] 


//Creating a GET request to get all the things in the list of things
app.get('/api', (req, res) => {
	res.json(listOfThings);
});

//Making a POST request to add a new thing to the list of things
app.post('/api', (req, res) => {
	const {first, last, age} = req.body;
	user = {first, last, age};
	listOfThings.push(user)
	res.json(listOfThings);
});

//Making a PUT request to update a thing in the list of things based on the first name 
//of the user
app.put('/api', (req, res) => {
	console.log(req.body);
	for (var i = 0; i < listOfThings.length; i++) {
		if (listOfThings[i].fname == req.body.fname) {
			listOfThings[i] = req.body;
		}
	}
	res.json(listOfThings);
});

//Making a DELETE request to delete a thing in the list of things based on the first name
app.delete('/api', (req, res) => {
	console.log(req.body);
	for (var i = 0; i < listOfThings.length; i++) {
		if (listOfThings[i].fname == req.body.fname) {
			listOfThings.splice(i, 1)
		}
	}

	res.json(listOfThings);
});;
