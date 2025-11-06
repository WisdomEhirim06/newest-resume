import { tools } from './data.js';

const palette = [
  ['#00A8FF', '#6EE7B7'], // cyan -> mint
  ['#FF6B6B', '#FFC857'], // coral -> warm yellow
  ['#7C3AED', '#06B6D4'], // purple -> teal
  ['#F97316', '#FF6B6B'], // orange -> coral
  ['#06B6D4', '#6366F1'], // teal -> indigo
  ['#F59E0B', '#EF4444'], // gold -> red
];

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('toolsOrbit');
  if (!container) return;
  container.innerHTML = '';

  tools.forEach((name, i) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'tool-card';
    card.setAttribute('aria-label', name);
    card.innerHTML = `<span class="tool-light-text">${name}</span>`;

    // pick gradient pair cyclically
    const g = palette[i % palette.length];
    card.style.backgroundImage = `linear-gradient(120deg, ${g[0]}, ${g[1]}, ${g[0]})`;
    card.style.backgroundSize = '200% 100%';
    card.style.animation = `softFloatTools 5.5s ease-in-out ${i * 0.12}s infinite, shimmerMove 6.5s linear ${i * 0.08}s infinite`;

    // keyboard accessibility - simple focus state
    card.addEventListener('focus', () => {
      card.style.boxShadow = '10px 10px 0 rgba(11,23,36,0.08)';
      card.style.transform = 'translateY(-6px) scale(1.03)';
    });
    card.addEventListener('blur', () => {
      card.style.boxShadow = '';
      card.style.transform = '';
    });

    container.appendChild(card);
  });
});
