!function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);o(1);window.addEventListener("load",(function(e){console.log("page is fully loaded"),document.body.classList.remove("body--preload")}));var n=document.querySelector(".navigation__menu"),i=document.querySelector(".navigation__list--js"),c=document.querySelector(".section__button--goose"),s=document.querySelector(".section__tile--goose"),r=document.querySelector(".section__link--goose"),l=document.querySelector(".section__button--sababa"),u=document.querySelector(".section__tile--sababa"),a=document.querySelector(".section__link--sababa"),_=document.querySelector(".section__button--mercy"),d=document.querySelector(".section__tile--mercy"),g=document.querySelector(".section__link--mercy");n.addEventListener("click",(function(){i.classList.toggle("navigation__list--open"),n.classList.toggle("navigation__menu"),n.classList.toggle("navigation__menu--open")})),c.addEventListener("click",(function(){c.classList.toggle("section__button--goose-rotated"),s.classList.toggle("section__tile--goose-open"),r.classList.toggle("section__link--goose-open")})),l.addEventListener("click",(function(){l.classList.toggle("section__button--sababa-rotated"),u.classList.toggle("section__tile--sababa-open"),a.classList.toggle("section__link--sababa-open")})),_.addEventListener("click",(function(){_.classList.toggle("section__button--mercy-rotated"),d.classList.toggle("section__tile--mercy-open"),g.classList.toggle("section__link--mercy-open")}))},function(e,t,o){}]);