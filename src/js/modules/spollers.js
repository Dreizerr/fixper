const allSpollers = document.querySelectorAll(`[data-spollers]`);

if (allSpollers.length > 0) {
  allSpollers.forEach((spollers) => {
    spollers.addEventListener("click", (e) => {
      spollersHandler(e, spollers);
    });
  });
}

function spollersHandler(e, spollers) {
  const targetElement = e.target;

  if (targetElement.closest(`[data-spoller-toggler]`)) {
    const spoller = targetElement.closest(`[data-spoller]`);
    const spollerBody = spoller.querySelector(`[data-spoller-body]`);
    const spollerToggler = spoller.querySelector(`[data-spoller-toggler]`);

    if (spoller.classList.contains("active")) {
      spoller.classList.remove("active");
      spollerBody.classList.remove("active");
      spollerToggler.classList.remove("active");

      spollerBody.style.height = "0";
    } else {
      const activeSpoller = spollers.querySelector(`[data-spoller].active`);
      const activeToggler = spollers.querySelector(`[data-spoller-toggler].active`);
      const activeBody = spollers.querySelector(`[data-spoller-body].active`);

      if (activeSpoller) {
        activeSpoller.classList.remove("active");
        activeToggler.classList.remove("active");
        activeBody.classList.remove("active");
        activeBody.style.height = "0";
      }

      spoller.classList.add("active");
      spollerBody.classList.add("active");
      targetElement.classList.add("active");

      spollerBody.style.height = spollerBody.scrollHeight + `px`;
    }
  }
}
