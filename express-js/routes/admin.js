const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const adminRouter = express.Router();

// /admin/add-product => GET
adminRouter.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product => POST
adminRouter.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = adminRouter;