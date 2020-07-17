jQuery(function($){
  $(window).resize(function(){
    if ($(window).width() < 768) {
      $('.alink').bind('click', false);
    }
    else {
      $('.alink').unbind('click', false);
    }
  });
});
