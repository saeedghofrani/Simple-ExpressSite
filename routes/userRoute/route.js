const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.use((req, res, next) => {
    console.log(`request was made: ${req.url}`);
    next();
});
router.get('/firstname', function (req, res) {
    res.sendFile(path.join(__dirname, '../../pages/user/firstName.html'));
});
router.get('/job', function (req, res) {
    res.sendFile(path.join(__dirname, '../../pages/user/job.html'));
});
router.get('/lastname', function (req, res) {
    res.sendFile(path.join(__dirname, '../../pages/user/lastName.html'));
});
router.get('/pattern', function (req, res) {
    res.sendFile(path.join(__dirname, '../../pages/user/codePattern.html'));
});

module.exports = router;