const express = require('express');

const app = express();

app.use('user', (req, res, next) => {
  console.log('First middleware 🚩');
  res.send('<h1>User Page</h1>');
});

app.use('/', (req, res, next) => {
  console.log('Second middleware 🚩🚩');
  res.send('<h1>Home Page</h1>')
});

app.listen(3000);