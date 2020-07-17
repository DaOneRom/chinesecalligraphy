$(".vid-container").addClass("vid-bg");
$(".play-container").click(function(){
  $(".play-container").css({"opacity": "0"});
  $("#myVideo").css({"opacity": "1"});
  $(this).removeClass();
  $(this).addClass('pause-container');
});
$('.pause-container').click(function(){
  $(".pause-container").css({"opacity": "0"});
  $("#myVideo").css({"opacity": "0.4"});
  $(this).removeClass();
  $(this).addClass('play-container');
});
