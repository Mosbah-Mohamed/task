$(document).ready(function () {
  $("html, body").animate({ scrollTop: "0px" }, 300);
  /* =============================== start button up ========================================================= */
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 1000) {
      $(".up").fadeIn(2000);
      $(".up").css("right", "45px");
    } else {
      $(".up").fadeOut(2000);
      $(".up").css("right", "-45px");
    }
  });
  $(".up").on("click", function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      700
    );
  });
  /* =============================== end button up ============================================================ */
  /* =============================== start AOS.js  ============================================================ */
  $(function () {
    AOS.init();
    window.addEventListener("load", AOS.refresh);
  });
  /* =============================== end  AOS.js  ============================================================= */
});
/*==================== start spinner ========================================================================== */
$(window).on("load", function () {
  $(".loading-spinner").fadeOut(1500);
});

/*==================== end spinner ============================================================================ */

jQuery(document).ready(function ($) {
  var $stage = $(".stage"),
    $text01 = $("#text01"),
    $text02 = $("#text02"),
    $text03 = $("#text03"),
    $screen01 = $("#screen01"),
    $screen02 = $("#screen02"),
    $screen03 = $("#screen03");

  // initialize controller
  var controller = new ScrollMagic.Controller();
  controller.scrollTo(500);

  // build timeline with animation tweens
  var scrollAnimation = new TimelineMax();
  scrollAnimation
    .set($stage, { autoAlpha: 1 })
    .to($text01, 0, { autoAlpha: 1, ease: Power1.easeInOut }, "trans1")
    .to($text01, 1, { autoAlpha: 0, ease: Power1.easeInOut }, "trans2")
    .to($text02, 1, { autoAlpha: 1, ease: Power1.easeInOut }, "trans2")
    .to($screen01, 1, { autoAlpha: 0, ease: Power1.easeInOut }, "trans2")
    .to($screen02, 1, { autoAlpha: 1, ease: Power1.easeInOut }, "trans2")
    .to($text02, 1, { autoAlpha: 0, ease: Power1.easeInOut }, "trans3")
    .to($text03, 1, { autoAlpha: 1, ease: Power1.easeInOut }, "trans3")
    .to($screen02, 1, { autoAlpha: 0, ease: Power1.easeInOut }, "trans3")
    .to($screen03, 1, { autoAlpha: 1, ease: Power1.easeInOut }, "trans3");

  // build scene and link scrolling to animation
  var scene = new ScrollMagic.Scene({
    triggerElement: ".js-trigger",
    triggerHook: "onLeave",
    duration: 1000,
  })
    .setPin(".js-pin")
    // .addIndicators()
    .addTo(controller)
    .setTween(scrollAnimation);
  // scene.offset(400);
});

/* ==================================== end js ================================================================ */
