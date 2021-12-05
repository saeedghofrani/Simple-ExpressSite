const express = require('express');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');


router.use((req, res, next) => {
    console.log(`request was made: ${req.url}`);
    next();
});
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../../pages/loginPage/index.html'));
});

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
router.use(bodyParser.json());

router.post('/userentry', function (req, res) {
    // res.setHeader('Content-Type', 'text/plain');
    // console.log('ssss');
    // //   console.log(key);
    // console.log(req.body);
    // console.log(JSON.stringify(req.body));
    // res.write('you posted:\n');
    // //   console.log(urlencodedParser);
    // // //   console.log(req.body);
    // // res.end(respon);
    // Insert Login Code Here
    let data = fs.readFileSync(path.join(__dirname, '../../pages/validationJSON/userPass.json'));
    var mydata = JSON.parse(data);
    let inp_username = req.body.username;
    let inp_password = req.body.password;
    let user = mydata.find(obj => obj.username === String(inp_username));
    let pass = mydata.find(obj => obj.password === String(inp_password));
    if (!user || !pass) {
        res.send('there is no user matching discription');
        return;
    }
    res.send('seccesfull');
    // for (const i of mydata) {

    // }
    // validation(username, password);
    // res.send(`Username: ${username} Password: ${password}`);
});

function validation(username, password) {

}



module.exports = router;