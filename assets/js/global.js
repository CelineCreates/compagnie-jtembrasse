window.jQuery = $;
window.$ = $;

jQuery(function () {
  //MENU RESPONSIVE
  // Get the checkbox
  var checkBox = $("#toggle");
  // Get the output text
  var elBurger = $("#burger");
  var elMenu = $("#menu");

  // If the checkbox is checked, display the output text
  checkBox.on("click", function () {
    if ($(checkBox).is(":checked")) {
      elMenu.css("display", "flex");
    } else {
      elMenu.hide();
    }
  });

  if ($(window).width() < 990) {
    elMenu.hide();
  } else {
    elBurger.hide();
  }
  $(window).resize(function () {
    if ($(window).width() < 990) {
      elMenu.hide();

      elBurger.show();
    } else {
      elBurger.hide();
      elMenu.show();
    }
  });
});
