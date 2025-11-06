(function () {
  const video = document.getElementById("heroVideo");
  const carousel = document.getElementById("heroCarousel");
  const slides = carousel.querySelectorAll(".carousel-item");
  if (!video || !carousel || slides.length === 0) return;

  let current = 0;
  const fadeDuration = 1000; // ms
  const imageDuration = 4000; // ms

  const magicTap = document.getElementById('magicTap');

  magicTap.addEventListener('click', () => {
    video.muted = false;
    video.play();

    // Add confetti (optional)
    if (typeof confetti !== 'undefined') {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    }

    // Fade out the message
    magicTap.classList.add('fade-out');
  });
  function showNextImage() {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }

  function startCarousel() {
    video.pause();
    video.style.transition = "opacity 0.4s ease";
    video.style.opacity = 0;

    setTimeout(() => {
      video.style.display = "none";
      carousel.classList.remove("hidden");
      carousel.style.opacity = 1;

      setInterval(showNextImage, imageDuration);
    }, fadeDuration);
  }

  // Poster → video after 6s
  setTimeout(() => {
    video.play().catch(startCarousel);
  }, 3000);

  video.addEventListener("ended", startCarousel);
  video.addEventListener("error", startCarousel);
  video.addEventListener("click", startCarousel);
})();
