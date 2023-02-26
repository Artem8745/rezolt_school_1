function slidesPlugin(activeSlide = 0) {
    const slides = document.querySelectorAll('.slide')

slides[activeSlide].classList.add('active')

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()
        
        slide.classList.add('active')
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}

}

setTimeout(() => slidesPlugin(), 2000)
setTimeout(() => slidesPlugin(1), 5000)
setTimeout(() => slidesPlugin(2), 7500)
setTimeout(() => slidesPlugin(3), 10000)
setTimeout(() => slidesPlugin(4), 12500)