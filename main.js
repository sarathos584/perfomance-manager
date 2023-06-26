$(document).ready(function () {
  $("#toggleBtn").on("click", function () {
    $(".responsive-nav").slideToggle();
    $("header").toggleClass("nav-open");
  });
  $(".sec-nav-item").on("click", function (event) {
    $(event.target).toggleClass("active");
  });
});
