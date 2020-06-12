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
  /* Modal */
  //consult
  openModal("promo-bigBtn", "modalConsult");
  openModal("promo-smallBtn", "modalConsult");
  closeModal("modalConsult");
  //buy
  openModal("buyBtn", "modalCatalog");
  closeModal("modalCatalog");
  /* script to modal-subheader */
  $(".buyBtn").each(function (i) {
    $(this).on("click", function () {
      $(".modalCatalog .modalCatalog-subheader").text(
        $(".prodWrapper h2").eq(i).text()
      );
    });
  });
  //request
  // openModal("submit", "modalRequest");
  closeModal("modalRequest");
  /**
   * Open modal function
   * to every event modal window
   */

  function openModal(btnClass, modalClass) {
    $(`.${btnClass}`).on("click", function () {
      $(".overlay").fadeIn("3s");
      $(`.${modalClass}`).fadeIn("3s");
    });
  }
  /**
   * Close modal function
   * to every event modal window
   */
  function closeModal(modalClass) {
    $(`.${modalClass}-close`).on("click", function () {
      $(".overlay").fadeOut("3s");
      $(`.${modalClass}`).fadeOut("3s");
    });
  }
  /* Form validatator */
  formValidator("#modalConsult .form");
  formValidator("#modalCatalog .form");
  formValidator(".form");
  /* func validate */
  function formValidator(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
        phone: {
          required: true,
        },
      },
      messages: {
        name: "Введите ваше имя",
        phone: "Введите ваш номер телефона",
        email: {
          required: "Введите вашу почту",
          email: "Введите вашу почту в правильном формате",
        },
      },
    });
  }
  /* Masked input */
  $("input[name=phone]").mask("+7 (999) 999-99-99");
  /* off reset submit */
  $("form").submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize(),
    }).done(function () {
      $(this).find("input").val("");
      $("#modalConsult, #modalCatalog").fadeOut();
      $("#modalRequest").fadeIn();
      $("form").trigger("reset");
    });
    return false;
  });
  /* Smooth scroll */
  // fadeIn icon
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1550) {
      $(".scroll").fadeIn("2s");
    } else {
      $(".scroll").fadeOut("2s");
    }
  });
  //scroll
  $("a[href=#up]").click(function () {
    const _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
  });
  /* wow script (scroll with block-animate) */
  new WOW().init();
  const wow = new WOW({
    boxClass: "wow",
    animateClass: "animate__animated",
    offset: 0,
    mobile: true,
    live: true,
    callback: function (box) {},
    scrollContainer: null,
  });
  wow.init();
});
