// Greeting in hero displays today's date.

(function() {
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  Date.prototype.getDayName = function() {
    return days[ this.getDay() ];
  };

})();

var now = new Date();
var today = now.getDayName();
var dataToday = document.querySelector('[data-today]');
var timeOfDay = document.querySelector('[data-time-of-day]');

if (dataToday) {
  dataToday.innerHTML = today;
}

var getTimeOfDay = function(date) {
  var hours = date.getHours();

  console.log('hours: ', hours)

  if (hours >= 0 && hours < 12) {
    timeOfDay.innerHTML = "Morning";
  }

  if (hours >= 12 && hours < 17) {
    timeOfDay.innerHTML = "Afternoon";
  }

  if (hours > 17 && hours <= 24) {
    timeOfDay.innerHTML = "Evening";
  }
}

if (timeOfDay) {
  getTimeOfDay(now);
}

// Toggle Nav

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

// Fixed header on scroll

(function() {

  var fixedHeader, DEFAULT_HEADER_POSITION, calculateScroll;

  DEFAULT_HEADER_POSITION = 50;
  fixedHeader = document.querySelector('[data-header]');

  calculateScroll = function() {
    if ((window.pageYOffset || document.documentElement.scrollTop) > DEFAULT_HEADER_POSITION) {
      fixedHeader.classList.add('on-scroll');
    } else {
      fixedHeader.classList.remove('on-scroll');
    }
  };

  window.onscroll = function() {
    console.log('scrolling');
    calculateScroll();
  };

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
