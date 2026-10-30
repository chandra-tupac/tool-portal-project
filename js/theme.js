// Light/dark theme toggle, shared by every page.
// Loaded in <head> without "defer" so the saved theme is applied
// before the page is drawn (no flash of the wrong theme).
(function () {
  var STORAGE_KEY = "theme";
  var root = document.documentElement;

  function readSaved() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null; // storage blocked (e.g. private window)
    }
  }

  function save(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      // ignore: the toggle still works for this page view
    }
  }

  function apply(theme) {
    root.setAttribute("data-theme", theme);
  }

  // Default is light, whatever the device prefers.
  apply(readSaved() === "dark" ? "dark" : "light");

  document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("theme-toggle");
    if (!button) return;

    function syncButton() {
      // The label says what a click will do.
      var isDark = root.getAttribute("data-theme") === "dark";
      button.textContent = isDark ? "Switch to light theme" : "Switch to dark theme";
    }

    button.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      apply(next);
      save(next);
      syncButton();
    });

    syncButton();
  });
})();
