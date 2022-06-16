window.jQuery = $;
window.$ = $;

jQuery(function () {
  var splide = new Splide(".splide", {
    type: "slide",
    perPage: 3,
    breakpoints: {
      990: {
        perPage: 1,
        fixedWidth: "100%",
        fixedHeight: "100%",
      },
    },
    rewind: true,
    rewindByDrag: true,
    gap: "15px",
  });
  splide.mount();
});
