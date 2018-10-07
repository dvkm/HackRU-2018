var express = require('express');
var router = express.Router({ mergeParams: true });

var db = firebase.firestore();
var data;
var date;

/* GET home page. */
router.get('/', function(req, res, next) {
    if ( req.params.action == "new") {
        res.render('event/create', { title: 'Express', path: req.originalUrl });
    }
    else if (req.params.action == "view") {
        if (req.params.id != "all") {
            console.log(req.params.id);
            var cityRef = db.collection('events').doc(req.params.id);
            var getDoc = cityRef.get()
                .then(doc => {
                    if (!doc.exists) {
                        console.log('No such document!');
                        res.send("error");
                    } else {
                        data = doc.data();
                        console.log('Document data:', doc.data());
                        date = new Date(data.timestamp);
                        console.log(data);

                        res.render('event/view', { name: data.name, image: "https://firebasestorage.googleapis.com/v0/b/coral-velocity-218522.appspot.com/o/images%2F" + req.params.id + "?alt=media",date: date.toDateString() + " at " + date.toLocaleTimeString(), location: data.location, description: data.description});

                        console.log(data)
                    }
                })
                .catch(err => {
                    console.log('Error getting document', err);
                });
        }
    }
});

module.exports = router;
