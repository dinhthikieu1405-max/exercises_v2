const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Xóa active cũ
    filterButtons.forEach((btn) =>
      btn.classList.remove("active")
    );

    // Active mới
    button.classList.add("active");

    const category =
      button.dataset.filter;

    portfolioItems.forEach((item) => {
      if (
        category === "all" ||
        item.dataset.category ===
          category
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});