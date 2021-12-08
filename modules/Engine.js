"use strict";

const fs = require('fs');

const engine = (fileName, content, direction) => {
  fs.writeFile(`${direction}/${fileName}`, content, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Done');
  });
};

module.exports = engine;
