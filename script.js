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

// scroll change the menu color  -----------------//
var scroll_pos = 0;
            $(document).scroll(function() {
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 210) {
                    $(".button").css('background-color', '#cf0a2c');
                } else {
                    $(".button").css('background-color', 'black');
                }
            });

});
