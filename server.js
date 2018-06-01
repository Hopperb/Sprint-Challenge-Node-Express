// importing node modules 
// importing express, cors, db
const express = require('express');
const cors = require('cors');
const db = require('./data/dbConfig');

// database helpers
const action = require('./data/helpers/actionModel');
const project = require('./data/helpers/projectModel');
const map = require('./data/helpers/mappers');

// server code 
const port = 5000;
const server = express();
server.use(express.json());


// GET REQUEST 
// =============Project===================
server.get('/api/project/', (req, res) => {
    project
    .get()
    .then(data => res.json(data))
    .catch(err => {res.json(err)})
})
// by ID
server.get('/api/project/:id', (req, res) => {
    const {id} = req.params
    project
    .get(id)
    .then(data => res.json(data))
    .catch(err => {res.json(err)})
})
// ==========================================

// ==============Action=====================
server.get('/api/action/', (req, res) => {
    action
    .get()
    .then(data => res.json(data))
    .catch(err => {res.json(err)})
})
// by ID
server.get('/api/action/:id', (req, res) => {
    const {id} = req.params
    action
    .get(id)
    .then(data => res.json(data))
    .catch(err => {res.json(err)})
})
// ==============================================













server.listen(port, () => console.log(`server is running on ${port}`));