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
  /* catalog tabs event */
  /**
   * search active tabs, after search active catalog
   */
  $(".catalog-tabs").on("click", "li:not('.active')", function () {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active")
      .closest(".container")
      .find(".catalog-content")
      .removeClass("catalog-content-active")
      .eq($(this).index())
      .addClass("catalog-content-active");
  });
  /* event link more detalis */
  function toggleClass(item) {
    $(item).each(function (i) {
      $(this).on("click", function (e) {
        e.preventDefault();
        $(".more").eq(i).toggleClass("more-active");
        $(".prodWrapper").eq(i).toggleClass("prodWrapper-active");
      });
    });
  }
  toggleClass(".back");
  toggleClass(".catalog-link");
});
