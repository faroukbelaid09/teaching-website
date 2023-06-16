const testimonials = document.querySelectorAll(".testimonial")
const btnNext = document.querySelector(".next")
const btnPrevious = document.querySelector(".previous")
btnPrevious.classList.add("hide-button")

let slideIndex = 1
showSlide(slideIndex)

function showSlide(index, direction = "start") {
    if (index > testimonials.length) {
        slideIndex = 1
    }
    if (index < 1) {
        slideIndex = testimonials.length
    }

    if (direction == "right") {
        resetElementStyling(testimonials[slideIndex - 1], "active-right")
    }
    if (direction == "left") {
        resetElementStyling(testimonials[slideIndex - 1], "active-left")
    }
}

btnNext.addEventListener("click", () => {
    resetActiveElementStyling("hide-left")

    showSlide(slideIndex += 1, "right")

    resetButtonState(slideIndex === testimonials.length, slideIndex > 1, btnNext, btnPrevious)
})

btnPrevious.addEventListener("click", () => {
    resetActiveElementStyling("hide-right")

    showSlide(slideIndex -= 1, "left")

    resetButtonState(slideIndex === 1, slideIndex < testimonials.length, btnPrevious, btnNext)
})

function resetActiveElementStyling(classToAdd) {
    testimonials.forEach((ele) => {
        if (ele.classList.contains("active-left") || ele.classList.contains("active-right")
        ) {
            ele.classList.remove("active-left")
            ele.classList.remove("active-right")
            ele.classList.add(classToAdd)
        }
    })
}

function resetElementStyling(ele, classToAdd, opacityDegree) {
    ele.classList.add(classToAdd)
    ele.classList.remove("hide-right")
    ele.classList.remove("hide-left")
}

function resetButtonState(firstCondition, secondConditin, setEle, removeEle) {
    if (firstCondition) {
        setEle.classList.add("hide-button")
        removeEle.classList.remove("hide-button")
    } else if (secondConditin) {
        removeEle.classList.remove("hide-button")
    }
}

//////////////////

const questions = document.querySelectorAll(".question");

questions.forEach((ele) => {

    ele.addEventListener("click", () => {
        ele.classList.toggle("grow-container")

        ele.querySelector(".icon img").classList.toggle("rotated")
    })
})

//////////////////

const toggelBtn = document.querySelector(".toggle-button");
const mainNav = document.querySelector(".main-nav__items");

toggelBtn.addEventListener("click", () => {
    mainNav.classList.toggle("show")
})
