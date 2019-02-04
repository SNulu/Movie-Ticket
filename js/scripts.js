// Business Logic for AddressBook ---------
function MovieTicket(name, time, age){
  this.name = name,
  this.time = time,
  this.age= age
}




$(document).ready(function () {

  $("form#movie-Tickets").submit(function (event) {
    event.preventDefault();
    var movieName = $("#name").val();
    var movieTime = $("#appt-time").val();
    var yourAge = $("#age").val();

    var ticket = new MovieTicket(movieName, movieTime, yourAge);
    console.log(ticket);
    console.log("Add")
  });
});
