(function(){
"use strict";

/* ============ DATA ============ */
const STACK = [
  {cat:"Frontend Technologies",items:["React","Next.js","Vue.js","Svelte","Tailwind CSS","TypeScript","JavaScript","Vite","HTML5","CSS3","Framer Motion","Bootstrap"]},
  {cat:"Backend Technologies",items:["Node.js","Express.js","NestJS","Python","Django","FastAPI","Go","Discord.js","GraphQL","REST API"]},
  {cat:"Databases & ORMs",items:["MongoDB","PostgreSQL","MySQL","Redis","SQLite","Prisma","Firebase","Supabase"]},
  {cat:"Tools & Infrastructure",items:["Git","GitHub","Docker","Linux","Cloudflare","Vercel","AWS","Figma","Postman","Bash","Nginx"]}
];

const ICONS = {
  "React":"⚛️","Next.js":"▲","Vue.js":"🟢","Svelte":"🔥","Tailwind CSS":"💨","TypeScript":"🔷","JavaScript":"⚡","Vite":"⚡","HTML5":"📄","CSS3":"🎨","Framer Motion":"✨","Bootstrap":"🅱️",
  "Node.js":"🟢","Express.js":"🚂","NestJS":"🔺","Python":"🐍","Django":"🎸","FastAPI":"⚡","Go":"🔵","Discord.js":"💬","GraphQL":"◈","REST API":"🔗",
  "MongoDB":"🍃","PostgreSQL":"🐘","MySQL":"🐬","Redis":"🔴","SQLite":"💾","Prisma":"◆","Firebase":"🔥","Supabase":"⚡",
  "Git":"📦","GitHub":"🐙","Docker":"🐳","Linux":"🐧","Cloudflare":"☁️","Vercel":"▲","AWS":"☁️","Figma":"🎨","Postman":"📮","Bash":"🖥️","Nginx":"🌐"
};

const PROJECTS = [
  {name:"FOZO Store",cat:"E-Commerce",year:"2026",color:"#0f3460"},
  {name:"Discord Bot System",cat:"Discord Bot",year:"2026",color:"#533483"},
  {name:"AI Assistant",cat:"AI Platform",year:"2026",color:"#e94560"},
  {name:"Developer Tools",cat:"Web Application",year:"2026",color:"#16213e"},
  {name:"Interactive Platform",cat:"Web Application",year:"2026",color:"#1a1a2e"},
  {name:"Automation Hub",cat:"Automation",year:"2025",color:"#0f3460"},
  {name:"API Gateway",cat:"API",year:"2025",color:"#533483"},
  {name:"Portfolio 2026",cat:"Portfolio",year:"2026",color:"#e94560"},
  {name:"Chat Bot AI",cat:"AI Tool",year:"2026",color:"#16213e"},
  {name:"Web Dashboard",cat:"Web Application",year:"2025",color:"#1a1a2e"}
];

const ROADMAP = [
  {year:"2021",title:"The Beginning",desc:"Started learning to code with Scratch and basic web technologies. Built first simple pages.",tags:["HTML","CSS"]},
  {year:"2022",title:"Foundation Years",desc:"Dived deeper into web development. Learned JavaScript and built interactive websites.",tags:["HTML","CSS","JavaScript"]},
  {year:"2023",title:"Full-Stack Discovery",desc:"Explored backend development, databases, and started building real applications.",tags:["JavaScript","Node.js","MongoDB"]},
  {year:"2024",title:"Bot Development",desc:"Started building Discord bots and automation systems. Learned API design and real-time systems.",tags:["Discord.js","REST API","WebSocket"]},
  {year:"2025",title:"Modern Stack",desc:"Mastered React, Next.js, TypeScript and modern tooling. Built production applications.",tags:["React","Next.js","TypeScript","Tailwind"]},
  {year:"2026",title:"AI & Innovation",desc:"Integrating AI into projects, building advanced systems and pushing creative boundaries.",tags:["AI","Python","Docker","Cloudflare"]}
];

/* ============ STACK RENDER ============ */
const stackEl = document.getElementById("stackCategories");
STACK.forEach((cat,ci) => {
  const div = document.createElement("div");
  div.className = "reveal";
  div.style.transitionDelay = (ci * .1) + "s";
  div.innerHTML = `
    <div class="stack-cat-header">
      <span class="stack-cat-num">0${ci+1}</span>
      <span class="stack-cat-name">${cat.cat}</span>
    </div>
    <div class="stack-items">
      ${cat.items.map(item => `
        <div class="stack-item">
          <div class="stack-icon">${ICONS[item]||"▪"}</div>
          <div class="stack-label">${item}</div>
        </div>`).join("")}
    </div>`;
  stackEl.appendChild(div);
});

/* ============ PROJECTS RENDER ============ */
const projectsTrack = document.getElementById("projectsTrack");
PROJECTS.forEach((p,i) => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <div class="project-bg" style="background:linear-gradient(135deg,${p.color},${p.color}88,#000)"></div>
    <div class="project-overlay"></div>
    <div class="project-meta">
      <span class="project-tag">${p.cat}</span>
      <span class="project-tag">${p.year}</span>
    </div>
    <div class="project-name">${p.name}</div>`;
  projectsTrack.appendChild(card);
});
const moreEl = document.createElement("div");
moreEl.className = "project-more";
moreEl.textContent = "MORE";
projectsTrack.appendChild(moreEl);

/* ============ ROADMAP RENDER ============ */
const roadmapEl = document.getElementById("roadmapItems");
ROADMAP.forEach((r,i) => {
  const item = document.createElement("div");
  item.className = "roadmap-item reveal";
  item.style.transitionDelay = (i * .1) + "s";
  item.innerHTML = `
    <div class="rm-content">
      <div class="rm-card">
        <div class="rm-year">${r.year}</div>
        <h3>${r.title}</h3>
        <p>${r.desc}</p>
        <div class="rm-tags">${r.tags.map(t=>`<span class="rm-tag">${t}</span>`).join("")}</div>
      </div>
    </div>
    <div class="rm-dot"></div>
    <div class="rm-deco">${r.year}</div>`;
  roadmapEl.appendChild(item);
});

/* ============ SCROLL REVEAL ============ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
      revealObserver.unobserve(e.target);
    }
  });
}, {threshold: 0.1, rootMargin: "0px 0px -50px 0px"});
function observeReveals() {
  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
}
observeReveals();

/* ============ PRELOADER ============ */
setTimeout(() => {
  document.getElementById("preloader").classList.add("done");
  setTimeout(() => document.getElementById("preloader").style.display = "none", 700);
}, 2200);

/* ============ HEADER SCROLL ============ */
const header = document.getElementById("header");
const scrollProgress = document.getElementById("scrollProgress");
const roadmapFill = document.getElementById("roadmapFill");
const navLinks = document.querySelectorAll(".header-nav a");

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  header.classList.toggle("scrolled", y > 50);
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const pct = max > 0 ? y / max : 0;
  scrollProgress.style.transform = `scaleX(${pct})`;

  // Active nav
  let current = "";
  document.querySelectorAll("section[id]").forEach(s => {
    if (y >= s.offsetTop - 300) current = s.id;
  });
  navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + current));

  // Roadmap line fill
  const rmSection = document.getElementById("roadmap");
  if (rmSection) {
    const rmTop = rmSection.offsetTop;
    const rmH = rmSection.offsetHeight;
    if (y > rmTop - window.innerHeight && y < rmTop + rmH) {
      roadmapFill.classList.add("animate");
    }
  }
});

/* ============ THEME TOGGLE ============ */
const themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click", () => {
  const html = document.documentElement;
  const isDark = html.classList.contains("dark");
  html.classList.toggle("dark", !isDark);
  html.classList.toggle("light", isDark);
  html.setAttribute("data-theme", isDark ? "light" : "dark");
  themeBtn.textContent = isDark ? "☾" : "☀";
});

/* ============ MOBILE MENU ============ */
document.getElementById("mobileToggle").addEventListener("click", () => {
  document.getElementById("mobileMenu").classList.add("open");
});
document.getElementById("mobileClose").addEventListener("click", () => {
  document.getElementById("mobileMenu").classList.remove("open");
});
document.querySelectorAll(".mobile-menu a").forEach(a => {
  a.addEventListener("click", () => document.getElementById("mobileMenu").classList.remove("open"));
});

/* ============ CUSTOM CURSOR ============ */
(function () {
  const cur = document.getElementById("cursor");
  const dot = document.getElementById("cursorDot");
  if (!cur || !dot || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  document.documentElement.classList.add("has-cursor");
  let mx = innerWidth / 2, my = innerHeight / 2, cx = mx, cy = my, shown = false;
  document.addEventListener("mousemove", e => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = "translate3d(" + mx + "px," + my + "px,0) translate(-50%,-50%)";
    if (!shown) { shown = true; cx = mx; cy = my; document.body.classList.add("cursor-on"); }
  });
  document.addEventListener("mouseleave", () => { shown = false; document.body.classList.remove("cursor-on"); });
  document.addEventListener("mousedown", () => document.body.classList.add("cursor-down"));
  document.addEventListener("mouseup", () => document.body.classList.remove("cursor-down"));
  (function loop() {
    cx += (mx - cx) * 0.18;
    cy += (my - cy) * 0.18;
    cur.style.transform = "translate3d(" + cx + "px," + cy + "px,0) translate(-50%,-50%)";
    requestAnimationFrame(loop);
  })();
  const hoverSel = "a,button,input,textarea,select,[role='button'],.project-card,.stack-item,.rm-card,.pend-card";
  document.addEventListener("mouseover", e => { if (e.target.closest(hoverSel)) document.body.classList.add("cursor-hover"); });
  document.addEventListener("mouseout", e => { if (e.target.closest(hoverSel)) document.body.classList.remove("cursor-hover"); });
})();

/* ============ DRAGGABLE PENDULUM ============ */
(function(){
  const card = document.getElementById("pendCard");
  const pendulum = document.getElementById("pendulum");
  if (!card || !pendulum) return;
  let isDragging = false, startX = 0, currentRotation = 0;
  card.addEventListener("mousedown", e => {
    isDragging = true;
    startX = e.clientX;
    card.style.cursor = "grabbing";
  });
  document.addEventListener("mousemove", e => {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    currentRotation = Math.max(-25, Math.min(25, dx * .3));
    pendulum.style.transform = `rotate(${currentRotation}deg)`;
    pendulum.style.transformOrigin = "center top";
  });
  document.addEventListener("mouseup", () => {
    if (!isDragging) return;
    isDragging = false;
    card.style.cursor = "grab";
    // Spring back
    const spring = () => {
      currentRotation *= .85;
      if (Math.abs(currentRotation) < .1) { currentRotation = 0; pendulum.style.transform = ""; return; }
      pendulum.style.transform = `rotate(${currentRotation}deg)`;
      pendulum.style.transformOrigin = "center top";
      requestAnimationFrame(spring);
    };
    spring();
  });
  // Touch support
  card.addEventListener("touchstart", e => { isDragging = true; startX = e.touches[0].clientX; }, {passive:true});
  document.addEventListener("touchmove", e => {
    if (!isDragging) return;
    const dx = e.touches[0].clientX - startX;
    currentRotation = Math.max(-25, Math.min(25, dx * .3));
    pendulum.style.transform = `rotate(${currentRotation}deg)`;
    pendulum.style.transformOrigin = "center top";
  }, {passive:true});
  document.addEventListener("touchend", () => {
    if (!isDragging) return;
    isDragging = false;
    const spring = () => {
      currentRotation *= .85;
      if (Math.abs(currentRotation) < .1) { currentRotation = 0; pendulum.style.transform = ""; return; }
      pendulum.style.transform = `rotate(${currentRotation}deg)`;
      pendulum.style.transformOrigin = "center top";
      requestAnimationFrame(spring);
    };
    spring();
  });
})();

/* ============ HORIZONTAL PROJECTS SCROLL ============ */
(function(){
  const scrollEl = document.getElementById("projectsScroll");
  const track = document.getElementById("projectsTrack");
  if (!scrollEl || !track) return;
  const handleWheel = (e) => {
    const rect = scrollEl.getBoundingClientRect();
    if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
      const maxScroll = track.scrollWidth - window.innerWidth;
      if (maxScroll > 0) {
        e.preventDefault();
        track.style.transform = `translateX(${-Math.min(Math.max(track._tx||0 + e.deltaY * .8, -maxScroll), 0)}px)`;
        track._tx = parseFloat(track.style.transform.replace(/[^-\d.]/g,'')) || 0;
      }
    }
  };
  track._tx = 0;
  window.addEventListener("wheel", handleWheel, {passive:false});
  // Touch
  let touchStart = 0, touchTx = 0;
  scrollEl.addEventListener("touchstart", e => {
    touchStart = e.touches[0].clientX;
    touchTx = track._tx || 0;
  }, {passive:true});
  scrollEl.addEventListener("touchmove", e => {
    const dx = e.touches[0].clientX - touchStart;
    const maxScroll = track.scrollWidth - window.innerWidth;
    track._tx = Math.min(Math.max(touchTx + dx, -maxScroll), 0);
    track.style.transform = `translateX(${track._tx}px)`;
  }, {passive:true});
})();

/* ============ CANVAS PARTICLES (HERO) ============ */
(function(){
  const canvas = document.getElementById("heroCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let w, h;
  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const particles = [];
  const count = Math.min(80, Math.floor(w * h / 15000));
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - .5) * .3,
      vy: (Math.random() - .5) * .3,
      r: Math.random() * 1.5 + .5,
      o: Math.random() * .4 + .1
    });
  }

  let mouseX = w / 2, mouseY = h / 2;
  document.addEventListener("mousemove", e => { mouseX = e.clientX; mouseY = e.clientY; });

  function draw() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;

      const dx = mouseX - p.x;
      const dy = mouseY - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 200) {
        p.x -= dx * .002;
        p.y -= dy * .002;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(59,130,246,${p.o})`;
      ctx.fill();
    });

    // Connect nearby
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(59,130,246,${.06 * (1 - dist / 150)})`;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

})();
