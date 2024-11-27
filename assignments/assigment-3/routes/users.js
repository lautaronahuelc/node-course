const express = require('express');
const path = require('path');

const rootDir = require('../util/rootDir');

const usersRouter = express.Router();

usersRouter.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'users.html'));
});

module.exports = usersRouter;