"use strict";

const express = require('express');
const router = express.Router();
const path = require('path');
let page = require('../../modules/moviePage.js');
const errorHandler = require('../../modules/sendFileErrorHandler.js')


router.use((req, res, next) => {
    console.log(`request was made: ${req.url}`);
    next();
});
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../pages/shop/main.html'), (err) => {
        if (err) {
            errorHandler(res, req, next);
        }
    });
});
router.get('/about', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../../pages/shop/about.html'), (err) => {
        if (err) {
            errorHandler(res, req, next);
        }
    });
});
router.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../../pages/shop/contact.html'), (err) => {
        if (err) {
            errorHandler(res, req, next);
        }
    });
});
router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../../pages/shop/home.html'), (err) => {
        if (err) {
            errorHandler(res, req, next);
        }
    });
});
router.post('/thanks', (req, res) => {
    res.sendFile(path.join(__dirname, '../../pages/shop/thanks.html'), (err) => {
        if (err) {
            errorHandler(res, req, next);
        }
    });
});
router.get('/:movie', (req, res, next) => {
    let url = req.params['movie'];
    if (page.hasOwnProperty(url))
        res.sendFile(page[url]);
    else {
        errorHandler(res, req, next);
    }
});


module.exports = router;