window.jQuery = $;
window.$ = $;

$(document).ready(function () {
  $("img").click(function () {
    $(this).css({
      "-webkit-transform": "rotate(90deg)",
      "-moz-transform": "rotate(90deg)",
      transform: "rotate(90deg)" /* For modern browsers(CSS3)  */,
    });
  });

  console.error("toto");
});
