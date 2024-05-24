const express = require('express');

const shopRouter = express.Router();

shopRouter.get('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});

module.exports = shopRouter;