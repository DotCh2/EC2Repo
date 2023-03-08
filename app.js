#!/usr/bin/env node

// the above line will be important when we make this an executable service
const http = require("http"); // import the http library from node
const express = require('express'); // import the express library
const app = express(); // create an instance of express
const PORT = 3000; // the port we will listen on
app.listen(PORT, () => console.log(`Listening on ${ PORT }`)); // start the server

app.use(express.json()); // support json encoded bodies

//This is just a test to see if the server is working
const listOfThings = [
	{ first:"John", last:"Doe", age:"22"},
	{ first:"Jane", last:"Doe", age:"21"},
	{ first:"John", last:"Smith", age:"23"}

] 

//Creating a GET request to get all the things in the list of things
app.get('/users', (req, res) => {
	res.json(listOfThings);
});

//Making a POST request to add a new thing to the list of things
app.post('/users', (req, res) => {
	console.log(req.body);
	listOfThings.push(req.body);
	res.json(listOfThings);
});

//Making a PUT request to update a thing in the list of things based on the first name 
//of the user
app.put('/users', (req, res) => {
	console.log(req.body);
	for (var i = 0; i < listOfThings.length; i++) {
		if (listOfThings[i].fname == req.body.fname) {
			listOfThings[i] = req.body;
		}
	}
	res.json(listOfThings);
});

//Making a DELETE request to delete a thing in the list of things based on the first name
app.delete('/users', (req, res) => {
	console.log(req.body);
	for (var i = 0; i < listOfThings.length; i++) {
		if (listOfThings[i].fname == req.body.fname) {
			listOfThings.splice(i, 1);
		}
	}

	res.json(listOfThings);
});

