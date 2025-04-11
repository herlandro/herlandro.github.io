document.addEventListener('DOMContentLoaded', () => {
    const marqueeContainer = document.querySelector('.marquee-container');
    const marquee = document.querySelector('.marquee');
    const techIcons = document.querySelectorAll('.tech-icon');
    const appCards = document.querySelectorAll('.app-card');
    let isDown = false;
    let startX;
    let scrollLeft;
    let activeFilter = null;

    // Drag functionality
    marqueeContainer.addEventListener('mousedown', (e) => {
        if (e.target.closest('.tech-icon')) return; // Don't initiate drag if clicking on tech icon
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
        if (e.target.closest('.tech-icon')) return;
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

    // Filter functionality
    techIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.preventDefault();
            const techClass = icon.querySelector('i').classList[1].replace('fa-', '');
            
            // Toggle active state
            if (activeFilter === techClass) {
                // If clicking the same filter, show all cards
                activeFilter = null;
                techIcons.forEach(i => i.classList.remove('active'));
                appCards.forEach(card => {
                    card.style.display = 'flex';
                });
            } else {
                // Apply new filter
                activeFilter = techClass;
                techIcons.forEach(i => i.classList.remove('active'));
                icon.classList.add('active');
                
                // Filter cards
                appCards.forEach(card => {
                    const tags = card.querySelectorAll('.tech-tag');
                    const hasTag = Array.from(tags).some(tag => 
                        tag.classList.contains(techClass)
                    );
                    card.style.display = hasTag ? 'flex' : 'none';
                });
            }
        });
    });
}); 