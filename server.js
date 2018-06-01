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

// Customize Middleware 
server.use(function(err, req, res, next){
    console.log(err.stack)
    res.status(500).json("something is wrong ")
})

// GET REQUEST 
// =============Project===================
server.get('/api/project/', (req, res) => {
    project
    .get()
    .then(data => res.status(200).json(data))
    .catch(err => {res.status(500).json(err)})
})
// by ID
server.get('/api/project/:id', (req, res) => {
    const {id} = req.params;
    project
    .get(id)
    .then(data =>  res.status(200).json(data))
    .catch(err => {res.status(500).json(err)})
})
// ==========================================

// ==============Action=====================
server.get('/api/action/', (req, res) => {
    action
    .get()
    .then(data =>  res.status(200).json(data))
    .catch(err => {res.status(500).json(err)})
})
// by ID
server.get('/api/action/:id', (req, res) => {
    const {id} = req.params;
    action
    .get(id)
    .then(data =>  res.status(200).json(data))
    .catch(err => {res.json(err)})
})
// ==============================================

// POST REQUEST 
// ===================PROJECT===================
server.post('/api/project', (req, res) => {
    console.log(req, res)
    const {description, notes} = req.body;
    if(!description || !notes){
        res.status(404).json(`{error: "Please provide description and content"}`).end();
    } else {
        project
        .insert({description, notes})
        .then(data => {res.status(200),json(data)})
        .catch(error =>{res.status(500).json(err)})
    }
})
// ============================================================

// UPDATE REQUEST 
// =============== PROJECT ================
server.put('/api/project/:id', (req, res) => {
    const id = req.params.id;
    const content = {description: req.body.description, notes: req.body.notes}
    project.update(id, content).then(data => {
        if(!content){
            return res.status(404).json({error: "Please provide correct id, this one does not exist"})
        }
        if(!req.body.hasOwnProperty('description') || !req.body.hasOwnProperty('notes')){
            return res.status(404).json({error: "please provide description and content"})
        }
        res.status(200).json(content)
    })
    .catch(error => {
        res.status(500).json({error: "the information could not be modified"})
    })
})








server.listen(port, () => console.log(`server is running on ${port}`));