$(function() {

// side bar code -----------------//
var rightSidebar = $(".rightsidebar").sidebar({side:'right'});

$('button').on('click', function() {
  rightSidebar.trigger('sidebar:toggle');
  });

// scroll top code -----------------//
$.scrolltop();

// fade in -----------------//
$( ".button" ).click(function() {
  $( ".rightsidebar" ).fadeIn("slow", function() {
  });
});



});
