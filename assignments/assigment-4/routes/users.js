const names = require('./home').names;

const router = (req, res, next) => {
  res.render('users', { pageTitle: 'users', names });
};

exports.router = router;