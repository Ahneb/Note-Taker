const { Router } = require('express');
const fs = require("fs");
const notesRouter = new Router();

notesRouter.get('/', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./Develop/db/db.json', 'utf-8'));
    res.send(notes);
  });

notesRouter.post('/', (req, res) => {
    const data = fs.readFileSync('./Develop/db/db.json');
    const notes = JSON.parse(data);
    notes.push(req.body);
    console.log(notes);
    fs.writeFileSync('./Develop/db/db.json', JSON.stringify(notes));
    res.sendStatus(201);
  });

notesRouter.delete('/:id', (req, res) => {
    const id = req.params.id;
    let notes = JSON.parse(fs.readFileSync('./Develop/db/db.json', 'utf8'));

    notes = notes.filter(note => note.id !== id);

    fs.writeFileSync('./Develop/db/db.json', JSON.stringify(notes));
    res.end();
  });

module.exports = notesRouter;
