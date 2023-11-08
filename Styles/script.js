


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


  