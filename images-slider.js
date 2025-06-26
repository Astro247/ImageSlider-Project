const images = ["1.png", "2.jpg", "3.jpg", "4.png", "5.png", "6.jpg"];
let currentIndex = 0;

const slides = {
    left: document.querySelector('.slide.left img'), /* Prende il primo elemento html con la classe ".slide.left" in particolare al tag <img> */
    center: document.querySelector('.slide.center img'),
    right: document.querySelector('.slide.right img'),
};

function updateSlider() {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    const nextIndex = (currentIndex + 1) % images.length;

    slides.left.src = images[prevIndex];
    slides.center.src = images[currentIndex];
    slides.right.src = images[nextIndex];
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
}

updateSlider();
