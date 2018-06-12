const express = require('express');
const uid = require('uid');

const app = express();
const test_utils = require('../src/test_utils.js');
const consoleOutput = message => console.log(JSON.stringify(message), '\n');

// Default JSON content type
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Content-Type', 'application/json');
  next();
});

app.get('/curations', (req, res) => {
  const response = test_utils.n(test_utils.createCuration, 40);

  consoleOutput(response);
  res.json(response);
});

app.get('/curations/:id', (req, res) => {
  const response = test_utils.createCuration(req.params.id);
  consoleOutput(response);
  res.json(response);
});

app.get('/search/:whatever', (req, res) => {
  const response = test_utils.n(test_utils.createTrack, 10);
  consoleOutput(response);
  res.json(response);
});

app.get('/tracks/:id', (req, res) => {
  const response = test_utils.createTrack(req.params.id);
  consoleOutput(response);
  res.json(response);
});

app.listen(3001, () =>
  console.log('Music Curations API is listening on :3001')
);
