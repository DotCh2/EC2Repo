#!/usr/bin/env node

// the above line will be important when we make this an executable service
const http = require("http"); // import the http library from node
const listOfThings = [] //Intilizing a globlal array

//a function that converts a string 'key=value&key2=value2'into and object
const parseData = (query) => Object.fromEntries(query.split("&").map(
	(q) => q.split("=")))

// request handler - I have no idea why I named it backward. Stage fright?
const handlerRequest = (req, res) => {
	res.writeHead(200, {
		"Content-Type": "application/json",


	})
	
	//This is accepting a POST request
	if(req.method === "POST") {
		let body = ""
	req.on("data", (data) => {
		body += data
	})
	req.on("end", () => {
		const parsed = parseData(body)
		listOfThings.push(parseData(body));
		res.write(JSON.stringify(parsed))
		res.end()
	})
	//This is a put request
	} else if(req.method === "PUT") {
		let body = ""
	req.on("data", (data) => {
		body += data
	}) }else if(req.method === "DELETE") {
		let body = ""
	req.on("data", (data) => {
		body += data
	})
	} else { // assuming it's a GET request
		res.write(JSON.stringify(listOfThings))
		res.end()
	}
}

// create the server and provide it the handler
const server = http.createServer(handlerRequest);
// instruct it to listen on TCP port 3000
server.listen(3000);
