"use strict";

const express = require('express');
const router = express.Router();
const page = require('../../modules/indexExpressPages.js')

router.use((req, res, next) => {
    console.log(`request was made: ${req.url}`);
    next();
});
router.get('/part1', (req, res) => {
    return res.sendFile(page['part1'], (err) => {
        if (err) {
            errorHandler(res, req, next);
        }
    });
});
router.get('/part2', (req, res) => {
    return res.sendFile(page['part2'], (err) => {
        if (err) {
            errorHandler(res, req, next);
        }
    });
});
router.get('/part3', (req, res) => {
    return res.sendFile(page['part3'], (err) => {
        if (err) {
            errorHandler(res, req, next);
        }
    });
});
router.get('/part4', (req, res) => {
    return res.sendFile(page['part4'], (err) => {
        if (err) {
            errorHandler(res, req, next);
        }
    });
});
router.get('/part5', (req, res) => {
    return res.sendFile(page['part5'], (err) => {
        if (err) {
            errorHandler(res, req, next);
        }
    });
});

module.exports = router;