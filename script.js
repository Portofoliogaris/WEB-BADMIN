let slideIndex = 0;

function showSlides() {
  const slides = document.querySelector('.carousel-slide');
  const totalSlides = slides.children.length;
  slideIndex = (slideIndex + 1) % totalSlides;
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

setInterval(showSlides, 3000);

document.querySelector('.prev').addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + slides.children.length) % slides.children.length;
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
});

document.querySelector('.next').addEventListener('click', showSlides);
