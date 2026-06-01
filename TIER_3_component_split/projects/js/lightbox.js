const images =
  document.querySelectorAll(
    ".portfolio-image"
  );

const overlay =
  document.createElement("div");

overlay.className =
  "lightbox-overlay";

overlay.innerHTML = `
  <span class="close-btn">✖</span>
  <img class="lightbox-img">
`;

document.body.appendChild(
  overlay
);

const lightboxImg =
  overlay.querySelector(
    ".lightbox-img"
  );

images.forEach((image) => {
  image.addEventListener(
    "click",
    () => {
      overlay.classList.add(
        "show"
      );

      lightboxImg.src =
        image.src;
    }
  );
});

overlay.addEventListener(
  "click",
  (e) => {
    if (
      e.target === overlay ||
      e.target.classList.contains(
        "close-btn"
      )
    ) {
      overlay.classList.remove(
        "show"
      );
    }
  }
);

document.addEventListener(
  "keydown",
  (e) => {
    if (e.key === "Escape") {
      overlay.classList.remove(
        "show"
      );
    }
  }
);