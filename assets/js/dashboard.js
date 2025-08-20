$(document).ready(function () {
  // Toggle chat sidebar
  $(".chatToggle").on("click", function () {
    $("#mainContent").toggleClass("sidebar-open");
  });

  document.querySelectorAll(".chat-suggestions button").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelector(".chat-input input").value = btn.textContent;
      document.querySelector(".chat-input input").focus();
    });
  });
});
