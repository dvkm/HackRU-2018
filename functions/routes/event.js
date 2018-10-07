var express = require('express');
var router = express.Router({ mergeParams: true });

const functions = require('firebase-functions');
const admin = require('firebase-admin');

const config = functions.config().firebase;
const firebase = admin.initializeApp(config);

var db = admin.firestore();

/* GET home page. */
router.get('/', function(req, res, next) {
    if ( req.params.action == "new") {
        res.render('event/create', { title: 'Express', path: req.originalUrl });
    }
    else if (req.params.action == "view") {
        if (req.params.id != "all") {
            var cityRef = db.collection('events').doc(req.params.id);
            var getDoc = cityRef.get()
                .then(doc => {
                    if (!doc.exists) {
                        console.log('No such document!');
                    } else {
                        console.log('Document data:', doc.data());
                    }
                })
                .catch(err => {
                    console.log('Error getting document', err);
                });

            res.render('event/view', { title: 'Express', path: req.originalUrl });
            console.log("out");
            console.log(req.params);
        }
    }
});

module.exports = router;
