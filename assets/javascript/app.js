// Initialize Firebase
    var config = {
        apiKey: "AIzaSyDWS07PYdyLmizC55bK-AQHVmnTAu5e2vE",
        authDomain: "train-time-855af.firebaseapp.com",
        databaseURL: "https://train-time-855af.firebaseio.com",
        storageBucket: "train-time-855af.appspot.com",
        messagingSenderId: "777346639577"
        };
        firebase.initializeApp(config);

    var database = firebase.database();
        var trainName = "";
        var destination = "";
        var nextArrival = "";
        var minutesAway = "";


        //Capture user inputs and store into variables
        $("#runSearch").on("click", function() {
            trainName = $("#trainName").val().trim();
            destination = $("#destination").val().trim();
            nextArrival = $("#nextArrival").val().trim();
            minutesAway = $("#minutesAway").val().trim();

            database.ref().push({
                trainName: trainName,
                destination: destination,
                nextArrival: nextArrival,
                minutesAway: minutesAway,
                dateAdded: firebase.database.ServerValue.TIMESTAMP
            });

       
        
        });
         database.ref().on("child_added", function(childSnapshot) {
            console.log(childSnapshot.val().trainName);
            console.log(childSnapshot.val().destination);
            console.log(childSnapshot.val().nextArrival);
            console.log(childSnapshot.val().minutesAway);

        });

            // Capture Button Click
            $("#runSearch").on("click", function(event) {
            // don't refresh the page
            event.preventDefault();
            // Replaces the content in the "currentTrainSchedule" div
            $("#currentTrainSchedule").empty();

            // Output all of the new information into the Current Train Schedule section
            $("#currentTrainSchedule").append("<h1>" + trainName);
            $("#currentTrainSchedule").append("<h4>" + destination);
            $("#currentTrainSchedule").append("<h4>" + nextArrival);
            $("#currentTrainSchedule").append("<h4>" + minutesAway);

            // Clear sessionStorage
            sessionStorage.clear();

            // Store all content into sessionStorage
            sessionStorage.setItem("trainName", trainName);
            sessionStorage.setItem("destination", destination);
            sessionStorage.setItem("nextArrival", nextArrival);
            sessionStorage.setItem("minutesAway", minutesAway);
            });

            // By default display the content from sessionStorage
            $("#currentTrainSchedule").empty();
            $("#currentTrainSchedule").append("<h2>" + sessionStorage.getItem("trainName"));
            $("#currentTrainSchedule").append("<h4>" + sessionStorage.getItem("destination"));
            $("#currentTrainSchedule").append("<h4>" + sessionStorage.getItem("nextArrival"));
            $("#currentTrainSchedule").append("<h4>" + sessionStorage.getItem("minutesAway"));
