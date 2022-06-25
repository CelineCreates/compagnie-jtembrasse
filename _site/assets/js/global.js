window.jQuery = $;
window.$ = $;

jQuery(function () {
  $("#back-top").on("click", function () {
    console.error("prout");
    window.scrollTo({ top: 0, behavior: "smooth" }); // For Chrome, Firefox, IE and Opera
  });
});
