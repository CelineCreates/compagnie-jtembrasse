window.jQuery = $;
window.$ = $;

jQuery(function () {
  var splide = new Splide(".splide", {
    type: "slide",
    perPage: 3,
    fixedWidth: "300px",
    breakpoints: {
      990: {
        perPage: 1,
        fixedWidth: "",
      },
    },
    rewind: true,
    rewindByDrag: true,
    gap: "15px",
  });
  splide.mount();
});
