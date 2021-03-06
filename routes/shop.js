const path = require('path');

const express = require('express');
const rootDir = require('../util/path');

const productsData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) =>{
    // console.log('Users');
    // res.sendFile(path.join(rootDir,'views', 'shop.html'));
    const products = productsData.products;
    res.render('shop', {productList : products, pageTitle : 'Shope List | AJ'});
});

module.exports = router;