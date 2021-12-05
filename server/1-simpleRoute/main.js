const express = require('express');
const app = express();
const pageHeader = require('../../modules/pageHeader.js');
const path = require('path');
const router = require('../../routes/simpleRoute/route.js');

app.use(express.static(path.join(__dirname, '../../public')));
app.use('/', router);

app.use(function (req, res, next) {
    res.status(404);
    // respond with html page
    if (req.accepts('html')) {
        res.send(`404 \n couldnt find  ${req.url}`);
        return;
    }
    // respond with json
    if (req.accepts('json')) {
        res.send({ error: 'Not found' });
        return;
    }
    // default to plain-text. send()
    res.type('txt').send('Not found');
});

app.listen(pageHeader.port , () => {
    console.log(`server listening at http://localhost:${pageHeader.port}`);
});