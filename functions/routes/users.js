var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log("path: " + req.originalUrl);
  res.render('signin', { title: "sign in" });
});

module.exports = router;
