$("#addButton").on("click", function(event){
    event.preventDefault();
    console.log("clicked");

    //grab inputs
var name = $("#name-input").val().trim();
var role = $("#role-input").val().trim();
var startDate = $("#start-date").val().trim();
var rate = $("#monthly-rate").val().trim();

console.log(name);
console.log(role);
console.log(startDate);
console.log(rate);

//update the rows on the html
    var addEmployee = $("<tr>");

$("#employeeList").append(addEmployee);


})