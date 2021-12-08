"use strict";

const fs = require('fs');

let engine = (fileName, content, direction) => {
  fs.writeFile(`${direction}/${fileName}`, content, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Done');
  });
};
engine('saeed.json', `[{"saeed":"mm"},{"name":"saeed"}]`, '../modules');
module.exports = engine;
