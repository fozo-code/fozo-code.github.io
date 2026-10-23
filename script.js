(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const root = document.documentElement;

  /* ---------- Loader ---------- */
  const loader = $('#loader');
  const bar = $('#loaderBar');
  const count = $('#loaderCount');
  let progress = 0;
  let pageLoaded = false;

  window.addEventListener('load', () => { pageLoaded = true; });

  const tick = setInterval(() => {
    // Ease toward 90% while loading, then finish once the page is ready
    const target = pageLoaded ? 100 : 90;
    progress += Math.max(1, (target - progress) * 0.08);
    if (progress >= 99.5) progress = 100;
    bar.style.width = progress + '%';
    count.textContent = Math.floor(progress);
    if (progress >= 100) {
      clearInterval(tick);
      setTimeout(() => {
        loader.classList.add('is-done');
        document.body.classList.remove('is-loading');
        revealHero();
      }, 250);
    }
  }, 40);

  function revealHero() {
    $$('.hero .reveal').forEach((el, i) =>
      setTimeout(() => el.classList.add('is-in'), 150 * i));
  }

  /* ---------- Custom cursor ---------- */
  const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
  if (fine) {
    root.classList.add('has-cursor');
    const dot = $('#cursorDot');
    const ring = $('#cursorRing');
    let mx = innerWidth / 2, my = innerHeight / 2;
    let rx = mx, ry = my;

    addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate3d(${mx}px,${my}px,0)`;
      dot.classList.add('is-visible');
      ring.classList.add('is-visible');
    });
    document.addEventListener('mouseleave', () => {
      dot.classList.remove('is-visible');
      ring.classList.remove('is-visible');
    });
    addEventListener('mousedown', () => ring.classList.add('is-down'));
    addEventListener('mouseup', () => ring.classList.remove('is-down'));

    const hoverables = 'a, button, .card, .pack, .chips span';
    document.addEventListener('mouseover', e => {
      if (e.target.closest(hoverables)) ring.classList.add('is-hover');
    });
    document.addEventListener('mouseout', e => {
      if (e.target.closest(hoverables)) ring.classList.remove('is-hover');
    });

    // Ring follows with smooth lag
    (function loop() {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.transform = `translate3d(${rx}px,${ry}px,0)`;
      requestAnimationFrame(loop);
    })();
  }

  /* ---------- Nav scroll state ---------- */
  const nav = $('#nav');
  const onScroll = () => nav.classList.toggle('is-scrolled', scrollY > 30);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Scroll reveal ---------- */
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('is-in');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12 });
  $$('.reveal').forEach(el => { if (!el.closest('.hero')) io.observe(el); });

  /* ---------- Card spotlight ---------- */
  $$('.card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });

  /* ---------- Language toggle (EN / AR) ---------- */
  const langBtn = $('#langBtn');
  let lang = 'en';
  langBtn.addEventListener('click', () => {
    lang = lang === 'en' ? 'ar' : 'en';
    root.lang = lang;
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';
    $$('[data-en]').forEach(el => {
      const v = el.dataset[lang];
      if (v) el.innerHTML = v;
    });
  });
})();
