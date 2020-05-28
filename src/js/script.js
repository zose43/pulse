$(document).ready(function () {
  $(".slider-wrapper").slick({
    speed: 900,
    adaptiveHeight: true,
    autoplay: false,
    prevArrow: `<button type="button" class="slick-prev"><img src='icons/slider/slider_arrow_left.png'></img></button>`,
    nextArrow: `<button type="button" class="slick-next"><img src='icons/slider/slider_arrow_right.png'></img></button>`,
    responsive: [],
  });
});
