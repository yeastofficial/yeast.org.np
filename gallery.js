// gallery.js

// Lightbox functionality for opening and closing images
document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const lightboxOverlay = document.createElement('div');
    lightboxOverlay.classList.add('lightbox-overlay');
    document.body.appendChild(lightboxOverlay);

    galleryItems.forEach(item => {
        item.addEventListener('click', function () {
            const imgSrc = item.src;
            const lightboxImage = document.createElement('img');
            lightboxImage.src = imgSrc;
            lightboxOverlay.innerHTML = ''; // Clear any previous content
            lightboxOverlay.appendChild(lightboxImage);
            lightboxOverlay.style.display = 'block';
        });
    });

    // Close the lightbox when the overlay is clicked
    lightboxOverlay.addEventListener('click', function () {
        lightboxOverlay.style.display = 'none';
    });
});