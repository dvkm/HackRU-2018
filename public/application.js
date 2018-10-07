// Reference to the recommendations object in your Firebase database
var db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
});



// Save a new recommendation to the database, using the input in the form
var submitRecommendation = function () {

    // Get input values from each of the form elements
    var title = $("#talkTitle").val();
    var presenter = $("#talkPresenter").val();
    var link = $("#talkLink").val();

    // Push a new recommendation to the database using those values
    db.collection("recommendations").add({
        "title": title,
        "presenter": presenter,
        "link": link
    })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
};

// When the window is fully loaded, call this function.
// Note: because we are attaching an event listener to a particular HTML element
// in this function, we can't do that until the HTML element in question has
// been loaded. Otherwise, we're attaching our listener to nothing, and no code
// will run when the submit button is clicked.
$(window).load(function () {

    // Find the HTML element with the id recommendationForm, and when the submit
    // event is triggered on that element, call submitRecommendation.
    $("#recommendationForm").submit(submitRecommendation);

});