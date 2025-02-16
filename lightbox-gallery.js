// gallery.js

// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', function () {
    // Select all gallery images and add the Lightbox2 data attributes
    const galleryItems = document.querySelectorAll('.gallery-item img');
    
    galleryItems.forEach(item => {
        // Set the Lightbox2 attributes to enable the gallery functionality
        item.setAttribute('data-lightbox', 'gallery');  // 'gallery' can be a unique identifier for a group of images
        item.setAttribute('data-title', item.alt);  // Optional: Add image title from the alt attribute
    });
});
