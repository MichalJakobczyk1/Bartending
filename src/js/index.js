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

buttonMenu.addEventListener("click", () => {
  menuList.classList.toggle("navigation__list--open");
  buttonMenu.classList.toggle("navigation__menu");
  buttonMenu.classList.toggle("navigation__menu--open");
});
