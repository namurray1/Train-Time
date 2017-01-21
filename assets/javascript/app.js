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
        var name = "";
        var role = "";
        var startDate = "";
        var hourlyRate = "";


        //Capture user inputs and store into variables
        $("#runSearch").on("click", function() {
            name = $("#name").val().trim();
            role = $("#role").val().trim();
            startDate = $("#startDate").val().trim();
            hourlyRate = $("#hourlyRate").val().trim();

            database.ref().push({
                name: name,
                role: role,
                startDate: startDate,
                hourlyRate: hourlyRate,
                dateAdded: firebase.database.ServerValue.TIMESTAMP
            });

       
        
        });
         database.ref().on("child_added", function(childSnapshot) {
            console.log(childSnapshot.val().name);
            console.log(childSnapshot.val().role);
            console.log(childSnapshot.val().startDate);
            console.log(childSnapshot.val().hourlyRate);

        });

            // Capture Button Click
            $("#runSearch").on("click", function(event) {
            // don't refresh the page
            event.preventDefault();
            // Replaces the content in the "currentEmployees" div
            $("#currentEmployees").empty();

            // Output all of the new information into the relevant sections
            $("#currentEmployees").append("<h1>" + name);
            $("#currentEmployees").append("<h4>" + role);
            $("#currentEmployees").append("<h4>" + startDate);
            $("#currentEmployees").append("<h4>" + hourlyRate);

            // Clear sessionStorage
            sessionStorage.clear();

            // Store all content into sessionStorage
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("role", role);
            sessionStorage.setItem("startDate", startDate);
            sessionStorage.setItem("hourlyRate", hourlyRate);
            });

            // By default display the content from sessionStorage
            $("#currentEmployees").empty();
            $("#currentEmployees").append("<h2>" + sessionStorage.getItem("name"));
            $("#currentEmployees").append("<h4>" + sessionStorage.getItem("role"));
            $("#currentEmployees").append("<h4>" + sessionStorage.getItem("startDate"));
            $("#currentEmployees").append("<h4>" + sessionStorage.getItem("hourlyRate"));
