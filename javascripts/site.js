!function(e){function n(o){if(t[o])return t[o].exports;var r=t[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}var t={};return n.m=e,n.c=t,n.p="",n(0)}([function(e,n,t){t(1),e.exports=t(2)},function(e,n){},function(e,n){!function(){var e=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];Date.prototype.getDayName=function(){return e[this.getDay()]}}();var t=new Date,o=t.getDayName(),r=document.querySelector("[data-today]"),a=document.querySelector("[data-time-of-day]");r&&(r.innerHTML=o);var c=function(e){var n=e.getHours();console.log("hours: ",n),n>=0&&n<12&&(a.innerHTML="Morning"),n>=12&&n<17&&(a.innerHTML="Afternoon"),n>17&&n<=24&&(a.innerHTML="Evening")};a&&c(t),function(){var e=document.querySelector("[data-nav-toggle]"),n=document.querySelector("[data-nav-list]");e.addEventListener("click",function(){var e=n.classList,t=this.classList;e.toggle("is-active"),t.toggle("nav-toggle-close")})}(),function(){var e,n,t;n=50,e=document.querySelector("[data-header]"),t=function(){(window.pageYOffset||document.documentElement.scrollTop)>n?e.classList.add("on-scroll"):e.classList.remove("on-scroll")},window.onscroll=function(){console.log("scrolling"),t()}}()}]);