const express = require('express');
const router = express.Router();
const path = require('path');


router.use((req, res, next) => {
    console.log(`request was made: ${req.url}`);
    next();
});
router.get('/part1', (req, res) => {
    res.sendFile(path.join(__dirname, '../../pages/speech/index1.html'));
});
router.get('/part2', (req, res) => {
    res.sendFile(path.join(__dirname, '../../pages/speech/index2.html'));
});
router.get('/part3', (req, res) => {
    res.sendFile(path.join(__dirname, '../../pages/speech/index3.html'));
});
router.get('/part4', (req, res) => {
    res.sendFile(path.join(__dirname, '../../pages/speech/index4.html'));
});
router.get('/part5', (req, res) => {
    res.sendFile(path.join(__dirname, '../../pages/speech/index5.html'));
});


module.exports = router;