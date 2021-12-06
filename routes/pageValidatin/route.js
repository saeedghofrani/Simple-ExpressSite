const express = require('express');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
const jsonReader = require('../../modules/readJson.js');
const json = jsonReader(path.join(__dirname, '../../pages/validationJSON/userPass.json'), 'utf8');
const data = JSON.parse(json);
const validate = require('../../modules/userValidation.js');


router.use((req, res, next) => {
    console.log(`request was made: ${req.url}`);
    next();
});
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../../pages/loginPage/index.html'));
});
// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
router.use(bodyParser.json());

router.post('/userentry', function (req, res) {
    if (!validate(req, data)) {
        res.send('there is no user matching discription');
        return;
    }
    res.send('seccesfull');
});

module.exports = router;