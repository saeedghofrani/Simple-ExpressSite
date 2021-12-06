const express = require('express');
const router = express.Router();
const path = require('path');
const page = require('../../modules/indexExpressPages.js')

router.use((req, res, next) => {
    console.log(`request was made: ${req.url}`);
    next();
});
router.get('/:part', (req, res, next) => {
    let url = req.params['part'];
    if (page.hasOwnProperty(url))
        res.sendFile(page[url]);
    else {
        console.log('up');
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

    }
});
//not found//
router.use((req, res) => {
    console.log('down');
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
})

module.exports = router;