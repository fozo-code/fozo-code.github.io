:root{
  --bg:#000;
  --bg-2:#0b0b0c;
  --fg:#f5f5f6;
  --muted:#8e8e96;
  --line:rgba(255,255,255,.12);
  --radius:20px;
  --sans:"Inter","Segoe UI",system-ui,-apple-system,sans-serif;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{
  background:var(--bg);color:var(--fg);font-family:var(--sans);
  line-height:1.6;-webkit-font-smoothing:antialiased;overflow-x:hidden;
}
[dir="rtl"],[dir="rtl"] body{font-family:"Cairo",var(--sans)}
a{color:inherit;text-decoration:none}
button{font:inherit;color:inherit;background:none;border:0;cursor:pointer}
em{font-style:normal;color:var(--muted)}
section{padding:120px 6vw;position:relative}
body.is-loading{overflow:hidden}

/* ================= Loader: outlined name that fills ================= */
.loader{
  position:fixed;inset:0;z-index:10000;background:#000;
  display:grid;place-items:center;
  animation:loaderFallback .6s 6.5s forwards; /* safety net if JS is blocked */
}
.loader__word{
  position:relative;display:inline-block;
  font-size:clamp(3rem,10vw,7.5rem);font-weight:800;letter-spacing:-.04em;line-height:1;
  transition:transform .8s cubic-bezier(.7,0,.2,1),opacity .6s,filter .8s;
}
.loader__outline{
  display:block;color:transparent;
  -webkit-text-stroke:1.5px rgba(255,255,255,.95);
}
.loader__fill{
  position:absolute;inset:0;color:#fff;white-space:nowrap;
  clip-path:inset(0 100% 0 0);
}
.loader.is-done{
  opacity:0;visibility:hidden;pointer-events:none;
  transition:opacity .7s .25s,visibility 0s .95s;
}
.loader.is-done .loader__word{transform:scale(.9);filter:blur(10px);opacity:0}
@keyframes loaderFallback{to{opacity:0;visibility:hidden;pointer-events:none}}

/* ================= Custom cursor ================= */
.cursor{position:fixed;top:0;left:0;pointer-events:none;z-index:9999;border-radius:50%;
  opacity:0;transform:translate3d(-100px,-100px,0);
  transition:opacity .3s,width .25s,height .25s,background .25s,border-color .25s,margin .25s}
.cursor--dot{width:8px;height:8px;margin:-4px 0 0 -4px;background:#fff;mix-blend-mode:difference}
.cursor--ring{width:38px;height:38px;margin:-19px 0 0 -19px;border:1.5px solid rgba(255,255,255,.6)}
.cursor.is-visible{opacity:1}
.cursor--ring.is-hover{width:70px;height:70px;margin:-35px 0 0 -35px;background:rgba(255,255,255,.1);border-color:#fff}
.cursor--ring.is-down{width:26px;height:26px;margin:-13px 0 0 -13px}
@media (hover:hover) and (pointer:fine){html.has-cursor,html.has-cursor *{cursor:none!important}}
@media (hover:none),(pointer:coarse){.cursor{display:none}}

/* ================= Top bar ================= */
.top{
  position:fixed;top:0;left:0;right:0;z-index:100;
  display:flex;align-items:center;justify-content:space-between;
  padding:18px 6vw;pointer-events:none;
}
.top>*{pointer-events:auto}
.top__brand{font-weight:800;letter-spacing:-.03em;font-size:1.15rem}
.lang{font-size:.8rem;border:1px solid var(--line);padding:6px 14px;border-radius:999px;color:var(--muted);
  background:rgba(255,255,255,.04);backdrop-filter:blur(10px);transition:.2s}
.lang:hover{color:var(--fg);border-color:var(--fg)}
.lang__sep{margin:0 6px;opacity:.4}

/* ================= Floating glass dock ================= */
.dock{
  position:fixed;left:50%;bottom:18px;transform:translateX(-50%);z-index:200;
  display:flex;gap:2px;padding:5px;border-radius:999px;
  background:linear-gradient(180deg,rgba(255,255,255,.14),rgba(255,255,255,.04));
  border:1px solid rgba(255,255,255,.28);
  backdrop-filter:blur(22px) saturate(1.6);-webkit-backdrop-filter:blur(22px) saturate(1.6);
  box-shadow:0 10px 40px rgba(0,0,0,.6),inset 0 1px 0 rgba(255,255,255,.35),inset 0 -1px 0 rgba(255,255,255,.08);
}
.dock__item{
  position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;
  width:64px;height:64px;border-radius:50%;
  color:rgba(255,255,255,.55);font-size:.64rem;font-weight:600;letter-spacing:.01em;
  transition:color .25s,background .25s,transform .25s,box-shadow .25s;
}
.dock__item svg{width:22px;height:22px}
.dock__item:hover{color:#fff;transform:translateY(-3px)}
.dock__item.is-active{
  color:#fff;
  background:radial-gradient(circle at 50% 30%,rgba(255,255,255,.4),rgba(255,255,255,.12) 70%);
  box-shadow:0 0 22px rgba(255,255,255,.35),inset 0 1px 0 rgba(255,255,255,.6);
}

/* ================= Hero ================= */
.hero{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:120px 6vw 140px}
.hero__inner{width:min(560px,100%);display:flex;flex-direction:column;align-items:flex-start;gap:18px}
.badge{display:inline-flex;align-items:center;gap:10px;font-size:.8rem;font-weight:600;padding:8px 16px;
  border:1px solid var(--line);border-radius:999px;color:var(--fg);background:rgba(255,255,255,.06)}
.badge .dot{width:8px;height:8px;border-radius:50%;background:#22c55e;box-shadow:0 0 10px #22c55e}
.hero__hi{color:var(--muted);font-size:1.15rem;font-weight:500}
.hero__title{font-size:clamp(3rem,10vw,5.6rem);line-height:1.02;font-weight:800;letter-spacing:-.045em}
.hero__title .line{display:block}
.hero__title .w,.hero__title .ch{display:inline-block;opacity:0}
.hero__sub{color:var(--muted);font-size:1.1rem;max-width:420px}
.hero__sub strong{color:var(--fg);font-weight:700}
.hero__cta{display:flex;gap:14px;flex-wrap:wrap;margin-top:6px}

/* word / letter blur reveal (starts when body gets .is-ready) */
@keyframes blurIn{
  from{opacity:0;filter:blur(14px);transform:translateY(16px)}
  to{opacity:1;filter:blur(0);transform:none}
}
body.is-ready .hero__title .w{animation:blurIn .9s cubic-bezier(.2,.7,.2,1) calc(var(--i) * 85ms) forwards}
body.is-ready .hero__title .ch{animation:blurIn 1s cubic-bezier(.2,.7,.2,1) calc(var(--i) * 90ms) forwards}

/* ================= Buttons ================= */
.btn{display:inline-block;padding:14px 30px;border-radius:999px;font-weight:700;font-size:.95rem;
  transition:transform .25s,box-shadow .3s,background .25s,color .25s,border-color .25s}
.btn:hover{transform:translateY(-3px)}
.btn--solid{background:#fff;color:#000;box-shadow:0 0 34px rgba(255,255,255,.4)}
.btn--solid:hover{box-shadow:0 0 52px rgba(255,255,255,.65)}
.btn--glow{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.22);color:var(--fg);
  box-shadow:0 0 28px rgba(255,255,255,.12)}
.btn--glow:hover{background:rgba(255,255,255,.16);box-shadow:0 0 40px rgba(255,255,255,.3)}

/* ================= Marquee ================= */
.marquee{overflow:hidden;border-block:1px solid var(--line);padding:22px 0;background:var(--bg-2)}
.marquee__track{display:flex;gap:56px;width:max-content;animation:scrollx 28s linear infinite;
  font-size:1.8rem;font-weight:700;letter-spacing:-.03em;color:var(--muted);white-space:nowrap}
.marquee__track span::after{content:"✦";margin-inline-start:56px;color:#fff;font-size:.9rem}
@keyframes scrollx{to{transform:translateX(-50%)}}
[dir="rtl"] .marquee__track{animation-direction:reverse}

/* ================= Quote ================= */
.quote{text-align:center;max-width:900px;margin:0 auto}
.quote blockquote{font-size:clamp(1.5rem,3.4vw,2.4rem);line-height:1.3;font-weight:600;letter-spacing:-.02em}
.quote cite{display:block;margin-top:24px;color:var(--muted);font-style:normal;font-size:.9rem}

/* ================= Titles ================= */
.title{font-size:clamp(2.2rem,6vw,4.5rem);font-weight:800;letter-spacing:-.04em;line-height:1.05;margin-bottom:28px}
.lead{color:var(--muted);max-width:560px;font-size:1.1rem;margin-bottom:48px}

/* ================= About ================= */
.about__grid{display:grid;grid-template-columns:1fr 1fr;gap:48px;color:var(--muted);font-size:1.1rem;margin-bottom:36px}
.about__grid strong{color:var(--fg)}
.chips{display:flex;flex-wrap:wrap;gap:10px}
.chips span,.tags span{font-size:.8rem;padding:6px 14px;border:1px solid var(--line);border-radius:999px;color:var(--muted);transition:.2s}
.chips span:hover{color:var(--fg);border-color:#fff}

/* ================= Cards ================= */
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px}
.card{position:relative;padding:32px;border:1px solid var(--line);border-radius:var(--radius);background:var(--bg-2);overflow:hidden;transition:transform .3s,border-color .3s}
.card::before{content:"";position:absolute;inset:0;
  background:radial-gradient(300px circle at var(--mx,50%) var(--my,0%),rgba(255,255,255,.1),transparent 60%);opacity:0;transition:opacity .3s}
.card:hover{transform:translateY(-6px);border-color:rgba(255,255,255,.4)}
.card:hover::before{opacity:1}
.card>*{position:relative}
.card__no{font-weight:700;font-size:.95rem;color:var(--muted)}
.card h3{font-size:1.4rem;margin:14px 0 10px;letter-spacing:-.02em}
.card p{color:var(--muted);margin-bottom:22px}
.tags{display:flex;flex-wrap:wrap;gap:8px}

/* ================= Packages ================= */
.packs{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px;align-items:stretch}
.pack{padding:36px;border:1px solid var(--line);border-radius:var(--radius);background:var(--bg-2);display:flex;flex-direction:column;gap:14px;transition:transform .3s}
.pack:hover{transform:translateY(-6px)}
.pack--featured{border-color:rgba(255,255,255,.5);background:linear-gradient(180deg,rgba(255,255,255,.1),var(--bg-2))}
.pack h3{font-size:1.3rem}
.price{font-size:2.6rem;font-weight:800;letter-spacing:-.04em}
.pack ul{list-style:none;color:var(--muted);display:grid;gap:8px;margin-bottom:12px;flex:1}
.pack li::before{content:"✓";color:#fff;margin-inline-end:10px}
.pack .btn{text-align:center}

/* ================= Contact ================= */
.contact{text-align:center}
.contact .lead{margin-inline:auto}
.contact__link{display:inline-flex;flex-direction:column;gap:4px;padding:28px 56px;border:1px solid var(--line);border-radius:var(--radius);background:var(--bg-2);transition:.3s}
.contact__link span{color:var(--muted);font-size:.85rem}
.contact__link b{font-size:1.8rem;font-weight:800;letter-spacing:-.03em}
.contact__link:hover{border-color:#fff;transform:translateY(-4px);box-shadow:0 0 36px rgba(255,255,255,.15)}

/* ================= Footer ================= */
.footer{display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px;padding:32px 6vw 120px;border-top:1px solid var(--line);color:var(--muted);font-size:.85rem}

/* ================= Reveal ================= */
.reveal{opacity:0;transform:translateY(32px);transition:opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1)}
.reveal.is-in{opacity:1;transform:none}

/* ================= Responsive ================= */
@media (max-width:820px){
  .about__grid{grid-template-columns:1fr;gap:24px}
  section{padding:90px 6vw}
}
@media (max-width:420px){
  .dock__item{width:56px;height:58px}
  .dock__item svg{width:20px;height:20px}
}
@media (prefers-reduced-motion:reduce){
  *{animation:none!important;transition:none!important}
  .reveal,.hero__title .w,.hero__title .ch{opacity:1;transform:none;filter:none}
  .loader{display:none}
}
