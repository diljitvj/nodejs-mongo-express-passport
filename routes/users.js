var express = require('express');
var router = express.Router();

//Register
router.get('/register', function(req, res){
    res.render('register');
});


router.get('/login', function(req, res){
    res.render('login');
});

router.post('/register', function(req, res){
    var name = req.body.name;
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var password2 = req.body.password2;

    req.checkBody('name', 'Name is required').notEmpty();
    var errors = req.getValidationResult();
    console.log(errors);
    if(errors){
        console.log('Yes');
    } else {
        console.log('No');
    }
});

module.exports = router;