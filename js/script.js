
$(document).ready(function(){

$('body').fadeIn("slow");

$(function(){
  $.scrollIt({
    topOffset: -80,
    scrollTime: 400,
    easing: 'swing',
    activeClass: 'active'
  });
  
});

$('.splash-container, #splash-wrapper .image').height($(window).height());
    $(window).resize(function(){
        $('.splash-container, #splash-wrapper .image').height($(window).height());
    });

$("#splash-wrapper .image img.img").each(function(){
        var theSrc = $(this).data('src');
        $(this).attr('src', theSrc);
        $(this).load(function(){
            var theURL = ($(this).attr('src'));
            $(this).parent().css('background-image', 'url('+theURL+')');
          });
});

$("a[href='#top']").click(function() {
   $("html, body").animate({ scrollTop: 0 }, "slow");
   return false;
});
  $('.portfolio-slider-img').slick({
    fade: true,
    arrows: true,
    asNavFor: '.portfolio-slider-caption'
  });

  $('.portfolio-slider-caption').slick({
    fade: true,
    arrows: false,
    dots: false,
    adaptiveHeight: true,
    asNavFor: '.portfolio-slider-img'
  });

enquire.register("screen and (max-width:750px)", {
        match : function() { 
                $('#main-col').insertBefore('#tertiary-col');
        },
        unmatch : function() {
                $('#tertiary-col').insertBefore('#main-col');
        }
    })

 });
