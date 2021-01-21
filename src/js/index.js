import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
  document.body.classList.remove("body--preload");
});

const buttonMenu = document.querySelector(".navigation__menu");
const menuList = document.querySelector(".navigation__list--js");

const gooseButton = document.querySelector(".section__button--goose");
const sababaButton = document.querySelector(".section__button--sababa");
const mercyButton = document.querySelector(".section__button--mercy");

buttonMenu.addEventListener("click", () => {
  menuList.classList.toggle("navigation__list--open");
  buttonMenu.classList.toggle("navigation__menu");
  buttonMenu.classList.toggle("navigation__menu--open");
});

gooseButton.addEventListener("click", () => {
  document.documentElement.style.setProperty(
    "--translate-goose",
    "translateY(0%)"
  );
  document.documentElement.style.setProperty("--opacity-goose", "1");
});
sababaButton.addEventListener("click", () => {
  document.documentElement.style.setProperty(
    "--translate-sababa",
    "translateY(0%)"
  );
  document.documentElement.style.setProperty("--opacity-sababa", "1");
});
mercyButton.addEventListener("click", () => {
  document.documentElement.style.setProperty(
    "--translate-mercy",
    "translateY(0%)"
  );
  document.documentElement.style.setProperty("--opacity-mercy", "1");
});
