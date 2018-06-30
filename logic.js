$("#addButton").on("click", function(event){
    event.preventDefault();
    console.log("clicked");
firebase.initializeApp(config);
var database = firebase.database();

//Initial Values
var name = "";
var role = "";
var startDate = "";
var rate = 0;

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
    role = role,
    startDate = startDate,
    rate = rate
});

//update the rows on the html
    var addEmployee = $("<tr>");

$("#employeeList").append(addEmployee);

<script src="https://www.gstatic.com/firebasejs/5.2.0/firebase.js"></script>
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


})