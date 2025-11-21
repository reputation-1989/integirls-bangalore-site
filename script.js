document.addEventListener("DOMContentLoaded", function() {
  var menuToggle = document.getElementById("menu-toggle");
  var siteNav = document.getElementById("site-nav");
  if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", function() {
      siteNav.classList.toggle("active");
    });
  }
  var y = new Date().getFullYear();
  var el = document.getElementById("current-year") || document.getElementById("current-year");
  if (el) el.textContent = y;
});
