export function burstConfetti(){
  if(window.confetti){
    confetti({
      particleCount: 110,
      spread: 150,
      origin: { y: 0.6 },
      colors: ['#00A8FF','#FF6B35','#E91E63','#FFC857']
    });
  }
}

// Attach to contact form submit if not already attached
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('contactMsg');
  if(!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    msg.textContent = 'Sending…';
    // Simulate network delay; replace with real POST in production
    await new Promise(r => setTimeout(r, 700));
    msg.textContent = 'Thanks — I’ll reply soon.';
    burstConfetti();
    form.reset();
  });
});
