!function(){var e={190:function(){const e=document.querySelectorAll(".slider__img"),t=document.querySelector(".slider__line"),n=document.querySelectorAll(".slider__dot"),r=document.querySelector(".slider__btn-next"),o=document.querySelector(".slider__btn-prev");let c,i=0;function u(){c=document.querySelector(".slider").offsetWidth,t.style.width=c*e.length+"px",e.forEach((e=>e.style.width=c+"px")),d()}function d(){t.style.transform=`translateX(${-i*c}px)`}function l(e){n.forEach((e=>e.classList.remove("active-dot"))),n[e].classList.add("active-dot")}window.addEventListener("resize",u),r.addEventListener("click",(function(){i++,i>=e.length&&(i=0),d(),l(i)})),o.addEventListener("click",(function(){i--,i<0&&(i=e.length-1),d(),l(i)})),u(),n.forEach(((e,t)=>{e.addEventListener("click",(()=>{i=t,d(),l(i)}))}))}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var c=t[r]={exports:{}};return e[r](c,c.exports,n),c.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";n(190)}()}();