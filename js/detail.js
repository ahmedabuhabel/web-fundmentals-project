document.addEventListener("DOMContentLoaded", () => {
  // 1. Interactive Episode Selection.
  const episodes = document.querySelectorAll(".episode-item");

  episodes.forEach((episode) => {
    episode.addEventListener("click", function () {
      episodes.forEach((ep) => ep.classList.remove("active-ep"));
      this.classList.add("active-ep");
    });
  });

  // 2. Video Modal Functionality.
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

  if (playBtn) {
    playBtn.addEventListener("click", openModal);
  }

  playIcons.forEach((icon) => {
    icon.addEventListener("click", (e) => {
      e.stopPropagation();
      openModal();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
});
