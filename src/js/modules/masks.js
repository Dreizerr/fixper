import IMask from "imask";

if (document.querySelector(`.phone-mask`)) {
  const allMasks = document.querySelectorAll(`.phone-mask`);

  allMasks.forEach((item) => {
    const patternMask = IMask(item, {
      mask: "+7 (000) - 000 - 00 - 00",
    });
  });
}
