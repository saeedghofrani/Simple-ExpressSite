'use strict';

function engine() {
    let content = '[]';
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'object') {
            for (let j = 0; j < 100; j++) {
                content += `{
                    "${arguments[i][0]}":""
                }`;
            }
        }
        else {
            console.log('arguments should be object');
        }
    }
    console.log(arguments);
};
engine({ "username": "password" }, { "password": "password" });
let x = `${Math.floor(Math.random() * 1000000000)}`;
console.log(x);
module.exports = engine;