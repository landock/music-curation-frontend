const express = require('express');
const uid = require('uid');

const app = express();
const test_utils = require('../src/test_utils.js');

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
  res.json(test_utils.n(test_utils.createCuration, 40));
});

app.get('/curations/:id', (req, res) => {
  res.json(test_utils.createCuration(req.params.id));
});

app.get('/search/:whatever', (req, res) => {
  res.json(test_utils.n(test_utils.createTrack, 8));
});

app.get('/tracks/:id', (req, res) => {
  res.json(test_utils.createTrack(req.params.id));
});

app.listen(3001, () =>
  console.log('Music Curations API is listening on :3001')
);
