// Business Logic for AddressBook ---------
function MovieTicket(name, time, age) {
  this.name = name,
  this.time = time,
  this.age = age
};

MovieTicket.prototype.cost = function () {
  var baseCost = 10;
  if (this.age < 60) {
    baseCost += 2.5;
  }
  if (parseInt(this.time.slice(0, 2)) >= 16) {
    baseCost += 2.5;
  }
  return baseCost
};



$(document).ready(function () {

  $("form#movie-Tickets").submit(function (event) {
    event.preventDefault();
    var movieName = $("#name").val();
    var movieTime = $("#appt-time").val();
    var yourAge = $("#age").val();

    var ticket = new MovieTicket(movieName, movieTime, yourAge);
    console.log(ticket);
    console.log(ticket.cost());
    console.log("Add")
    $('.movie-name').text(ticket.name);
    $('.movie-time').text(ticket.time);
    $('.movie-price').text(ticket.cost());
  });
});
