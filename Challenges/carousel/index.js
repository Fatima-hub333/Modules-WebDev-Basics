const slides = document.getElementsByClassName("carousel-item")
let slidePosition = 0
const totalSlides = slides.length

document.getElementById('carousel-button-prev').addEventListener("click", moveToNextSlide)

document.getElementById('carousel-button-next').addEventListener("click", moveToPrevSlide)