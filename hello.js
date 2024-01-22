//create an Express Server. 
//The server should listen on port 3000 and log a message to the console 
//to let you know that the server is running.
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello, World!'));  
