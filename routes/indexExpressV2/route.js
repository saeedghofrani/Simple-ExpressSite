const express = require('express');
const router = express.Router();
const path = require('path');

let page = {
    'part1': path.join(__dirname, '../../pages/speech/index1.html'),
    'part2': path.join(__dirname, '../../pages/speech/index2.html'),
    'part3': path.join(__dirname, '../../pages/speech/index3.html'),
    'part4': path.join(__dirname, '../../pages/speech/index4.html'),
    'part5': path.join(__dirname, '../../pages/speech/index5.html'),
};

router.use((req, res, next) => {
    console.log(`request was made: ${req.url}`);
    next();
});
router.get('/:part', (req, res) => {
    let url = req.params['part'];
    if (page.hasOwnProperty(url))
        res.sendFile(page[url]);
    else
        res.send(`404 \n couldnt find  ${req.url}`);
});

module.exports = router;