"use strict";

const express = require('express');
const router = express.Router();
const page = require('../../modules/indexExpressPages.js')
const errorHandler = require('../../modules/sendFileErrorHandler.js');

router.use((req, res, next) => {
    console.log(`request was made: ${req.url}`);
    next();
});
router.get('/:part', (req, res, next) => {
    let url = req.params['part'];
    if (page.hasOwnProperty(url))
        res.sendFile(page[url]);
    else {
        errorHandler(res, req, next);
    }
});
//not found//
router.use((req, res, next) => {
    errorHandler(res, req, next);
})

module.exports = router;