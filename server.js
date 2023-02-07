const express = require('express');

const mainRouter = require('./Develop/controllers');

const app = express();

const PORT = process.env.PORT || 8080;


app.use(express.json());  
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./Develop/public'));

//bring in the mainRouter from ./Develop/controllers/index.js
app.use(mainRouter);

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});