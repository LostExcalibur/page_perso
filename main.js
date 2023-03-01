// Handle Navigation

let activeIndex = 0;

const slides = document.getElementsByTagName("article");

const handleAboutClick = () => {
    const newIndex = 0;

    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
        nextSlide = document.querySelector(`[data-index="${newIndex}"]`);
}