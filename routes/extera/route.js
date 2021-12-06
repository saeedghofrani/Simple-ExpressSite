const express = require('express');
const router = express.Router();
const path = require('path');
let page = require('../../modules/moviePage.js');


router.use((req, res, next) => {
    console.log(`request was made: ${req.url}`);
    next();
});
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../pages/shop/main.html'));
});
router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../../pages/shop/about.html'));
});
router.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../../pages/shop/contact.html'));
});
router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../../pages/shop/home.html'));
});
router.post('/thanks', (req, res) => {
    res.sendFile(path.join(__dirname, '../../pages/shop/thanks.html'));
});
router.get('/:movie', (req, res) => {
    let url = req.params['movie'];
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


module.exports = router;