const path = require('path');

const express = require('express');
const adminParser = require('./routes/admin');
const shopParser = require('./routes/shop');

const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminParser.router);
app.use(shopParser);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,'views', '404-error.html'));
});

app.listen(3000);