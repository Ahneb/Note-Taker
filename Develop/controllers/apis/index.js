const { Router } = require('express');

const notesRouter = require('./notes');

const apiRouter = new Router();

apiRouter.use('/notes', notesRouter);

module.exports = apiRouter;
