"use strict";

const express = require('express');
const router = express.Router();
const path = require('path');
const jsonReader = require('../../modules/readJson.js');
const validate = require('../../modules/userValidation.js');
const errorHandler = require('../../modules/sendFileErrorHandler.js');

const json = jsonReader(path.join(__dirname, '../../pages/validationJSON/userPass.json'), 'utf8');
const data = JSON.parse(json);

router.use(express.urlencoded({ extended: false }));
router.use(express.json());

router.use((req, res, next) => {
    console.log(`request was made: ${req.url}`);
    next();
});
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../../pages/loginPage/index.html'), (err) => {
        if (err) {
            errorHandler(res, req, next);
        }
    });
});
router.post('/userentry', function (req, res) {
    if (!validate(req, data)) {
        res.sendFile(path.join(__dirname, '../../pages/validationResponse/wrongUserPass.html'), (err) => {
            if (err) {
                errorHandler(res, req, next);
            }
        });
        return;
    }
    // let user = data.find(obj => obj.username === req.body.username);
    // res.send(`<h1>SECCESFULL</h1>
    // ${JSON.stringify(user)}`);
    res.sendFile(path.join(__dirname, '../../pages/validationResponse/userExist.html'), (err) => {
        if (err) {
            errorHandler(res, req, next);
        }
    });
});

module.exports = router;