const pricesBlocks = document.querySelectorAll(`.price`);

pricesBlocks.forEach((block) => {
  const loadButton = block.querySelector(`.price__more`);
  const tableHiddenPrices = [...block.querySelectorAll(`.price-table__row.hidden`)];
  const mobileHiddenPrices = [...block.querySelectorAll(`.price-mobile-item.hidden`)];
  if (window.innerWidth > 700) {
    loadButton.addEventListener("click", (e) => {
      tableHiddenPrices.splice(0, 5).forEach((price) => {
        price.classList.remove("hidden");
      });
      if (tableHiddenPrices.length === 0) {
        loadButton.style.display = "none";
      }
    });
  } else {
    loadButton.addEventListener("click", (e) => {
      mobileHiddenPrices.splice(0, 5).forEach((price) => {
        price.classList.remove("hidden");
      });
      if (mobileHiddenPrices.length === 0) {
        loadButton.style.display = "none";
      }
    });
  }
});
