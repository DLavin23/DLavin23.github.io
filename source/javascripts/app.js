// Greeting in hero displays today's date.
(function() {
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  Date.prototype.getDayName = function() {
    console.log(this)
    return days[ this.getDay() ];
  };

})();

var now = new Date();
var today = now.getDayName();
var dataToday = document.querySelector('[data-today]');
var timeOfDay = document.querySelector('[data-time-of-day]');

if (dataToday) {
  dataToday.innerHTML = today;
} else {
  console.log('fooo')
}

var getTimeOfDay = function(date) {
  var hours = date.getHours();

  if (hours < 12 ) {
    timeOfDay.innerHTML = "Morning";
  }
  if (hours > 12 && hours < 17) {
    timeOfDay.innerHTML = "Afternoon";
  }
  else {
    timeOfDay.innerHTML = "Evening";
  }
}

if (timeOfDay) {
  getTimeOfDay(now);
}

(function() {

  var navToggle = document.querySelector('[data-nav-toggle]');
  var navList = document.querySelector('[data-nav-list]');

  navToggle.addEventListener('click', function() {
    var navListClass = navList.classList;
    var navToggleClass = this.classList;

    navListClass.toggle('is-active');
    navToggleClass.toggle('nav-toggle-close');
  });

})();


// Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz”
// instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

// var fizz = 'Fizz'
// var buzz = 'Buzz'

// for (var i = 0; i < 100; i++) {
//   console.log(i % 3 === 0)

//   if (i % 3 === 0) {
//     console.log(i, fizz)
//   }

//   if (i % 5 === 0) {
//     console.log(i, buzz)
//   }

//   if (i % 3 && i % 5 === 0) {
//     console.log(i, fizz + buzz)
//   }
// }
