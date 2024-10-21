const slides = [
    {
        image: 'graphics/townhallmeeting.jfif',
        title: 'Engage with Your Community',
        description: 'Your voice matters. Stay informed and involved in local government decisions.'
    },
    {
        image: 'graphics/image2.jpg',
        title: 'Stay Informed',
        description: 'Get updates on local events and meetings to stay connected to your community.'
    },
    {
        image: 'graphics/image3.jpg',
        title: 'Make Your Voice Heard',
        description: 'Join advocacy groups and participate in discussions that shape your community.'
    }
];

let currentSlideIndex = 0;

function updateSlide() {
    const slide = slides[currentSlideIndex];
    document.getElementById('slideshow-text').style.backgroundImage = `url(${slide.image})`;
    document.getElementById('slideshow-title').innerText = slide.title;
    document.getElementById('slideshow-description').innerText = slide.description;
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length; // Cycle to the next slide
    updateSlide();
}

function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length; // Cycle to the previous slide
    updateSlide();
}

// Optionally, set an interval to automatically change slides every few seconds
setInterval(nextSlide, 5000); // Change slide every 5 seconds

// Initialize the first slide
updateSlide();
