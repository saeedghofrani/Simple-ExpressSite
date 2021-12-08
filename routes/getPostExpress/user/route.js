const express = require('express');
const path = require('path');
const router = express.Router();
const jsonreader = require('../../../modules/readJson.js');

//json file//
const json = jsonreader(path.join(__dirname, '../../../pages/userJSON/users.json'), 'utf8');

router.use((req, res, next) => {
    console.log(`request was made: ${req.url}`);
    next();
});

router.use(express.json());
router.use(express.urlencoded({ extended: false }));
router.use(express.raw());
router.use(express.text());

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