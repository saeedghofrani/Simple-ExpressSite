const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const fs = require('fs');
const jsonData = require('../../../modules/prettyJson.js')
// const data = require(path.join(__dirname, '../../pages/userJSON/users.json'));
// let data = fs.readFileSync(path.join(__dirname, '../../../pages/userJSON/users.json'));
var data = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../pages/userJSON/users.json'), 'utf8'));



router.use((req, res, next) => {
    console.log(`request was made: ${req.url}`);
    next();
});
router.get('/getAll%20User', function (req, res) {
    res.write(jsonData(data));
    res.end();
});


module.exports = router;