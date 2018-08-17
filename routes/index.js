var express = require('express');
var dt= require('./data');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
 // res.render('index', { title: 'Express' });
    var users=[
        {'name':'nikhhil',
          'mobno':'9272182101'
        },

        {'name':'rutwij',
            'mobno':'9272182101'
        }

    ];

    var sess=req.session;
    sess.email="jain.nikhil781@gmail.com";

 res.json(dt);
});

router.get('/session', function(req, res, next) {

    var sess=req.session;

    if(sess.email){

        res.json(sess.email);

    }
    else{

        res.json("undefined");
    }



});


module.exports = router;
