const express = require('express');
const router = express.Router();
const path = require('path');
const page = require('../../modules/indexExpressPages.js')

router.use((req, res, next) => {
    console.log(`request was made: ${req.url}`);
    next();
});
router.get('/part1', (req, res) => {
    return res.sendFile(page['part1']);
});
router.get('/part2', (req, res) => {
    return res.sendFile(page['part2']);
});
router.get('/part3', (req, res) => {
    return res.sendFile(page['part3']);
});
router.get('/part4', (req, res) => {
    return res.sendFile(page['part4']);
});
router.get('/part5', (req, res) => {
    return res.sendFile(page['part5']);
});


module.exports = router;