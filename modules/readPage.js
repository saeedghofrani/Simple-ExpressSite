"use strict";
const fs = require('fs');
//read page function with path//
function readPage(path) {
    const data = fs.readFileSync(path, { encoding: 'utf-8' });
    return data;
}
module.exports = readPage;