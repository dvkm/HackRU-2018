var express = require('express');
var router = express.Router({ mergeParams: true });

var db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
});
var data;
var date;

/* GET home page. */
router.get('/', function(req, res, next) {
    if ( req.params.action == "new") {
        res.render('event/create', { title: 'Express', path: req.originalUrl });
    }
    else if (req.params.action == "view") {
        if (req.params.id != "all") {
            if (req.params.detail == "detail") {

                console.log(req.params.id);
                var cityRef = db.collection('events').doc(req.params.id);
                var getDoc = cityRef.get()
                    .then(doc => {
                        if (!doc.exists) {
                            console.log('No such document!');
                        } else {
                            data = doc.data();
                            // console.log('Document data:', doc.data());
                            date = new Date(data.timestamp);
                            // console.log(data);
                            console.log("event/detail");
                            res.render('event/detail', { name: data.name, image: "https://firebasestorage.googleapis.com/v0/b/coral-velocity-218522.appspot.com/o/images%2F" + req.params.id + "?alt=media",date: date.toDateString() + " at " + date.toLocaleTimeString(), location: data.location, description: data.description});
                            console.log("event/detail");

                            // console.log(data)
                        }
                    })
                    .catch(err => {
                        console.log('Error getting document', err);
                    });
            } else {
                console.log(req.params.id);
                var cityRef = db.collection('events').doc(req.params.id);
                var getDoc = cityRef.get()
                    .then(doc => {
                        if (!doc.exists) {
                            console.log('No such document!');
                            // res.send("error");
                        } else {
                            data = doc.data();
                            console.log('Document data:', doc.data());
                            date = new Date(data.timestamp);
                            console.log(data);

                            console.log("event/view");
                            res.render('event/view', { name: data.name, image: "https://firebasestorage.googleapis.com/v0/b/coral-velocity-218522.appspot.com/o/images%2F" + req.params.id + "?alt=media",date: date.toDateString() + " at " + date.toLocaleTimeString(), location: data.location, description: data.description, detail: req.params.id + "/detail"});
                            console.log("event/view");
                            console.log(data.docs);
                        }
                    })
                    .catch(err => {
                        console.log('Error getting document', err);
                    });
            }
        } else { // list all
            var citiesRef = db.collection('events');
            var allCities = citiesRef.get()
                .then(snapshot => {
                    console.log(snapshot);
                    var dat = [];
                    snapshot.forEach(doc => {
                        console.log(doc.id, '=>', doc.data());
                        data = doc.data();
                        date = new Date(data.timestamp);
                        dat.push({
                            name: data.name,
                            image: "https://firebasestorage.googleapis.com/v0/b/coral-velocity-218522.appspot.com/o/images%2F" + doc.id + "?alt=media",
                            date: date.toDateString() + " at " + date.toLocaleTimeString(),
                            location: data.location,
                            description: data.description,
                            detail: "/event/view/" + doc.id + "/detail"
                        });
                        // res.render('event/view', { name: data.name, image: "https://firebasestorage.googleapis.com/v0/b/coral-velocity-218522.appspot.com/o/images%2F" + req.params.id + "?alt=media",date: date.toDateString() + " at " + date.toLocaleTimeString(), location: data.location, description: data.description, detail: req.params.id + "/detail"});
                    });
                    console.log("event/all");
                    res.render('event/all', {data: dat});
                    console.log("event/all");

                })
                .catch(err => {
                    console.log('Error getting documents', err);
                });
        }
    }
});

module.exports = router;
