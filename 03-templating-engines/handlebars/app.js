const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const app = express();

app.engine('hbs', expressHbs());
app.set('view engine', 'hbs');
app.set('views', 'views');

const admin = require('./routes/admin');
const shop = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', admin.router);
app.use(shop.router);

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page not found' });
});

app.listen(3000);
