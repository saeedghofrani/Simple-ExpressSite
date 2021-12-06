'use strict';

function validate(req, source) {
    let inp_username = req.body.username;
    let inp_password = req.body.password;
    let user = source.find(obj => obj.username === String(inp_username));
    let pass = source.find(obj => obj.password === String(inp_password));
    if (!user || !pass) {
        return false;
    }
    else {
        return true;
    }
}

module.exports = validate;