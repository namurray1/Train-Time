var database = firebase.database();
var trainCommin = database.ref('/Trains')
var trainName = "";
var destination = "";
var nextArrival = "";
var minutesAway = 0;
var firstTrainTime = "";
var frequency = 0;

$(document).ready(function() {


    database.ref().set({


        train: {
            destination: destination,
            trainName: trainName,
            nextArrival: nextArrival,
            minutesAway: minutesAway,
            firstTrainTime: firstTrainTime,
            frequency: frequency,
        }



    });

});
//Capture user inputs and store into variables
$("#runSearch").on("click", function() {

    trainName = $("#trainName").val().trim();
    destination = $("#destination").val().trim();
    firstTrainTime = $("#firstTrainTime").val();
    frequency = $("#frequency").val().trim();
    // nextArrival = $("#nextArrival").val().trim();
    // minutesAway = $("#minutesAway").val().trim();
    

    // console.log(trainName)
    // console.log(destination)
    // console.log(frequency)
    // console.log(firstTrainTime)


    database.ref().update({

        train: {
            destination: destination,
            trainName: trainName,
            nextArrival: nextArrival,
            minutesAway: minutesAway,
            firstTrainTime: firstTrainTime,
            frequency: frequency,
        }
        // dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

    database.ref().on("child_added", function(childSnapshot) {


        // console.log(childSnapshot.val());
        // console.log(childSnapshot.val().destination)
        // console.log(childSnapshot.val().trainName)
        // console.log(childSnapshot.val().nextArrival)
        // console.log(childSnapshot.val().minutesAway)
        // console.log(childSnapshot.val().firstTrainTime)
        // console.log(childSnapshot.val().frequency)

        $(".table").append("<td>" + childSnapshot.val().trainName + "</td>");
        $(".table").append("<td>" + childSnapshot.val().destination + "</td>");
        $(".table").append("<td>" + childSnapshot.val().firstTrainTime + "</td>");
        $(".table").append("<td>" + childSnapshot.val().frequency + "</td>");


        return false

    });
    return false

});



// Capture Button Click
$("#runSearch").on("click", function(event) {
    // don't refresh the page
    event.preventDefault();
    // Replaces the content in the "currentTrainSchedule" div
    $("#currentTrainSchedule").empty();


    // Output all of the new information into the Current Train Schedule section
    $("#currentTrainSchedule").append("<td>" + trainName + "</td>");
    $("#currentTrainSchedule").append("<td>" + destination + "</td>");
    $("#currentTrainSchedule").append("<td>" + nextArrival + "</td>");
    $("#currentTrainSchedule").append("<td>" + minutesAway + "</td>");

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
$("#currentTrainSchedule").append("<td>" + sessionStorage.getItem("trainName"));
$("#currentTrainSchedule").append("<td>" + sessionStorage.getItem("destination"));
$("#currentTrainSchedule").append("<td>" + sessionStorage.getItem("nextArrival"));
$("#currentTrainSchedule").append("<td>" + sessionStorage.getItem("minutesAway"));
