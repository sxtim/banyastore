import mobileNav from './modules/mobile-nav.js';
mobileNav();

// import  './modules/slider-custom';
import  './modules/sliders';
import  './modules/product-detail-tabs';
import  './modules/cart-discount-acc.js';
// import  './modules/validate.js';
// import  './modules/masks.js';
// import './modules/mobile-nav';
import './modules/filters';


const element = document.querySelector('.mobile-nav-btn')

function handleClickFunction(event) {
    alert('Именованная функция')
}
element.addEventListener('click', handleClickFunction)





// let cardCommentHeight = document.querySelector(".card-comment");
//
// function getHeight(element) {
//     element.style.visibility = "hidden";
//     document.body.appendChild((element));
//     let height = element.offsetHeight + 0;
//     document.body.removeChild(element);
//     element.style.visibility = "visible";
//     return height;
// }
//
//
//
//
// // console.log(document.querySelector(".card-comment").scrollHeight)
// console.log(getHeight(cardCommentHeight));


