window.jQuery = $;
window.$ = $;

jQuery(function () {
  var splide = new Splide(".splide", {
    type: "slide",
    perPage: 2,
    rewind: true,
    rewindByDrag: true,
    gap: "100px",
  });
  splide.mount();
});
