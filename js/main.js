/* ============================================
   MAIN.JS — Stackly Smart Agriculture
   Navigation, Mobile Menu, Scroll,
   Stat Counters, Form Validation, FAQ
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Page Loader ---------- */
  const loader = document.getElementById('page-loader');
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => loader.classList.add('hidden'), 600);
    });
    setTimeout(() => loader.classList.add('hidden'), 3000);
  }

  /* ---------- Header Scroll ---------- */
  const header = document.getElementById('mainHeader');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Mobile Menu ---------- */
  const hamBtn = document.getElementById('hamBtn');
  if (hamBtn) {
    hamBtn.addEventListener('click', () => {
      document.getElementById('mainHeader').classList.toggle('menu-open');
    });
  }
  const mobileOverlay = document.querySelector('.mobile-overlay');
  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', () => {
      document.getElementById('mainHeader').classList.remove('menu-open');
    });
  }
  document.querySelectorAll('.mobile-sidebar .header-nav a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('mainHeader').classList.remove('menu-open');
    });
  });

  /* ---------- Stat Counter ---------- */
  const statNumbers = document.querySelectorAll('.stat-number[data-count]');
  if (statNumbers.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count);
          const suffix = el.dataset.suffix || '';
          const duration = 2000;
          const start = performance.now();

          function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(target * eased);
            el.textContent = current.toLocaleString() + suffix;
            if (progress < 1) requestAnimationFrame(update);
          }
          requestAnimationFrame(update);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    statNumbers.forEach(el => counterObserver.observe(el));
  }

  /* ---------- FAQ Accordion ---------- */
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    });
  });

  /* ---------- Feature Accordion ---------- */
  document.querySelectorAll('.feature-accordion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.feature-accordion-item');
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.feature-accordion-item').forEach(i => i.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    });
  });

  /* ---------- Dashboard: Sidebar Toggle ---------- */
  const sidebar = document.getElementById('sidebar');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const sidebarClose = document.getElementById('sidebarClose');

  if (mobileMenuBtn && sidebar) {
    mobileMenuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }
  if (sidebarClose && sidebar) {
    sidebarClose.addEventListener('click', () => {
      sidebar.classList.remove('open');
    });
  }

  /* ---------- Active Sidebar Link ---------- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.sidebar-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  /* ---------- Dynamic Footer ---------- */
  const footerEl = document.querySelector('.footer');
  if (footerEl && !footerEl.innerHTML.trim()) {
    footerEl.innerHTML = `
      <div class="container">
        <div class="footer-top">
          <h3>Updates On Modern Agriculture Innovation</h3>
          <div class="footer-newsletter">
            <input type="email" placeholder="Enter your email" />
            <button class="btn btn-primary btn-sm">Subscribe</button>
          </div>
        </div>
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="index.html"><img src="images/logo-stackly.webp" alt="Stackly" /></a>
            <p>Stackly empowers modern agriculture with advanced drone technology, precision monitoring, and smart farming solutions for sustainable food production.</p>
            <div class="footer-social">
              <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a>
              <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
              <a href="#" aria-label="X"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg></a>
              <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z"/></svg></a>
            </div>
          </div>
          <div class="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="solutions.html">Solutions</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="pricing.html">Pricing</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Solutions</h4>
            <ul>
              <li><a href="solutions.html">Precision Spraying</a></li>
              <li><a href="solutions.html">Crop Monitoring</a></li>
              <li><a href="solutions.html">Field Mapping</a></li>
              <li><a href="solutions.html">Smart Sensors</a></li>
              <li><a href="solutions.html">Drone Surveillance</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:info@thestackly.com">info@thestackly.com</a></li>
              <li><a href="tel:+917010792745">+91 70107 92745</a></li>
              <li><a href="https://maps.google.com/?q=MMR+Complex,+Salem,+TN" target="_blank" rel="noopener noreferrer">MMR Complex, Salem, TN</a></li>
              <li><a href="contact.html">Mon–Fri 9AM–6PM</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 Stackly Smart Agriculture. All rights reserved.</p>
          <div class="footer-bottom-links">
            <a href="404.html">Privacy</a>
            <a href="404.html">Terms</a>
            <a href="404.html">Cookies</a>
          </div>
        </div>
      </div>
    `;
  }

});

/* ---------- Form Validation ---------- */
function validateField(input) {
  const group = input.closest('.form-group');
  const errorDiv = group ? group.querySelector('.form-error') : null;
  let message = '';

  if (input.required && !input.value.trim()) {
    message = 'This field is required';
  } else if (input.type === 'email' && input.value.trim()) {
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(input.value.trim())) {
      message = 'Please enter a valid email';
    }
  } else if (input.type === 'tel' && input.value.trim()) {
    if (!/^\d{10}$/.test(input.value.replace(/\s/g, ''))) {
      message = 'Phone number must be 10 digits';
    }
  } else if (input.pattern && input.value.trim()) {
    const re = new RegExp('^' + input.pattern + '$');
    if (!re.test(input.value.trim())) {
      message = input.title || 'Invalid format';
    }
  } else if (input.minLength > 0 && input.value.length < input.minLength) {
    message = `Minimum ${input.minLength} characters required`;
  }

  if (errorDiv) errorDiv.textContent = message;
  if (message) {
    input.style.borderColor = 'var(--danger)';
    return false;
  } else {
    input.style.borderColor = '';
    return true;
  }
}

/* ---------- Password Toggle ---------- */
document.addEventListener('click', (e) => {
  const toggle = e.target.closest('.password-toggle');
  if (!toggle) return;
  const wrapper = toggle.closest('.password-wrapper');
  const input = wrapper ? wrapper.querySelector('input') : null;
  if (input) {
    input.type = input.type === 'password' ? 'text' : 'password';
  }
});

/* ---------- Redirect Empty Actions to 404 ---------- */
document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    const el = e.target.closest('button, a');
    if (!el) return;

    if (el.tagName === 'A') {
      const href = el.getAttribute('href');
      if (!href || href === '#' || href === '') {
        e.preventDefault();
        window.location.href = '404.html';
      }
    } else if (el.tagName === 'BUTTON') {
      const hasOnclick = el.hasAttribute('onclick');
      const hasId = el.hasAttribute('id');
      const isSubmit = el.getAttribute('type') === 'submit' || (el.closest('form') && !el.hasAttribute('type'));
      const functionalClasses = ['ham-btn', 'mobile-close', 'sidebar-close', 'faq-question', 'password-toggle', 'mobile-menu-btn', 'role-option', 'feature-accordion-btn'];
      const hasFunctionalClass = functionalClasses.some(cls => el.classList.contains(cls));

      if (!hasOnclick && !isSubmit && !hasFunctionalClass && !hasId) {
        e.preventDefault();
        window.location.href = '404.html';
      }
    }
  });

  document.body.addEventListener('change', (e) => {
    if (e.target.tagName === 'SELECT') {
      window.location.href = '404.html';
    }
  });
});
