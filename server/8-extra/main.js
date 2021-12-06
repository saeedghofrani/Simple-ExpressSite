const express = require('express');
const app = express();
const pageHeader = require('../../modules/pageHeader.js');
const path = require('path');
const router = require('../../routes/extera/route.js');

//public//
app.use(express.static(path.join(__dirname, '../../public')));
//router//
app.use('/ester', router);

//notFound//
app.use((req, res, next) => {
    res.status(404);
    // respond with html page
    if (req.accepts('html')) {
        return res.sendFile(path.join(__dirname, '../../pages/notFound/404page.html'),
            (err) => {
                err ? next(err) : console.log('Sent:', '404page');
            });
    }
    // respond with json
    if (req.accepts('json'))
        return res.send({ error: 'Not found' });
    // default to plain-text. send()
    res.type('txt').send('Not found');
});

app.listen(pageHeader.port, (err) => {
    err ? console.log(err) : console.log(`server listening at http://localhost:${pageHeader.port}`);
});