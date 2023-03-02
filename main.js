// Handle Navigation

let activeIndex = 0;

const slides = document.getElementsByTagName("article");

const handleAboutClick = () => {
    let nextIndex = 0;
    console.log(activeIndex, nextIndex);

    if (activeIndex == nextIndex) {
        return;
    }

    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
        nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

    currentSlide.dataset.status = "after"

    nextSlide.dataset.status = "becoming-active-from-before";

    setTimeout(() => {
        nextSlide.dataset.status = "active";
        activeIndex = nextIndex;
    });
}

const handleProjectsClick = () => {
    let nextIndex = 1;
    console.log(activeIndex, nextIndex);

    if (activeIndex == nextIndex) {
        return;
    }

    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
        nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

    if (nextIndex > activeIndex) {
        console.log("Going to the right");
        currentSlide.dataset.status = "before";

        nextSlide.dataset.status = "becoming-active-from-after";

        setTimeout(() => {
            nextSlide.dataset.status = "active";
            activeIndex = nextIndex;
        });
    } else {
        console.log("Going to the left");
        currentSlide.dataset.status = "after";

        nextSlide.dataset.status = "becoming-active-from-before";

        setTimeout(() => {
            nextSlide.dataset.status = "active";
            activeIndex = nextIndex;
        });
    }
}

const handleContactClick = () => {
    let nextIndex = 2;
    console.log(activeIndex, nextIndex);

    if (activeIndex == nextIndex) {
        return;
    }

    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
        nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

    currentSlide.dataset.status = "before"

    nextSlide.dataset.status = "becoming-active-from-after";

    setTimeout(() => {
        nextSlide.dataset.status = "active";
        activeIndex = nextIndex;
    });
}
