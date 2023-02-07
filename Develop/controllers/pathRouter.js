//this page makes the routing for the base url with "/"
//this is called in the ./controllers/index.js file to redirect the main page
const { Router } = require('express');
const path = require('path');

const pathRouter = new Router();

pathRouter.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

pathRouter.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'notes.html'));
});

module.exports = pathRouter;