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

// Opening and closing menu
function openMenu() {
  menu.style.display = "block";
  body.classList.add("toggle");
}

function closeMenu() {
  menu.style.display = "none";
  body.classList.remove("toggle");
}

open.addEventListener("click", openMenu);
close.addEventListener("click", closeMenu);

let toggle = false;
// Opening and closing menu tabs and rotating arrows
function openFeatures() {
  featuresTabs.classList.toggle("features-tabs-open");
  arrowFeatures.classList.toggle("arrow-features-active");
}

features.addEventListener("click", openFeatures);

function openCompany() {
  companyTabs.classList.toggle("company-tabs-open");
  arrowCompany.classList.toggle("arrow-company-active");
}

company.addEventListener("click", openCompany);
