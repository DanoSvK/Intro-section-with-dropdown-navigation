const menu = document.querySelector(".menu");
const open = document.querySelector(".open");
const close = document.querySelector(".close");
const body = document.querySelector("body");

function openMenu() {
  menu.style.display = "block";
  body.classList.add("toggle");
}

function closeMenu() {
  menu.style.display = "none";
  body.classList.removes("toggle");
}

open.addEventListener("click", openMenu);
close.addEventListener("click", closeMenu);
