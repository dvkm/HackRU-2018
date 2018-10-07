var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("path: " + req.originalUrl);
    console.log(req.signedCookies.user);
    res.render('home', { title: 'Express', path: req.originalUrl });
});

module.exports = router;
