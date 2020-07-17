// jQuery(function($){
//   $("ul li.subdropdown-item").hover( function(){
//     if ( $(this).hasClass('subshow') ) {
//         $(this).removeClass('subshow');
//         // $('ul li.subdropdown-item').hover(function(){
//           $(".subshow .subdropdown:first").show();
//         // });
//     } else {
//         $('li.subdropdown-item').removeClass('subshow');
//         $(this).addClass('subshow');
//     }
//   });
//   $("ul li.subdropdown-item").mouseleave(function(){
//     $(".subshow .subdropdown:first").hide();
//   });
// });

jQuery(function($){
   $("#nav-menu").responsiveNav();
});

$(".scrollUpf").hide();
$(function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
      $(".scrollUpf").fadeIn();
    } else {
      $(".scrollUpf").fadeOut();
    }
  });
  $("#scrollUp").click(function() {
    $('body,html').animate({
        scrollTop: 0
      },
      500);
    return false;
  });
});


jQuery(document).ready(function() {
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
});

jQuery(function($) {
  var forEach = function(t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t))
      for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
    else
      for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
  };
  var hamburgers = document.querySelectorAll(".hamburger");
  if (hamburgers.length > 0) {
    forEach(hamburgers, function(hamburger) {
      hamburger.addEventListener("click", function() {
        this.classList.toggle("is-active");
      }, false);
    });
  }
});
jQuery(function($) {
  $("[data-toggle='toggle']").click(function() {
    var selector = $(this).data("target");
    $(selector).toggleClass('in');
  });
});

jQuery(".fullSlide").slide({
  titCell: ".hd ul",
  mainCell: ".bd ul",
  effect: "fold",
  autoPlay: true,
  autoPage: true,
  trigger: "click"
});
// jQuery(function($){
//   $(document).on('mouseenter', '[data-toggle="tab"]', function () {
//       $(this).tab('show');
//   });
// });
