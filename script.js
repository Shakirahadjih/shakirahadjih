const links = document.querySelectorAll('.work-list a[data-hover-text]');

links.forEach(link => {
    link.addEventListener('mouseover', (event) => {
        const hoverText = link.getAttribute('data-hover-text');

        // Check if there's already a floating bar, and if not, create one
        if (!document.querySelector('.floating-bar')) {
            const floatingBar = document.createElement('div');
            floatingBar.textContent = hoverText;
            floatingBar.classList.add('floating-bar');
            document.body.appendChild(floatingBar);
        }

        // Set the initial position of the floating bar near the mouse cursor
        const floatingBar = document.querySelector('.floating-bar');
        floatingBar.style.top = `${event.clientY}px`;
        floatingBar.style.left = `${event.clientX}px`;

        // Update the position as the mouse moves
        document.addEventListener('mousemove', (event) => {
            floatingBar.style.top = `${event.clientY}px`;
            floatingBar.style.left = `${event.clientX}px`;
        });
    });

    link.addEventListener('mouseout', () => {
        const floatingBar = document.querySelector('.floating-bar');
        if (floatingBar) {
            floatingBar.remove();
        }

        // Remove the mousemove event listener when the user stops hovering over the link
        document.removeEventListener('mousemove', (event) => {});
    });
});


// carousel 
// Initialize the Owl Carousel
const carousel = document.querySelector(".carousel");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const videoContainers = document.querySelectorAll(".video-container");
  let currentIndex = 0;
  let isTransitioning = false;

  // Initially hide the "Previous" button
  prevButton.style.opacity = 0;

  // Show/hide the navigation buttons based on the current index
  function updateButtons() {
    if (currentIndex === 0) {
      prevButton.style.opacity = 0;
      nextButton.style.opacity = 1;
    } else if (currentIndex === videoContainers.length - 1) {
      prevButton.style.opacity = 1;
      nextButton.style.opacity = 0;
    } else {
      prevButton.style.opacity = 1;
      nextButton.style.opacity = 1;
    }
  }

  prevButton.addEventListener("click", () => {
    if (!isTransitioning && currentIndex > 0) {
      currentIndex--;
      updateCarousel();
      updateButtons();
    }
  });

  nextButton.addEventListener("click", () => {
    if (!isTransitioning && currentIndex < videoContainers.length - 1) {
      currentIndex++;
      updateCarousel();
      updateButtons();
    }
  });

  function updateCarousel() {
    isTransitioning = true;
    const translateX = -currentIndex * 71; // Adjust as needed
    carousel.style.transform = `translateX(${translateX}%)`;

    // After the transition is complete, reset the transitioning flag
    carousel.addEventListener("transitionend", () => {
      isTransitioning = false;
    });
  }