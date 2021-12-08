"use strict";


const express = require('express');
const router = express.Router();
const path = require('path');
const jsonReader = require('../../modules/readJson.js');
const json = jsonReader(path.join(__dirname, '../../pages/validationJSON/userPass.json'), 'utf8');
const data = JSON.parse(json);
const validate = require('../../modules/userValidation.js');
const errorHandler = require('../../modules/sendFileErrorHandler.js');

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
// parse application/x-www-form-urlencoded
router.use(express.urlencoded({ extended: false }));
// parse application/json
router.use(express.json());

router.post('/userentry', function (req, res) {
    if (!validate(req, data)) {
        res.sendFile(path.join(__dirname, '../../pages/validationResponse/wrongUserPass.html'), (err) => {
            if (err) {
                errorHandler(res, req, next);
            }
        });
        return;
    }
    res.sendFile(path.join(__dirname, '../../pages/validationResponse/userExist.html'), (err) => {
        if (err) {
            errorHandler(res, req, next);
        }
    });
});

module.exports = router;