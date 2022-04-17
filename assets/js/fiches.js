window.jQuery = $;
window.$ = $;

jQuery(function () {
  var splide = new Splide(".splide", {
    type: "loop",
    direction: "ttb",
    height: "500px",
    focus: "center",
    autoHeight: true,
    autoWidth: true,
    perPage: 2,
    rewind: true,
    rewindByDrag: true,
  });
  splide.mount();

  splide.on("click", function (e) {
    let image_src = $(e.slide).find("img").attr("src");
    $("#image-max").find("img").attr("src", image_src);
  });

  splide.on("active", function (e) {
    let image_src = $(e.slide).find("img").attr("src");
    $("#image-max").find("img").attr("src", image_src);
  });
});
