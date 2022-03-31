window.jQuery = $;
window.$ = $;

$(document).ready(function () {
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
    $("#photo-accueil").hide();
    let imageUrl = "https://via.placeholder.com/542x768";
    $("#texte-accueil").css("background-image", "url(" + imageUrl + ")");
    $("#texte-accueil").css("background-repeat", "no-repeat");
    $("#texte-accueil").css("background-size", "cover");
  } else {
    $("#photo-accueil").show();
    $("#texte-accueil").css("background-image", "none");
    elBurger.hide();
  }
  $(window).resize(function () {
    if ($(window).width() < 990) {
      elMenu.hide();
      $("#photo-accueil").hide();
      let imageUrl = "https://via.placeholder.com/542x768";
      $("#texte-accueil").css("background-image", "url(" + imageUrl + ")");
      $("#texte-accueil").css("background-repeat", "no-repeat");
      $("#texte-accueil").css("background-size", "cover");
      elBurger.show();
    } else {
      $("#photo-accueil").show();
      $("#texte-accueil").css("background-image", "none");
      elBurger.hide();
      elMenu.show();
    }
  });
});
