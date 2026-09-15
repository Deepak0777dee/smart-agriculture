/* ============================================
   ANIMATIONS.JS — GSAP Text & Scroll Animations
   Stackly Smart Agriculture
   Uses GSAP + ScrollTrigger from CDN
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap === 'undefined') return;
  if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);

  /* ---------- Hero Animation ---------- */
  const heroTitle = document.querySelector('.hero-text h1');
  const heroText = document.querySelector('.hero-text p');
  const heroBtns = document.querySelector('.hero-btns');
  const heroImage = document.querySelector('.hero-image');

  if (heroTitle) {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.9 } });
    tl.from(heroTitle, { y: 60, opacity: 0, duration: 1.1 }, 0.3)
      .from(heroText, { y: 40, opacity: 0 }, 0.6)
      .from(heroBtns, { y: 30, opacity: 0 }, 0.8);
    if (heroImage) {
      tl.from(heroImage, { x: 60, opacity: 0, duration: 1.2 }, 0.4);
    }
  }

  /* ---------- Page Hero Animation ---------- */
  const pageHeroH1 = document.querySelector('.page-hero h1');
  const pageHeroP = document.querySelector('.page-hero p');
  const pageHeroLabel = document.querySelector('.page-hero .section-label');
  if (pageHeroH1) {
    const ptl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } });
    if (pageHeroLabel) ptl.from(pageHeroLabel, { y: 20, opacity: 0, duration: 0.5 }, 0.2);
    ptl.from(pageHeroH1, { y: 40, opacity: 0 }, 0.35)
       .from(pageHeroP, { y: 20, opacity: 0 }, 0.55);
  }

  /* ---------- Section Title Scroll Reveal ---------- */
  document.querySelectorAll('.section-title').forEach(title => {
    gsap.fromTo(title,
      { y: 30, opacity: 0 },
      { scrollTrigger: { trigger: title, start: 'top 85%' }, y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );
  });

  /* ---------- Section Subtitles ---------- */
  document.querySelectorAll('.section-subtitle').forEach(sub => {
    gsap.fromTo(sub,
      { y: 20, opacity: 0 },
      { scrollTrigger: { trigger: sub, start: 'top 85%' }, y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.15 }
    );
  });

  /* ---------- Stagger Children ---------- */
  document.querySelectorAll('.stagger-children').forEach(container => {
    const children = Array.from(container.children);
    if (children.length === 0) return;
    gsap.fromTo(children,
      { y: 40, opacity: 0 },
      { scrollTrigger: { trigger: container, start: 'top 85%' }, y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out' }
    );
  });

  /* ---------- Stats Grid ---------- */
  document.querySelectorAll('.stats-grid').forEach(grid => {
    gsap.fromTo(grid.children,
      { y: 30, opacity: 0 },
      { scrollTrigger: { trigger: grid, start: 'top 85%' }, y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
    );
  });

  /* ---------- Split Grid Animations ---------- */
  document.querySelectorAll('.split-grid').forEach(grid => {
    const left = grid.querySelector(':first-child');
    const right = grid.querySelector(':last-child');
    if (left) {
      gsap.fromTo(left,
        { x: -40, opacity: 0 },
        { scrollTrigger: { trigger: grid, start: 'top 80%' }, x: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }
      );
    }
    if (right) {
      gsap.fromTo(right,
        { x: 40, opacity: 0 },
        { scrollTrigger: { trigger: grid, start: 'top 80%' }, x: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.15 }
      );
    }
  });

  /* ---------- Features Split ---------- */
  document.querySelectorAll('.features-split').forEach(grid => {
    const left = grid.querySelector(':first-child');
    const right = grid.querySelector(':last-child');
    if (left) {
      gsap.fromTo(left,
        { x: -40, opacity: 0 },
        { scrollTrigger: { trigger: grid, start: 'top 80%' }, x: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }
      );
    }
    if (right) {
      gsap.fromTo(right,
        { x: 40, opacity: 0 },
        { scrollTrigger: { trigger: grid, start: 'top 80%' }, x: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.15 }
      );
    }
  });

  /* ---------- Tech Cards ---------- */
  document.querySelectorAll('.tech-cards').forEach(grid => {
    gsap.fromTo(grid.children,
      { y: 40, opacity: 0, scale: 0.95 },
      { scrollTrigger: { trigger: grid, start: 'top 85%' }, y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.4)' }
    );
  });

  /* ---------- Workflow Steps ---------- */
  document.querySelectorAll('.workflow-step').forEach((item, i) => {
    gsap.fromTo(item,
      { x: -30, opacity: 0 },
      { scrollTrigger: { trigger: item, start: 'top 85%' }, x: 0, opacity: 1, duration: 0.7, delay: i * 0.1, ease: 'power3.out' }
    );
  });

  /* ---------- Standalone Reveals ---------- */
  document.querySelectorAll('.reveal').forEach(el => {
    gsap.fromTo(el,
      { y: 40, opacity: 0 },
      { scrollTrigger: { trigger: el, start: 'top 85%' }, y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );
  });
  document.querySelectorAll('.reveal-left').forEach(el => {
    gsap.fromTo(el,
      { x: -50, opacity: 0 },
      { scrollTrigger: { trigger: el, start: 'top 85%' }, x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );
  });
  document.querySelectorAll('.reveal-right').forEach(el => {
    gsap.fromTo(el,
      { x: 50, opacity: 0 },
      { scrollTrigger: { trigger: el, start: 'top 85%' }, x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );
  });

  /* ---------- Pricing Cards ---------- */
  document.querySelectorAll('.pricing-grid').forEach(grid => {
    gsap.fromTo(grid.children,
      { y: 50, opacity: 0 },
      { scrollTrigger: { trigger: grid, start: 'top 85%' }, y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
    );
  });

  /* ---------- Blog Cards ---------- */
  document.querySelectorAll('.blog-cards').forEach(grid => {
    gsap.fromTo(grid.children,
      { y: 30, opacity: 0 },
      { scrollTrigger: { trigger: grid, start: 'top 85%' }, y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out' }
    );
  });

  /* ---------- FAQ Items ---------- */
  document.querySelectorAll('.faq-list').forEach(list => {
    gsap.fromTo(list.children,
      { y: 20, opacity: 0 },
      { scrollTrigger: { trigger: list, start: 'top 85%' }, y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out' }
    );
  });

  /* ---------- CTA Parallax ---------- */
  const cta = document.querySelector('.cta-section');
  if (cta) {
    gsap.fromTo(cta.querySelector('.cta-content'),
      { y: 30, opacity: 0 },
      { scrollTrigger: { trigger: cta, start: 'top 80%' }, y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }
    );
  }

  /* ---------- Testimonial ---------- */
  document.querySelectorAll('.testimonial-card').forEach(card => {
    gsap.fromTo(card,
      { y: 30, opacity: 0 },
      { scrollTrigger: { trigger: card, start: 'top 85%' }, y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );
  });

  /* ---------- Service Cards ---------- */
  document.querySelectorAll('.services-grid').forEach(grid => {
    gsap.fromTo(grid.children,
      { y: 40, opacity: 0 },
      { scrollTrigger: { trigger: grid, start: 'top 85%' }, y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out' }
    );
  });

  /* ---------- Contact Grid ---------- */
  document.querySelectorAll('.contact-grid').forEach(grid => {
    const left = grid.querySelector(':first-child');
    const right = grid.querySelector(':last-child');
    if (left) gsap.fromTo(left, { x: -40, opacity: 0 }, { scrollTrigger: { trigger: grid, start: 'top 80%' }, x: 0, opacity: 1, duration: 0.9, ease: 'power3.out' });
    if (right) gsap.fromTo(right, { x: 40, opacity: 0 }, { scrollTrigger: { trigger: grid, start: 'top 80%' }, x: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.15 });
  });

  /* ---------- Solutions Hero Grid ---------- */
  document.querySelectorAll('.solutions-hero-grid').forEach(grid => {
    const left = grid.querySelector(':first-child');
    const right = grid.querySelector(':last-child');
    if (left) gsap.fromTo(left, { x: -40, opacity: 0 }, { scrollTrigger: { trigger: grid, start: 'top 80%' }, x: 0, opacity: 1, duration: 0.9, ease: 'power3.out' });
    if (right) gsap.fromTo(right, { x: 40, opacity: 0 }, { scrollTrigger: { trigger: grid, start: 'top 80%' }, x: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.15 });
  });

  /* ---------- Parallax Image ---------- */
  gsap.utils.toArray('.parallax-img').forEach(img => {
    gsap.to(img, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: img.parentElement,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  });

  /* ---------- Scale Reveal ---------- */
  gsap.utils.toArray('.scale-reveal').forEach(el => {
    gsap.from(el, {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  });
});
