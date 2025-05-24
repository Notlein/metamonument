/* scripts.js */
/* Parallax panels */
(function(){
  const panels = document.querySelectorAll('.parallax');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    panels.forEach(el => {
      const speed = parseFloat(el.dataset.speed) || 0;
      el.style.transform = `translateY(${scrollY * speed}px)`;
    });
  });
})();

/* Scroll-mapped video playback */
(function(){
  const vids = document.querySelectorAll('.scroll-video');
  vids.forEach(video => {
    // set sources
    const orig = video.dataset.original;
    const fb = video.dataset.fallback;
    video.querySelector('source[type="video/mp4"]').src = orig;
    video.querySelector('source[type="video/webm"]').src = fb;
    video.load();

    // on scroll, map to playback
    window.addEventListener('scroll', () => {
      const rect = video.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const scrollMax = document.documentElement.scrollHeight - window.innerHeight;
        const fraction = window.scrollY / scrollMax;
        video.currentTime = fraction * video.duration;
      }
    });
  });
})();
