const { Router } = require('express');
const fs = require("fs");
const notesRouter = new Router();

notesRouter.get('/', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./develop/db/db.json', 'utf-8'));
    res.send(notes);
  });

notesRouter.post('/', (req, res) => {
    const data = fs.readFileSync('./develop/db/db.json');
    const notes = JSON.parse(data);
    notes.push(req.body);
    console.log(notes);
    fs.writeFileSync('./develop/db/db.json', JSON.stringify(notes));
    res.sendStatus(201);
  });

notesRouter.delete('/:id', (req, res) => {

    console.log(req.params);
    res.end();
  });

module.exports = notesRouter;
