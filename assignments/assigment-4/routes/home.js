const express = require('express');

const router = express.Router();

const names = [];

router.get('/', (req, res, next) => {
  res.render('home', { pageTitle: 'Home' });
});

router.post('/', (req, res, next) => {
  names.push(req.body.name);
  console.log('names:', names)
  res.render('confirmation', { pageTitle: 'Home' });
});

exports.router = router;
exports.names = names;