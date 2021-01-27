import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
  document.body.classList.remove("body--preload");
});

const sections = document.querySelectorAll(".section--js");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `sectionAppear 1s 0.5s both ease-in-out`;
    } else {
      entry.target.style.animation = "none";
    }
  });
});
sections.forEach((section) => {
  observer.observe(section);
});

const buttonMenu = document.querySelector(".navigation__menu");
const menuList = document.querySelector(".navigation__list--js");

const gooseButton = document.querySelector(".section__button--goose");
const gooseTile = document.querySelector(".section__tile--goose");
const gooseLink = document.querySelector(".section__link--goose");
const sababaButton = document.querySelector(".section__button--sababa");
const sababaTile = document.querySelector(".section__tile--sababa");
const sababaLink = document.querySelector(".section__link--sababa");
const mercyButton = document.querySelector(".section__button--mercy");
const mercyTile = document.querySelector(".section__tile--mercy");
const mercyLink = document.querySelector(".section__link--mercy");

buttonMenu.addEventListener("click", () => {
  menuList.classList.toggle("navigation__list--open");
  buttonMenu.classList.toggle("navigation__menu");
  buttonMenu.classList.toggle("navigation__menu--open");
});

gooseButton.addEventListener("click", () => {
  gooseButton.classList.toggle("section__button--goose-rotated");
  gooseTile.classList.toggle("section__tile--goose-open");
  gooseLink.classList.toggle("section__link--goose-open");
});
sababaButton.addEventListener("click", () => {
  sababaButton.classList.toggle("section__button--sababa-rotated");
  sababaTile.classList.toggle("section__tile--sababa-open");
  sababaLink.classList.toggle("section__link--sababa-open");
});
mercyButton.addEventListener("click", () => {
  mercyButton.classList.toggle("section__button--mercy-rotated");
  mercyTile.classList.toggle("section__tile--mercy-open");
  mercyLink.classList.toggle("section__link--mercy-open");
});
