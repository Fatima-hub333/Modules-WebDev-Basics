const slides = document.getElementsByClassName('carousel-item')
let slidePosition = 0
const totalSliedes = slides.length

document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide)
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide)

function moveToNextSlide() {
  console.log('moving to next slide')
}

function moveToPrevSlide() {
  console.log('moving to prev slide')
}

console.log(totalSliedes)