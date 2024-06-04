$(document).ready(function () {
  const sections = ["home", "projects", "journey", "about"];
  let currentSectionIndex = 0;

  function toggleFabFirst() {
    if (currentSectionIndex === 0) {
      $("#fab-up").hide();
    } else {
      $("#fab-up").show();
    }
  }

  function toggleFabLast() {
    if (currentSectionIndex === sections.indexOf("about")) {
      $("#fab-down").hide();
    } else {
      $("#fab-down").show();
    }
  }

  $(".nav-link").click(function (event) {
    event.preventDefault();
    var page = $(this).data("page");
    $(".content div").removeClass("active");
    $("#" + page).addClass("active");
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
    toggleFabFirst();
    toggleFabLast();
  });

  $("#fab-down").click(function () {
    currentSectionIndex = (currentSectionIndex + 1) % sections.length;
    const nextSection = sections[currentSectionIndex];
    $(".content div").removeClass("active");
    $("#" + nextSection).addClass("active");
    $(".nav-link").removeClass("active");
    $(`.nav-link[data-page='${nextSection}']`).addClass("active");
    toggleFabFirst();
    toggleFabLast();
  });

  $("#fab-up").click(function () {
    currentSectionIndex =
      currentSectionIndex === 0 ? sections.length - 1 : currentSectionIndex - 1;
    const prevSection = sections[currentSectionIndex];
    $(".content div").removeClass("active");
    $("#" + prevSection).addClass("active");
    $(".nav-link").removeClass("active");
    $(`.nav-link[data-page='${prevSection}']`).addClass("active");
    toggleFabFirst();
    toggleFabLast();
  });

  $('[data-bs-toggle="tooltip"]').tooltip();
});
