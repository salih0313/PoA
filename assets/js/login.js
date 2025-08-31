// Login page

$(document).ready(function () {
  // Login page
  $(".auth-option-container").on("click", function () {
    $(".login-option").toggle();
    $(".login-paci-input").toggle();
  });

  $("#btn-login").on("click", function () {
    $(".login-paci-input").toggle();
    $(".login-paci-qr").toggle();
  });

  $(".btn-login-back").on("click", function () {
    $(".login-option").toggle();
    $(".login-paci-input").hide();
    $(".login-paci-qr").hide();
  });
});
