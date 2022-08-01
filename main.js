// Variables
// Overlay variable
const overlay = document.querySelector(".overlay");

// Menu variables
const menu = document.querySelector(".menu");
const open = document.querySelector(".open");
const close = document.querySelector(".close");
const body = document.querySelector("body");

// Menu tabs variables
const features = document.querySelector(".features-click");
const featuresTabs = document.querySelector(".features-tabs");
const company = document.querySelector(".company-click");
const companyTabs = document.querySelector(".company-tabs");

// Menu tabs arrows variables
const arrowFeatures = document.querySelector(".arrow-features");
const arrowCompany = document.querySelector(".arrow-company");

// Opening menu
function openMenu() {
  menu.classList.add("menu-active");
  overlay.classList.add("overlay-active");
}
open.addEventListener("click", openMenu);

// Closing menu + cloing all the other elements
function closeMenu() {
  menu.classList.remove("menu-active");
  body.classList.remove("toggle");
  featuresTabs.classList.remove("features-tabs-open");
  arrowFeatures.classList.remove("arrow-features-active");
  companyTabs.classList.remove("company-tabs-open");
  arrowCompany.classList.remove("arrow-company-active");
  overlay.classList.remove("overlay-active");
}
close.addEventListener("click", closeMenu);

// Opening and closing menu tabs and rotating arrows
function openFeatures() {
  if (document.body.clientWidth < 1080) {
    featuresTabs.classList.toggle("features-tabs-open");
    arrowFeatures.classList.toggle("arrow-features-active");
  } else {
    document
      .querySelector(".features-tabs-drop")
      .classList.toggle("features-tabs-drop-active");
    arrowFeatures.classList.toggle("arrow-features-active");
  }
}

features.addEventListener("click", openFeatures);

function openCompany() {
  if (document.width < 1080) {
    companyTabs.classList.toggle("company-tabs-open");
    arrowCompany.classList.toggle("arrow-company-active");
  } else {
    document
      .querySelector(".company-tabs-drop")
      .classList.toggle("company-tabs-drop-active");
    arrowCompany.classList.toggle("arrow-company-active");
  }
}

company.addEventListener("click", openCompany);
