var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("path: " + req.originalUrl);
    console.log(req.signedCookies.user);
    if (req.originalUrl == "/%3Curl-to-redirect-to-on-success%3E") {
        res.render('index', { title: 'Express', path: "flag is picoCTF{hleloeleoeoeo}" });
    } else {
        res.render('index', { title: 'Express', path: req.originalUrl });
    }
});

module.exports = router;
