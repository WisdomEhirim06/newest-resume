import { galleryImages, tools as toolsList } from './data.js';

// cursor logic (hide on touch)
(function initCursor() {
  const cursor = document.getElementById('cursor');
  if (!cursor) return;

  const isTouchDevice = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;

  if (isTouchDevice) {
    // Hide entirely on touch devices
    cursor.style.display = 'none';
    document.body.style.cursor = 'auto';
    return;
  }

  // Desktop only
  document.body.style.cursor = 'none'; // hide system cursor
  cursor.classList.remove('hidden');

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;

  // smooth animation
  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;
    cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // hover scaling effect
  document.addEventListener('mouseover', (e) => {
    const el = e.target;
    if (el.closest('a, button, [data-clickable="true"]')) {
      cursor.classList.add('cursor-hover');
    } else {
      cursor.classList.remove('cursor-hover');
    }
  });
})();


// mobile nav toggle
(function initNav(){
  const toggle = document.getElementById('mobileToggle');
  const mobile = document.getElementById('mobileNav');
  if(!toggle) return;
  toggle.addEventListener('click', ()=> mobile.classList.toggle('hidden'));
})();

// smooth scroll for nav
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const href = a.getAttribute('href');
    if(href && href.startsWith('#')){
      e.preventDefault();
      const el = document.querySelector(href);
      if(el) {
        window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
      }
    }
  });
});