'use strict';

const express = require('express');
const router = express.Router();
const path = require('path');
const errorHandler = require('../../modules/sendFileErrorHandler.js');

router.use((req, res, next) => {
    console.log(`request was made: ${req.url}`);
    next();
});
router.get('/html', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../../pages/microsoft/index.html'), (err) => {
        if (err) {
            errorHandler(res, req, next);
        }
    });
});




module.exports = router;