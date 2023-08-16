export function isWebp() {
  function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    if (support == true) {
      document.querySelector("body").classList.add("webp");
    } else {
      document.querySelector("body").classList.add("no-webp");
    }
  });
}

export function setActiveToggler(clickedElem, toToggleElem) {
  clickedElem.onclick = () => toToggleElem.classList.toggle("active");
}

export function findParent(element, cls) {
  while ((element = element.parentElement) && !element.classList.contains(cls));
  return element;
}

export function tagTextInTitleAttr() {
  const items = document.querySelectorAll(`[title="@tag-text"]`);
  items.forEach((item, index) => {
    const text = item.textContent;
    item.title = text ? text : "";
  });
}

export function isMailValid(email) {
  const regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexp.test(email);
}

export const isFormChecked = (...checks) => {
  const result = checks.filter((check) => {
    return !check.checked;
  });
  if (result[0]) {
    return false;
  } else {
    return true;
  }
};

export const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  },
};

export let headerVisibleToggler = (header) => {
  let lastScroll = 0;
  const scrollPosition = () => window.scrollY;
  return (header) => {
    if (scrollPosition() > lastScroll && !header.classList.contains("hidden")) {
      header.classList.add("hidden");
    } else if (scrollPosition() < lastScroll && header.classList.contains("hidden")) {
      header.classList.remove("hidden");
    }
    lastScroll = scrollPosition();
  };
};

headerVisibleToggler = headerVisibleToggler();
