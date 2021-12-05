const express = require('express');
const router = express.Router();
const path = require('path');

router.use((req, res, next) => {
    console.log(`request was made: ${req.url}`);
    next();
});
router.get('/hello', (req, res) => {
    res.sendFile(path.join(__dirname, '../../pages/HelloWorld/page.html'));
});


module.exports = router;