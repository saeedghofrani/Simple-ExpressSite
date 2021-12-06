const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const fs = require('fs');
const bodyParser = require('body-parser');
const jsonreader = require('../../../modules/readJson.js');

//json file//
const json = jsonreader(path.join(__dirname, '../../../pages/userJSON/users.json'), 'utf8');


router.use((req, res, next) => {
    console.log(`request was made: ${req.url}`);
    next();
});

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
router.use(bodyParser.json());

router.use('/getUser', function (req, res) {
    const data = JSON.parse(json);
    let user = data.find(obj => obj.username === req.body.username);
    if (!user) {
        res.write('there is no user by this username');
        res.end();
        return;
    }
    res.write(`User data: ${JSON.stringify(user)}`);
    res.end();
});


module.exports = router;