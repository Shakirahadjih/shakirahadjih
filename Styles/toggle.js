  // Toggle 

  const paragraph = document.getElementById("scaling-paragraph");
  const toggleButton = document.getElementById("toggle-button");
  let isScaled = false;
  
  toggleButton.addEventListener("click", () => {
    if (isScaled) {
      paragraph.style.transform = "scale(1,1)";
    } else {
      paragraph.style.transform = "scale(0,1)";
    }
    isScaled = !isScaled;
  });

  // hover on work-items

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