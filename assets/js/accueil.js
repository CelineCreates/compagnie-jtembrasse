window.jQuery = $;
window.$ = $;

jQuery(function () {
  if ($(window).width() < 990) {
    $("#photo-accueil").hide();
    let imageUrl = "assets/images/index/affiche-accueil.png";
    $("#texte-accueil").css("background-image", "url(" + imageUrl + ")");
    $("#texte-accueil").css("background-repeat", "no-repeat");
    $("#texte-accueil").css("background-size", "cover");
  } else {
    $("#photo-accueil").show();
    $("#texte-accueil").css("background-image", "none");
  }
  $(window).resize(function () {
    if ($(window).width() < 990) {
      $("#photo-accueil").hide();
      let imageUrl = "assets/images/index/affiche-accueil.png";
      $("#texte-accueil").css("background-image", "url(" + imageUrl + ")");
      $("#texte-accueil").css("background-repeat", "no-repeat");
      $("#texte-accueil").css("background-size", "cover");
    } else {
      $("#photo-accueil").show();
      $("#texte-accueil").css("background-image", "none");
    }
  });
});
