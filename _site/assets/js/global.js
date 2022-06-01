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

  //GO TO TOP BUTTON
  $("#back-top").on("click", function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });
});

function dynamiserResponsiveMenu(params) {
  //Responsive menu
  $("#menu-button").click(function (e) {
    $("#container-nav").show();
    e.stopPropagation();
  });

  $("#container-nav").click(function (e) {
    e.stopPropagation();
  });

  $(document).click(function (e) {
    if ($(window).width() > 1450) {
      // e.preventDefault();
    } else {
      $("#container-nav").hide();
    }
  });
}
