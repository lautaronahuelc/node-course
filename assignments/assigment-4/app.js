const bodyParser = require('body-parser');
const express = require('express');

const home = require('./routes/home');
const users = require('./routes/users');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/users', users.router);

app.use(home.router);

app.listen(3000);
