const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const fs = require('fs');
const bodyParser = require('body-parser');
// const jsonData = require('../../../modules/prettyJson.js')
// // const data = require(path.join(__dirname, '../../pages/userJSON/users.json'));
// // let data = fs.readFileSync(path.join(__dirname, '../../../pages/userJSON/users.json'));

var data = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../pages/userJSON/users.json'), 'utf8'));
// console.log(data);
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.use((req, res, next) => {
    console.log(`request was made: ${req.url}`);
    next();
});
// router.post('/getUser', urlencodedParser, function (req, res) {
//     console.log(urlencodedParser);
//     console.log(req.body);
//     response = {
//         first_name: req.body.first_name,
//         last_name: req.body.last_name
//     };
//     console.log(response);
//     res.end(JSON.stringify(response));
// });


// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
router.use(bodyParser.json());

router.use('/getUser', function (req, res) {
    // res.setHeader('Content-Type', 'application/json');
    // let x = JSON.parse(req.body);
    // console.log(data);
    let user = data.find(obj => obj.username === req.body.username);
    //   console.log(req.body);
    if (!user) {
        res.write('there is no user by this username');
        res.end();
        return;
    }
    res.write('you posted:\n');
    res.write(`User data: ${JSON.stringify(user)}`);
    res.end();
    //   console.log(urlencodedParser);
    //   console.log(req.body);
    // res.end(respon);
});


module.exports = router;