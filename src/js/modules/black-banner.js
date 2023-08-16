const blackBanners = document.querySelectorAll(`.black-banner`);

blackBanners.forEach((banner) => {
  banner.addEventListener("click", (e) => {
    if (e.target.closest(".black-banner__close")) {
      e.target.closest(".black-banner").style.display = "none";
    }
  });
});
