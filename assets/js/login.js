// Login page

$(document).ready(function () {
  // Login page
  $(".auth-option-container").on("click", function () {
    $(".login-option").toggle();
    $(".login-paci-form").toggle();
  });

  $("#btn-login-back").on("click", function () {
    $(".login-option").toggle();
    $(".login-paci-form").toggle();
  });
});
