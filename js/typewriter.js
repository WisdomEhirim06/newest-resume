// assets/js/typewriter.js
const lines = [
  "Do you know that Wisdom is a Full-Stack Developer?",
  "Do you know that Wisdom is never satisfied with 'it works' ?",
  "I want it smooth, inituitive and meaningful for the user.",
  "Do you know that Wisdom takes research seriously?",
  "I study the why behind every request and tool to have a solid foundation.",
  "I can help turn your ideas into a product",
  "Websites, APIs, Databases... you name it",
  "Ecommerce, Social, Saas, Marketplaces... you name it",
  "Do you know that you should hire Wisdom?"
];

const el = document.getElementById('typewrap');
let i = 0, j = 0, forward = true;

function colorForIndex(k){
  // cycle through pleasing colors
  const colors = ['#E91E63','#00A8FF','#FF6B35','#8E24AA'];
  return colors[k % colors.length];
}

function tick(){
  if(!el) return;
  const full = lines[i];
  if(forward){
    j++;
    el.textContent = full.slice(0,j);
    el.style.color = colorForIndex(j);
    if(j >= full.length){
      forward = false;
      setTimeout(tick, 900);
      return;
    }
  } else {
    j--;
    el.textContent = full.slice(0,j);
    if(j <= 0){
      forward = true;
      i = (i + 1) % lines.length;
    }
  }
  setTimeout(tick, forward ? 36 : 18);
}

// small bounce at loop round
setTimeout(() => { if(el) tick(); }, 480);
