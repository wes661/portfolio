// Nav bar animation
$(document).ready(function() {
  $(".fa-bars").click(function() {
    $(".nav-bar").slideToggle(400);
    $(".open").fadeToggle();
  });
});

$(document).ready(function() {
  $(".fa-times").click(function() {
    $(".nav-bar").slideToggle(400);
    $(".open").fadeToggle();
  });
});
