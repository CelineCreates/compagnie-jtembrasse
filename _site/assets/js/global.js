window.jQuery = $;
window.$ = $;

jQuery(function () {
  $(window).resize(function () {
    if ($(window).width() > 1450) {
      $("#container-nav").show();
    }
    if ($(window).width() < 1450) {
      this.dynamiserResponsiveMenu();
    }
  });

  $("#back-top").on("click", function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });
});
