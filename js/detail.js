document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Light and Dark Mode Toggle ---
  const themeToggleUrl = document.getElementById("themeToggle");

  if (themeToggleUrl) {
    themeToggleUrl.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");

      // Update text based on mode
      if (document.body.classList.contains("light-mode")) {
        themeToggleUrl.innerText = "Dark Mode";
      } else {
        themeToggleUrl.innerText = "Light Mode";
      }
    });
  }

  // --- 2. Another JS Functionality: Interactive Episode Selection ---
  // Clicking an episode makes it "active" and could theoretically load its details into the player
  const episodes = document.querySelectorAll(".episode-item");

  episodes.forEach((episode) => {
    episode.addEventListener("click", function () {
      // Remove active class from all
      episodes.forEach((ep) => ep.classList.remove("active-ep"));
      // Add active class to clicked
      this.classList.add("active-ep");

      // Optionally logic to scroll to top or update Hero could go here
    });
  });

  // --- 3. Video Modal Functionality ---
  const modal = document.getElementById("videoModal");
  const playBtn = document.getElementById("playBtn");
  const closeBtn = document.querySelector(".close-video");
  const playIcons = document.querySelectorAll(".play-icon");

  const openModal = () => {
    modal.classList.add("active");
  };

  const closeModal = () => {
    modal.classList.remove("active");
  };

  // Open modal from hero play button
  if (playBtn) {
    playBtn.addEventListener("click", openModal);
  }

  // Open modal from any episode play icon (stopping propagation so it doesn't just select the episode)
  playIcons.forEach((icon) => {
    icon.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevents the episode-item click listener from firing
      openModal();
    });
  });

  // Close modal when clicking the X
  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  // Close modal when clicking outside the video content area
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Also close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
});
