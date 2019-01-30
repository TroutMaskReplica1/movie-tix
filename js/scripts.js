//business logic
function Ticket(age, time, movie) {
  this.price = 10;
  this.age = age;
  this.time = time;
  this.movie = movie;
}

Ticket.prototype.timeOf = function(timeOfMovie) {
  if (timeOfMovie === 1) {
    ticket.price -= 2;
  } else if (timeOfMovie === 3) {
    ticket.price -= 3;
  } else {
    return ticket.price;
  }
}

Ticket.prototype.ageOf = function(ageOfPerson) {
  if (ageOfPerson === 1) {
    ticket.price -= 2;
  } else if (ageOfPerson === 3) {
    ticket.price += 2;
  } else {
    return ticket.price;
  }
}

Ticket.prototype.movieOf = function(typeOfMovie) {
  if (typeOfMovie === 1) {
    ticket.price += 2;
  } else if (typeOfMovie === 3) {
    ticket.price -= 2;
  } else {
    return ticket.price;
  }
}

//user interface
$(document).ready(function() {
  $("form#form").submit(function(event) {
    var inputAge = $("input:radio#age1:checked").val();
    var inputTime = $("input:radio#time1:checked").val();
    var inputMovie = $("input:radio#movie1:checked").val();
    $(".display").show();
  });
});
