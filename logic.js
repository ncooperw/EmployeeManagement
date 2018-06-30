 
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyD1F6HkOSNomp5qXzTZq3rJmD3GmNjSv_c",
        authDomain: "group-project-c5951.firebaseapp.com",
        databaseURL: "https://group-project-c5951.firebaseio.com",
        projectId: "group-project-c5951",
        storageBucket: "group-project-c5951.appspot.com",
        messagingSenderId: "205795254538"
    };

    firebase.initializeApp(config);
    
    var database = firebase.database();

    //Initial Values
    var name = "";
    var role = "";
    var startDate = "";
    var rate = 0;

    //On click function

    $("#addButton").on("click", function (event) {
    event.preventDefault();
    console.log("clicked");


    //grab inputs
    name = $("#name-input").val().trim();
    role = $("#role-input").val().trim();
    startDate = $("#start-date").val().trim();
    rate = $("#monthly-rate").val().trim();

    console.log(name);
    console.log(role);
    console.log(startDate);
    console.log(rate);
    // Code for "setting values in the database"
    
    database.ref().push({
        name: name,
        role: role,
        startDate: startDate,
        rate: rate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });


    
   


})

//adding child to firebase to create an employee list

database.ref().on("child_added", function(childSnapshot){
    console.log(childSnapshot.val().name);
    console.log(childSnapshot.val().role);
    console.log(childSnapshot.val().startDate);
    console.log(childSnapshot.val().rate);

    //update the rows on the html
    // var addEmployee = $("<tr>");

    $(".employeeList").append("<tr><td>" + childSnapshot.val().name + "</td><td>" + childSnapshot.val().role + "</td><td>" + childSnapshot.val().startDate + "</td><td>" + childSnapshot.val().rate + "</td>");
})

