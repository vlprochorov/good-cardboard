$(document).ready(function(){
    $('.slick-top').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slick-bottom'
      });
    $('.slick-bottom').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slick-top',
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      nextArrow: '<div class="arrow-next"></div>',
      prevArrow: '<div class="arrow-prev"></div>'
      });
    $('.feedback-slick').slick({
      slidesToShow: 3,
      nextArrow: '<div class="arrow-next-big"></div>',
      prevArrow: '<div class="arrow-prev-big"></div>'
      });
  });