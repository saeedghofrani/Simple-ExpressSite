"use strict";

const path = require('path');

function errorHandler(response, request, next) {  
    response.status(404);
    // respond with html page
    if (request.accepts('html')) {
        return response.sendFile(path.join(__dirname, '../pages/notFound/404page.html'),
            (err) => {
                err ? next(err) : console.log('Sent:', '404page');
            });
    }
    // respond with json
    if (request.accepts('json'))
        return response.send({ error: 'Not found' });
    // default to plain-text. send()
    response.type('txt').send('Not found');
}

module.exports = errorHandler;