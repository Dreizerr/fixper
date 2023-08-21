import * as choices from "../libs/choices.min.js";

if (document.querySelector(`.select`)) {
  const selects = document.querySelectorAll(`.select`);
  selects.forEach((select) => {
    const defaultSelect = new Choices(select, {
      placeholder: true,
      searchEnabled: false,
      allowHTML: false,
      itemSelectText: "",
    });
  });
}
