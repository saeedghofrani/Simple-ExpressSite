'use strict';

function validate(req, source) {
    let user = source.find(obj => obj.username === String(req.body.username));
    return (!user) ? false : (user.password !== req.body.password) ? false : true;
}

module.exports = validate;