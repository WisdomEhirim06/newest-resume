import { projects, timeline } from './data.js';

// register GSAP plugin
if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

// reveal animations for timeline and projects
function buildProjects() {
  const container = document.getElementById("projectsGrid");
  container.innerHTML = "";

  projects.forEach(p => {
    const card = document.createElement("article");
    card.className =
      "project-card brutal p-4 sm:p-5 pre-reveal flex flex-col gap-4 rounded-lg";

    card.innerHTML = `
      <img 
        src="${p.image}" 
        alt="${p.title}" 
        class="w-full h-40 sm:h-48 object-cover rounded-md border-2 border-[#0B1724]" 
        loading="lazy"
      />

      <div class="flex flex-col gap-1">
        <h4 class="text-lg sm:text-xl font-bold leading-tight text-[#0B1724]">
          ${p.title}
        </h4>

        <div class="text-xs sm:text-sm text-[#6B7280]">
          ${p.subtitle || ""}
        </div>

        <p class="mt-1 text-sm sm:text-base text-[#374151] leading-snug break-words">
          ${p.description}
        </p>
      </div>

      <div class="mt-2 flex flex-wrap gap-3">
        <a 
          href="${p.live}" 
          class="btn-primary brutal px-3 py-1.5 text-sm sm:text-base"
          target="_blank"
        >
          Live
        </a>

        <a 
          href="${p.github}" 
          class="btn-ghost brutal px-3 py-1.5 text-sm sm:text-base"
          target="_blank"
        >
          GitHub
        </a>
      </div>
    `;

    container.appendChild(card);

    // Animations (unchanged)
    if (window.gsap && window.ScrollTrigger) {
      gsap.fromTo(
        card,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 85%" }
        }
      );
    } else {
      setTimeout(() => card.classList.add("revealed"), 120);
    }
  });
}


function buildTimeline(){
  const list = document.getElementById('timelineList');
  list.innerHTML = '';
  timeline.forEach((t, idx) => {
    const node = document.createElement('div');
    node.className = 'timeline-row relative';
    node.innerHTML = `
      <div class="absolute -left-12 top-4 w-6 h-6 rounded-full bg-white border-3 border-[#0B1724]"></div>
      <div class="timeline-card brutal p-5 pre-reveal">
        <div class="text-sm text-[#6B7280]">${t.date} • ${t.type}</div>
        <div class="font-semibold text-lg">${t.title}</div>
        <div class="text-sm text-[#0B1724] font-medium">${t.org}</div>
        <p class="mt-2 text-[#374151]">${t.desc}</p>
      </div>
    `;
    list.appendChild(node);

    const el = node.querySelector('.timeline-card');
    if (window.gsap && window.ScrollTrigger) {
      gsap.fromTo(el, { x: -40, autoAlpha: 0 }, {
        x: 0, autoAlpha:1, duration:.8, ease:'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%' }
      });
    } else {
      setTimeout(()=> el.classList.add('revealed'), idx * 80);
    }
  });
}

// filters
function initFilters(){
  document.querySelectorAll('.filter-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const f = btn.dataset.filter;
      document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('bg-[#00A8FF]','text-white'));
      btn.classList.add('bg-[#00A8FF]','text-white');
      const list = document.getElementById('timelineList');
      list.querySelectorAll('.timeline-row').forEach(row=>{
        const type = row.querySelector('.timeline-card')?.textContent?.toLowerCase() || '';
        if(f === 'all') row.style.display = '';
        else {
          if(type.includes(f)) row.style.display = '';
          else row.style.display = 'none';
        }
      });
    });
  });
}

// initial run
document.addEventListener('DOMContentLoaded', ()=>{
  buildProjects();
  buildTimeline();
  initFilters();
});