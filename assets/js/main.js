$(document).ready(function () {
  $(".nav-link").click(function (event) {
    event.preventDefault();
    var page = $(this).data("page");
    $(".content div").removeClass("active");
    $("#" + page).addClass("active");
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
  });

  $('[data-bs-toggle="tooltip"]').tooltip();
});
