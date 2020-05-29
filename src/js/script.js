$(document).ready(function () {
  $(".slider-wrapper").slick({
    speed: 900,
    adaptiveHeight: true,
    autoplay: false,
    prevArrow: `<button type="button" class="slick-prev"><img src='icons/slider/slider_arrow_left.png'></img></button>`,
    nextArrow: `<button type="button" class="slick-next"><img src='icons/slider/slider_arrow_right.png'></img></button>`,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  });
});
/* tiny-slider */
// const slider = tns({
//   container: ".slider-tiny",
//   items: 1,
//   autoplay: false,
//   controls: false,
//   nav: false,
//   navPosition: "bottom",
// });
/* events for buttons */
// document.querySelector(".slider-next").addEventListener("click", () => {
//   slider.goTo("next");
// });
// document.querySelector(".slider-prev").addEventListener("click", () => {
//   slider.goTo("prev");
// });
