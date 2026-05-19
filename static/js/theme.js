(function () {
  var button = document.querySelector(".theme-toggle");
  if (!button) return;

  var root = document.documentElement;
  var media = window.matchMedia("(prefers-color-scheme: dark)");

  function storedTheme() {
    try {
      return localStorage.getItem("theme");
    } catch (error) {
      return null;
    }
  }

  function currentTheme() {
    return root.dataset.theme || (media.matches ? "dark" : "light");
  }

  function setTheme(theme) {
    root.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch (error) {}
    var nextTheme = theme === "dark" ? "light" : "dark";
    button.dataset.theme = theme;
    button.setAttribute("aria-label", "Switch to " + nextTheme + " mode");
  }

  setTheme(storedTheme() || currentTheme());
  button.hidden = false;

  button.addEventListener("click", function () {
    setTheme(currentTheme() === "dark" ? "light" : "dark");
  });
})();
