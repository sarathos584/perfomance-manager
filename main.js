$(document).ready(function(){
    $('#toggleBtn').on('click',function(){
       $('.responsive-nav').slideToggle();
       $('header').toggleClass('nav-open')
    })
  });