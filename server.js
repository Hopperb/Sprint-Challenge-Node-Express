// importing node modules 
// importing express, cors, db
const express = require('express');
const cors = require('cors');
const db = require('./data/dbConfig');

// database helpers
const action = require('./data/helpers/actionModel');
const project = require('./data/helpers/projectModel');

// server code 
const port = 5000;
const server = express();
server.use(express.json());

















server.listen(port, () => console.log(`server is running on ${port}`));