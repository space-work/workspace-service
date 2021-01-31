const express = require('express');
const app = express();
const bodyParser = require ('body-parser');
const cors = require('cors');
const { retrieve } = require('./db/index.js')
require('dotenv').config()

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/workspace-api/workspace/:id', function (req, res) {
  if (!req.params.id) { res.status(400).json("No ID given") }
  retrieve({ id: req.params.id })
    .then(repo =>  {
      if (repo.length === 0) { res.status(400).json("ID not found") }
      else { res.json(repo) }
    });
})

app.get('/workspace-api/workspaces', function (req, res) {
  retrieve({}) 
    .then(repos => {
      res.json(repos);
    });
});

app.get('/favicon.ico', (req, res) => res.end());

module.exports = app;