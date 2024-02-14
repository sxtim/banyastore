const slider = document.querySelector('.top-slider');
const sliderImages = document.querySelectorAll('.top-slider__img');
const sliderLine = document.querySelector('.slider__line');

const sliderBtnNext = document.querySelector('.slider__btn-next');
const sliderBtnPrev = document.querySelector('.slider__btn-prev');

let sliderCount = 0;
let sliderWidth = slider.offsetWidth;

sliderBtnNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlide);

function nextSlide() {
    sliderCount++;
    if (sliderCount >= sliderImages.length) {
        sliderCount = 0;
    }
    rollSlide();
}

function prevSlide() {
    sliderCount--;
    if (sliderCount <= 0) {
        sliderCouint = sliderImages.length - 1;
    }
    rollSlide();
}

function rollSlide() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

setInterval(() => {
    nextSlide()
}, 3000);