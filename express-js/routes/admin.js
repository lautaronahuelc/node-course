const path = require('path');

const express = require('express');

const adminRouter = express.Router();

// /admin/add-product => GET
adminRouter.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

// /admin/add-product => POST
adminRouter.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = adminRouter;