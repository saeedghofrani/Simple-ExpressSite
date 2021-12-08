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

module.exports = engine;

// try {
//   if (!fs.existsSync('/Users/joe/test')) {
//     fs.mkdirSync('/Users/joe/test');
//   }
// } catch (err) {
//   console.error(err);
// }
