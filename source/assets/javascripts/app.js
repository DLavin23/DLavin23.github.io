document.addEventListener("DOMContentLoaded", function() {
  console.log('loaded vanilla');

  var navButton  = document.querySelector('.btn-menu'),
      navMenu     = document.querySelector('.nav'),
      tabButton  = document.querySelector('.tab-btn'),
      tabItem    = document.querySelector('.tab-item'),
      tabContent = document.querySelector('.tab-content');

  navButton.onclick = function() {
    // document.body.classList.toggle('is-open');
    this.classList.toggle('active');
    navMenu.classList.toggle('is-open');
  };

});

// angular.module('app', [function() {
// 	console.log('hello, world!');
// }])

// .controller('AppCtrl', ['$scope', function($scope){
//   console.log('App controller');
// }]);
