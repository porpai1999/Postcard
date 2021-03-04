const express = require('express');
const app = express();
const bodyPaser = require('body-parser');
const cors = require('cors');
app.use(cors());

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', '.');

app.use(express.static('.'));
app.use(bodyPaser.json());

app.get('/', (req, res) => {
    res.send({message: "Welcome to Scoop" });
});


module.exports = app;
