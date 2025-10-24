$(document).ready(function () {
  $("img").hover(
    function () {
      let newSrc = $(this).attr("data-alt-src");
      let oldSrc = $(this).attr("src");
      $(this).attr("src", newSrc);
      $(this).attr("data-alt-src", oldSrc);
    },
    function () {
      let oldSrc = $(this).attr("data-alt-src");
      let newSrc = $(this).attr("src");
      $(this).attr("src", oldSrc);
      $(this).attr("data-alt-src", newSrc);
    }
  );
});
