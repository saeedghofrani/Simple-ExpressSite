const express = require('express');
const path = require('path');
const router = express.Router();
const jsonData = require('../../../modules/prettyJson.js');
const jsonreader = require('../../../modules/readJson.js');

//json file//
const json = jsonreader(path.join(__dirname, '../../../pages/userJSON/users.json'), 'utf8');

router.use((req, res, next) => {
    console.log(`request was made: ${req.url}`);
    next();
});
router.get('/getAll%20User', function (req, res) {
    const data = JSON.parse(json);
    res.write(jsonData(data));
    res.end();
});


module.exports = router;