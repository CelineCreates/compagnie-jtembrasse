window.jQuery = $;
window.$ = $;

jQuery(function () {
  var splide = new Splide(".splide", {
    type: "slide",
    perPage: 2,
    breakpoints: {
      990: {
        perPage: 1,
        gap: "",
      },
    },
    rewind: true,
    rewindByDrag: true,
    gap: "100px",
  });
  splide.mount();
});
