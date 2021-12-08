"use strict";

const express = require('express');
const path = require('path');
const router = express.Router();
const errorHandler = require('../../modules/sendFileErrorHandler.js');

router.use((req, res, next) => {
    console.log(`request was made: ${req.url}`);
    next();
});
router.get('/firstname', function (req, res) {
    res.sendFile(path.join(__dirname, '../../pages/user/firstName.html'), (err) => {
        if (err) {
            errorHandler(res, req, next);
        }
    });
});
router.get('/job', function (req, res) {
    res.sendFile(path.join(__dirname, '../../pages/user/job.html'), (err) => {
        if (err) {
            errorHandler(res, req, next);
        }
    });
});
router.get('/lastname', function (req, res) {
    res.sendFile(path.join(__dirname, '../../pages/user/lastName.html'), (err) => {
        if (err) {
            errorHandler(res, req, next);
        }
    });
});
router.get('/pattern', function (req, res) {
    res.sendFile(path.join(__dirname, '../../pages/user/codePattern.html'), (err) => {
        if (err) {
            errorHandler(res, req, next);
        }
    });
});

module.exports = router;