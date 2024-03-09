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
    .to($text01, 0, { autoAlpha: 1, y: 0 }, "trans1") // Initial text visible
    .to($text02, 0, { autoAlpha: 0, y: 0 }, "trans1") // Second text hidden off-screen
    .to($screen01, 0, { autoAlpha: 1 }, "trans1") // Initial screen visible
    .to($screen02, 0, { autoAlpha: 0 }, "trans1") // Second screen hidden off-screen
    .to($text01, 1, { autoAlpha: 0, y: "100%" }, "trans2") // First text disappears down
    .to($text02, 1, { autoAlpha: 1, y: 0 }, "trans2") // Second text appears from the top
    .to($screen01, 1, { autoAlpha: 0 }, "trans2") // First screen disappears down
    .to($screen02, 1, { autoAlpha: 1 }, "trans2"); // Second screen appears from the top

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
