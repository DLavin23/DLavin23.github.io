document.addEventListener("DOMContentLoaded", function() {
  console.log('loaded vanilla');

  var navButton  = document.querySelector('.btn-menu'),
      navMenu    = document.querySelector('.nav'),
      tabButton  = document.querySelector('.tab-btn'),
      tabItem    = document.querySelector('.tab-item'),
      tabContent = document.querySelector('.tab-content');

  navButton.onclick = function() {
    this.classList.toggle('active');
    navMenu.classList.toggle('is-open');
  };
});
