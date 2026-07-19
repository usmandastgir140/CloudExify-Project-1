// ==========================================================
// script.js — Terminal Coder Portfolio
// ==========================================================

// ---------- Wait for DOM before touching any element ----------
document.addEventListener('DOMContentLoaded', () => {

  /* ---------------- Responsive navbar (hamburger) ---------------- */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close mobile menu after a link is tapped
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------------- Signature Feature 1: Typewriter hero ---------------- */
  const phrases = [
    'a Full-Stack Developer',
    'a Flutter Developer',
    'a COMSATS CS Student',
    'a Problem Solver'
  ];
  const typedEl = document.getElementById('typedText');
  let pIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeLoop() {
    const current = phrases[pIndex];

    if (!deleting) {
      typedEl.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(typeLoop, 1400);
        return;
      }
    } else {
      typedEl.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        pIndex = (pIndex + 1) % phrases.length;
      }
    }
    setTimeout(typeLoop, deleting ? 40 : 70);
  }
  if (typedEl) typeLoop();

  /* ---------------- Signature Feature 2: Scroll-triggered skill bars ---------------- */
  const skillEls = document.querySelectorAll('.skill');
  if (skillEls.length && 'IntersectionObserver' in window) {
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fill = entry.target.querySelector('.fill');
          fill.style.width = entry.target.dataset.percent + '%';
          skillObserver.unobserve(entry.target); // animate once only
        }
      });
    }, { threshold: 0.4 });

    skillEls.forEach(el => skillObserver.observe(el));
  } else {
    // Fallback: no IntersectionObserver support — just fill immediately
    skillEls.forEach(el => {
      const fill = el.querySelector('.fill');
      fill.style.width = el.dataset.percent + '%';
    });
  }

  /* ---------------- Bonus: Live project filter ---------------- */
  const filterBtns = document.querySelectorAll('[data-filter]');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      projectCards.forEach(card => {
        const tags = card.dataset.tags.split(',');
        const show = filter === 'all' || tags.includes(filter);
        card.style.display = show ? 'flex' : 'none';
      });
    });
  });

  /* ---------------- Bonus: Live theme (accent color) switcher ---------------- */
  const themeDots = document.querySelectorAll('.theme-dot');
  const savedAccent = localStorage.getItem('accent');
  if (savedAccent) {
    document.body.setAttribute('data-accent', savedAccent);
  }

  themeDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const accent = dot.dataset.accent;
      document.body.setAttribute('data-accent', accent);
      localStorage.setItem('accent', accent);
    });
  });

  /* ---------------- Contact form validation (no backend yet) ---------------- */
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  function showError(msg) {
    status.textContent = msg;
    status.className = 'form-status error';
  }
  function showSuccess(msg) {
    status.textContent = msg;
    status.className = 'form-status success';
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameField = form.name;
    const emailField = form.email;
    const messageField = form.message;

    const emailOK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value.trim());
    const nameOK = nameField.value.trim() !== '';
    const messageOK = messageField.value.trim() !== '';

    [nameField, emailField, messageField].forEach(f => f.classList.remove('invalid'));

    if (!nameOK || !emailOK || !messageOK) {
      if (!nameOK) nameField.classList.add('invalid');
      if (!emailOK) emailField.classList.add('invalid');
      if (!messageOK) messageField.classList.add('invalid');
      showError('Please fill all fields with a valid email.');
      return;
    }

    // No backend yet — that's a later milestone. Show a success state instead.
    showSuccess('Thanks! Your message has been noted.');
    form.reset();
  });

  /* ---------------- Bonus: Hidden easter egg (Konami code) ---------------- */
  const konami = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let konamiIndex = 0;
  const egg = document.getElementById('easterEgg');

  document.addEventListener('keydown', (e) => {
    const key = e.key;
    if (key === konami[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konami.length) {
        egg.classList.add('show');
        setTimeout(() => egg.classList.remove('show'), 3500);
        konamiIndex = 0;
      }
    } else {
      konamiIndex = (key === konami[0]) ? 1 : 0;
    }
  });

  /* ---------------- Bonus: Smooth scroll active nav highlight ---------------- */
  const sections = document.querySelectorAll('main section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  if ('IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navAnchors.forEach(a => {
            a.style.color = a.getAttribute('href') === `#${id}` ? 'var(--accent)' : '';
          });
        }
      });
    }, { threshold: 0.5 });

    sections.forEach(sec => navObserver.observe(sec));
  }

});
