// public/agency-template/scripts/theme.js
function detectSystemTheme(manual = false) {
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      if (manual) localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      if (manual) localStorage.setItem("theme", "light");
    }
  }
  
  function changeThemeToDark() {
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
  }
  
  function changeThemeToLight() {
    localStorage.setItem("theme", "light");
    document.documentElement.classList.remove("dark");
  }
  
  function changeThemeManually() {
    const localAppTheme = localStorage.getItem("theme");
    if (localAppTheme === "light") {
      changeThemeToDark();
    } else if (localAppTheme === "dark") {
      changeThemeToLight();
    } else {
      detectSystemTheme(true);
    }
  }
  
  const switchTheme = document.querySelector("[data-switch-theme]");
  if (switchTheme) {
    switchTheme.addEventListener("click", (e) => {
      e.preventDefault();
      changeThemeManually();
    });
  }
  
  // Detect system theme on page load
  detectSystemTheme();