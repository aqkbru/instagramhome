$(function(){

  /* variabili */

  var nav = $(".foto");
  var pos = 0;
  var wid = "";
  var line = $(".line-menu");
  var active = $(".active");

  /* click */

  nav.find("ul li").click(function(){

    var this_nav = $(this);

    /* animate */

    line.animate({
      left: this_nav.position().left,
      width: this_nav.width()
    })
  });

  /* on load */

  var active_width = active.width()

  line.css({
    width: active.width() -40
  });

  $('.item img').click(function() {
    $(this).toggleClass("resize")
      
});

$('.item-tools img').click(function() {
  $(".tendina").toggleClass("display")
    
});




});

