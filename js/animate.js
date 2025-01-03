document.addEventListener('DOMContentLoaded', function () {
    const myCarousel = document.getElementById('sightcarousel');
  
    // Function to apply animations to the active carousel item
    function applyAnimationToActiveSlide() {
      const activeItem = document.querySelector('.carousel-item.active');
      const activeCaption = activeItem.querySelector('.carousel-caption');
  
      if (activeCaption) {
        const line1 = activeCaption.querySelector('.line1');
        const line2 = activeCaption.querySelector('.line2');
        const donateButton = activeCaption.querySelector('.donate_button');
  
        // Apply the fade-in animations for each element
        if (line1) {
          line1.classList.add('fade-down');
          line1.style.opacity = 1;  // Ensure it's visible
        }
        if (line2) {
          line2.classList.add('fade-up');
          line2.style.opacity = 1;  // Ensure it's visible
        }
        if (donateButton) {
          donateButton.classList.add('fade-up');
          donateButton.style.opacity = 1;  // Ensure it's visible
        }
      }
    }
  
    // Apply animations on page load for the first active slide
    applyAnimationToActiveSlide();
  
    // Listen for when the slide transition finishes
    myCarousel.addEventListener('slid.bs.carousel', function () {
      const carouselCaptions = document.querySelectorAll('.carousel-caption');
  
      // Reset all animations and opacity on the captions
      carouselCaptions.forEach(caption => {
        const line1 = caption.querySelector('.line1');
        const line2 = caption.querySelector('.line2');
        const donateButton = caption.querySelector('.donate_button');
  
        // Reset opacity and remove previous animation classes
        line1.style.opacity = 0;
        line2.style.opacity = 0;
        donateButton.style.opacity = 0;
  
        line1.classList.remove('fade-up', 'fade-down');
        line2.classList.remove('fade-up', 'fade-down');
        donateButton.classList.remove('fade-up', 'fade-down');
      });
  
      // Apply the appropriate animations for the new slide
      applyAnimationToActiveSlide();
    });
  });
  