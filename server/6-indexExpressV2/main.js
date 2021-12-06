const express = require('express');
const app = express();
const pageHeader = require('../../modules/pageHeader.js');
const path = require('path');
const router = require('../../routes/indexExpressV2/route.js');

//public//
app.use(express.static(path.join(__dirname, '../../public')));
//router//
app.use('/', router);
//not found will be handled by router//
app.listen(pageHeader.port, (err) => {
    err ? console.log(err) : console.log(`server listening at http://localhost:${pageHeader.port}`);
});