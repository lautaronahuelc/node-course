const express = require('express');
const path = require('path');

const admin = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = admin.products;
  res.render('shop', { products, pageTitle: 'My shop', path: '/' });
});

exports.router = router;