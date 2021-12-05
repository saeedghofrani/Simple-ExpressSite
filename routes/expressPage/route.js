const express = require('express');
const router = express.Router();
const path = require('path');

router.use((req, res, next) => {
    console.log(`request was made: ${req.url}`);
    next();
});
router.get('/html', (req, res) => {
    res.sendFile(path.join(__dirname, '../../pages/microsoft/index.html'));
});


module.exports = router;