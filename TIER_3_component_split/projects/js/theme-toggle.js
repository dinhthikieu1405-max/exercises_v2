const toggleBtn =
  document.querySelector(
    "#theme-toggle"
  );

const currentTheme =
  localStorage.getItem(
    "theme"
  );

if (currentTheme) {
  document.body.setAttribute(
    "data-theme",
    currentTheme
  );
} else {
  const prefersDark =
    window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

  document.body.setAttribute(
    "data-theme",
    prefersDark
      ? "dark"
      : "light"
  );
}

toggleBtn.addEventListener(
  "click",
  () => {
    const theme =
      document.body.getAttribute(
        "data-theme"
      );

    const newTheme =
      theme === "dark"
        ? "light"
        : "dark";

    document.body.setAttribute(
      "data-theme",
      newTheme
    );

    localStorage.setItem(
      "theme",
      newTheme
    );
  }
);