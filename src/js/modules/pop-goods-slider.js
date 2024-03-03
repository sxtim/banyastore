import 'keen-slider/keen-slider.min.css'
import KeenSlider from "keen-slider";

function navigationPop(slider) {
    let wrapper, dots, arrowLeft, arrowRight
    // let timeout
    // let mouseOver = false
    // function clearNextTimeout() {
    //     clearTimeout(timeout)
    // }
    // function nextTimeout() {
    //     clearTimeout(timeout)
    //     if (mouseOver) return
    //     timeout = setTimeout(() => {
    //         slider.next()
    //     }, 2000)
    // }
    // slider.on("created", () => {
    //     slider.container.addEventListener("mouseover", () => {
    //         mouseOver = true
    //         clearNextTimeout()
    //     })
    //     slider.container.addEventListener("mouseout", () => {
    //         mouseOver = false
    //         nextTimeout()
    //     })
    //     nextTimeout()
    // })
    // slider.on("dragStarted", clearNextTimeout)
    // slider.on("animationEnded", nextTimeout)
    // slider.on("updated", nextTimeout)

    function markup(remove) {
        wrapperMarkup(remove)
        dotMarkup(remove)
        arrowMarkup(remove)
    }

    function removeElement(elment) {
        elment.parentNode.removeChild(elment)
    }
    function createDiv(className) {
        var div = document.createElement("div")
        var classNames = className.split(" ")
        classNames.forEach((name) => div.classList.add(name))
        return div
    }

    function arrowMarkup(remove) {
        if (remove) {
            removeElement(arrowLeft)
            removeElement(arrowRight)
            return
        }
        arrowLeft = createDiv("arrow-pop arrow-pop--left")
        arrowLeft.addEventListener("click", () => slider.prev())
        arrowRight = createDiv("arrow-pop arrow-pop--right")
        arrowRight.addEventListener("click", () => slider.next())

        wrapper.appendChild(arrowLeft)
        wrapper.appendChild(arrowRight)
    }

    function wrapperMarkup(remove) {
        if (remove) {
            var parent = wrapper.parentNode
            while (wrapper.firstChild)
                parent.insertBefore(wrapper.firstChild, wrapper)
            removeElement(wrapper)
            return
        }
        wrapper = createDiv("popular-goods__slider-wrapper")
        slider.container.parentNode.appendChild(wrapper)
        wrapper.appendChild(slider.container)
    }

    function dotMarkup(remove) {
        if (remove) {
            removeElement(dots)
            return
        }
        dots = createDiv("dots-pop")
        slider.track.details.slides.forEach((_e, idx) => {
            var dot = createDiv("dot-pop")
            dot.addEventListener("click", () => slider.moveToIdx(idx))
            dots.appendChild(dot)
        })
        wrapper.appendChild(dots)
    }

    function updateClasses() {
        var slide = slider.track.details.rel
        slide === 0
            ? arrowLeft.classList.add("arrow--disabled")
            : arrowLeft.classList.remove("arrow--disabled")
        slide === slider.track.details.slides.length - 1
            ? arrowRight.classList.add("arrow--disabled")
            : arrowRight.classList.remove("arrow--disabled")
        Array.from(dots.children).forEach(function (dot, idx) {
            idx === slide
                ? dot.classList.add("dot-pop--active")
                : dot.classList.remove("dot-pop--active")
        })
    }

    slider.on("created", () => {
        markup()
        updateClasses()
    })
    slider.on("optionsChanged", () => {
        console.log(2)
        markup(true)
        markup()
        updateClasses()
    })
    slider.on("slideChanged", () => {
        updateClasses()
    })
    slider.on("destroyed", () => {
        markup(true)
    })
}

var slider = new KeenSlider("#popular-goods__slider", {
    slides: {
        perView: 4,
        spacing: 15,
    },
    breakpoints: {
        '(max-width: 1200px)': {
            slides: {
                perView: 3,
                spacing: 15,
            },
        },
        '(max-width: 650px)': {
            slides: {
                perView: 2.3,
                spacing: 0,
            },
        },
    },
    loop: true,
}, [navigationPop] );