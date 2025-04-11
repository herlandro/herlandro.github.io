document.addEventListener('DOMContentLoaded', () => {
    const marqueeContainer = document.querySelector('.marquee-container');
    const marquee = document.querySelector('.marquee');
    let isDown = false;
    let startX;
    let scrollLeft;

    marqueeContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        marqueeContainer.style.cursor = 'grabbing';
        startX = e.pageX - marqueeContainer.offsetLeft;
        scrollLeft = marqueeContainer.scrollLeft;
    });

    marqueeContainer.addEventListener('mouseleave', () => {
        isDown = false;
        marqueeContainer.style.cursor = 'grab';
    });

    marqueeContainer.addEventListener('mouseup', () => {
        isDown = false;
        marqueeContainer.style.cursor = 'grab';
    });

    marqueeContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - marqueeContainer.offsetLeft;
        const walk = (x - startX) * 2;
        marqueeContainer.scrollLeft = scrollLeft - walk;
    });

    // Touch events for mobile devices
    marqueeContainer.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - marqueeContainer.offsetLeft;
        scrollLeft = marqueeContainer.scrollLeft;
    });

    marqueeContainer.addEventListener('touchend', () => {
        isDown = false;
    });

    marqueeContainer.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.touches[0].pageX - marqueeContainer.offsetLeft;
        const walk = (x - startX) * 2;
        marqueeContainer.scrollLeft = scrollLeft - walk;
    });
}); 