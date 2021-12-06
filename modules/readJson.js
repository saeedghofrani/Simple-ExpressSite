'use strict';

const fs = require('fs');
const path = require('path');
try {
    let json = (JSONpath, encoding) => {
        let data = fs.readFileSync(JSONpath, encoding); 
        return data;
    }
    module.exports = json;
} catch (error) {
    console.log(`error happened during reading JSON ERROR: ${error}`);
}
