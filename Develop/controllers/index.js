//main router template that is called in the server.js
//routers all routes are directed through this page
const { Router } = require('express');

const pathRouter = require('./pathRouter');
const apiRouter = require('./apis');
// const notesRouter = require('./apis/notes');

const allRouter = new Router();

allRouter.use('/', pathRouter);
allRouter.use('/api', apiRouter);
// allRouter.use('/notes', notesRouter);

module.exports = allRouter;
