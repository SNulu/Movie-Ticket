// Business Logic for AddressBook ---------
function MovieTicket(){
  this.name = "",
  this.time = "",
  this.age= 0
}

MovieTicket.prototype.addName = function (name) {
  //contact.id = this.assignId();
  this.name = name;
}

MovieTicket.prototype.addTime = function (time) {
  //contactAddress.id = this.assignId();
  this.time = time;
}

$(document).ready(function () {

  $("form#movie-Tickets").submit(function (event) {
    event.preventDefault();
    var movieName = $("#name").val();
    console.log(movieName);
    var movieTime = $("#appt-time").val();
    console.log(movieTime);
    var yourAge = $("#age").val();
    console.log(yourAge);
    console.log("Add")
  });
});
