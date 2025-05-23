const track = document.querySelector('.carousel-track');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const slideWidth = window.innerWidth;
const slidesVisible = 3;
let currentIndex = 0;

nextButton.addEventListener('click', () => {
  const totalSlides = track.children.length;
  const maxIndex = Math.ceil(totalSlides / slidesVisible) - 1;
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateSlide();
  }
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlide();
  }
});

function updateSlide() {
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
