$(function () {
  // Services carousel
  (function () {
    const $owl = $(".services-carousel");
    const addOpacity = function (event) {
      const $owlItems = $(event.target).find(".owl-item");
      $owlItems.css("opacity", "0.3");
      const active = $owlItems.filter(".active");
      if (active.length === 1) {
        active.css("opacity", "1");
      } else {
        active.not(":last").css("opacity", "1");
      }
    };

    $owl.on("initialized.owl.carousel", addOpacity);
    $owl.on("drag.owl.carousel", addOpacity);
    $owl.on("translated.owl.carousel", addOpacity);

    $owl.owlCarousel({
      loop: false,
      margin: 30,
      nav: true,
      dots: false,
      merge: true,
      touchDrag: false,
      mouseDrag: false,
      navText: [
        '<img src="img/left.svg" alt="Arrow left"/>',
        '<img src="img/right.svg" alt="Arrow right" />',
      ],
      responsive: {
        0: {
          items: 1,
        },
        1000: {
          items: 2,
        },
      },
    });
  })();

  // Testimonials carousel
  $(".testimonials-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 80,
    nav: true,
    dots: false,
    navText: [
      '<img src="img/left.svg" alt="Arrow left"/>',
      '<img src="img/right.svg" alt="Arrow right" />',
    ],
  });

  // Turn on video
  $(".video").on("click", function (e) {
    e.preventDefault();
    const $videoItems = $(this).find(".video__object");
    $videoItems.css({
      opacity: "1",
      visibility: "visible",
    });
    $videoItems[0].src += "?autoplay=1&controls=0";
  });
});
