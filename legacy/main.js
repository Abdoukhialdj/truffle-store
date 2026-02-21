/**
 * TruffleDirect – main.js
 * Handles: navbar scroll, mobile menu, scroll animations,
 *          floating particles, contact form, package → form linking.
 */

/* ============================================================
   1. NAVBAR — Scrolled state
   ============================================================ */
const navbar = document.getElementById('navbar');

function handleNavbarScroll() {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleNavbarScroll, { passive: true });
handleNavbarScroll(); // run once on load


/* ============================================================
   2. MOBILE HAMBURGER MENU
   ============================================================ */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
  // Animate the three lines into an X
  hamburger.classList.toggle('active', isOpen);
});

// Close menu when a nav link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', false);
  });
});

// Close menu on outside click
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target)) {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
  }
});

// Hamburger X animation via CSS
const hamburgerStyle = document.createElement('style');
hamburgerStyle.textContent = `
  .hamburger.active span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
  .hamburger.active span:nth-child(2) { opacity: 0; transform: scaleX(0); }
  .hamburger.active span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }
`;
document.head.appendChild(hamburgerStyle);


/* ============================================================
   3. INTERSECTION OBSERVER — Scroll animations
   ============================================================ */
const animatedEls = document.querySelectorAll('[data-animate]');

const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -60px 0px',
};

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const el = entry.target;
    const delay = parseInt(el.dataset.delay || 0, 10);

    setTimeout(() => {
      el.classList.add('in-view');
    }, delay);

    scrollObserver.unobserve(el); // fire once
  });
}, observerOptions);

animatedEls.forEach(el => scrollObserver.observe(el));


/* ============================================================
   4. HERO FLOATING PARTICLES
   ============================================================ */
(function spawnParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;

  const count = 28;

  for (let i = 0; i < count; i++) {
    const dot = document.createElement('div');
    dot.className = 'hero-particle';

    // Randomise position, size, duration, delay
    const x = Math.random() * 100;          // % from left
    const size = Math.random() * 2.5 + 1;     // 1–3.5 px
    const duration = Math.random() * 8 + 6;      // 6–14 s
    const delay = Math.random() * 10;           // 0–10 s offset

    dot.style.cssText = `
      left: ${x}%;
      bottom: 0;
      width: ${size}px;
      height: ${size}px;
      --duration: ${duration}s;
      --delay: ${delay}s;
      opacity: 0;
    `;

    container.appendChild(dot);
  }
})();


/* ============================================================
   5. SMOOTH SCROLL — For anchor links (supports offset for fixed nav)
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();

    const navH = navbar ? navbar.offsetHeight : 0;
    const top = target.getBoundingClientRect().top + window.scrollY - navH - 12;

    window.scrollTo({ top, behavior: 'smooth' });
  });
});


/* ============================================================
   6. CONTACT FORM — Validation & fake submission
   ============================================================ */
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Simple required-field validation
    const requiredFields = contactForm.querySelectorAll('[required]');
    let valid = true;

    requiredFields.forEach(field => {
      field.style.borderColor = '';
      if (!field.value.trim()) {
        field.style.borderColor = '#c0392b';
        valid = false;
      }
    });

    // Email format check
    const emailField = document.getElementById('email');
    if (emailField && emailField.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
      emailField.style.borderColor = '#c0392b';
      valid = false;
    }

    if (!valid) {
      shakeButton(submitBtn);
      return;
    }

    // Submit to Formspree
    const formData = new FormData(contactForm);
    setButtonLoading(submitBtn, true);

    try {
      // Use FormData directly to avoid CORS preflight issues common on file:// protocol
      const response = await fetch('https://formsubmit.co/ajax/m2d.khial@gmail.com', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
          // Note: Do NOT set Content-Type to JSON; let the browser handle the FormData boundary
        },
        body: formData
      });

      const result = await response.json();
      console.log('FormSubmit Response:', result);

      if (response.ok && result.success === "true") {
        // Show success overlay
        formSuccess.classList.add('visible');
        contactForm.reset();
      } else {
        throw new Error(result.message || 'Form submission failed');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      alert('Problem sending inquiry. Check your console (F12) or try WhatsApp. Error: ' + error.message);
    } finally {
      setButtonLoading(submitBtn, false);
    }

    // Hide success after delay
    setTimeout(() => {
      formSuccess.classList.remove('visible');
    }, 6000);
  });
}

/**
 * Simulate an async network request.
 * Replace with your real fetch() / EmailJS / etc. call.
 */
function simulateRequest(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/** Toggle loading state on the submit button */
function setButtonLoading(btn, isLoading) {
  const textSpan = btn.querySelector('.btn-text');
  const iconSpan = btn.querySelector('.btn-icon');

  if (isLoading) {
    btn.disabled = true;
    btn.style.opacity = '0.7';
    if (textSpan) textSpan.textContent = 'Sending…';
    if (iconSpan) iconSpan.textContent = '⟳';
  } else {
    btn.disabled = false;
    btn.style.opacity = '';
    if (textSpan) textSpan.textContent = 'Send Inquiry';
    if (iconSpan) iconSpan.textContent = '→';
  }
}

/** Shake animation for invalid form */
function shakeButton(btn) {
  btn.style.animation = 'none';
  // Force reflow
  void btn.offsetHeight;
  btn.style.animation = 'shake 0.4s ease';

  const shakeKeyframes = document.getElementById('shakeKeyframes');
  if (!shakeKeyframes) {
    const s = document.createElement('style');
    s.id = 'shakeKeyframes';
    s.textContent = `
      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        20%       { transform: translateX(-8px); }
        40%       { transform: translateX(8px); }
        60%       { transform: translateX(-5px); }
        80%       { transform: translateX(5px); }
      }
    `;
    document.head.appendChild(s);
  }

  btn.addEventListener('animationend', () => {
    btn.style.animation = '';
  }, { once: true });
}


/* ============================================================
   7. ACTIVE NAV LINK — Highlight based on scroll position
   ============================================================ */
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a[href^="#"]');

function updateActiveNav() {
  const scrollMid = window.scrollY + window.innerHeight / 2;

  sections.forEach(section => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;

    if (scrollMid >= top && scrollMid < bottom) {
      navItems.forEach(a => {
        a.classList.remove('active-nav');
        if (a.getAttribute('href') === `#${section.id}`) {
          a.classList.add('active-nav');
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

// Add active-nav style
const activeNavStyle = document.createElement('style');
activeNavStyle.textContent = `
  .nav-links a.active-nav:not(.nav-cta) {
    color: var(--gold) !important;
  }
  .nav-links a.active-nav:not(.nav-cta)::after {
    width: 100% !important;
  }
`;
document.head.appendChild(activeNavStyle);


/* ============================================================
   8. PRODUCT CARD — Image placeholder swap on file dropped
      (Quality-of-life: drag & drop an image onto a placeholder
       to preview it before the real images are uploaded)
   ============================================================ */
const placeholders = document.querySelectorAll('.card-image-placeholder');

placeholders.forEach(placeholder => {
  placeholder.addEventListener('dragover', (e) => {
    e.preventDefault();
    placeholder.style.borderColor = 'var(--gold)';
    placeholder.style.background = 'rgba(184,150,62,0.08)';
  });

  placeholder.addEventListener('dragleave', () => {
    placeholder.style.borderColor = '';
    placeholder.style.background = '';
  });

  placeholder.addEventListener('drop', (e) => {
    e.preventDefault();
    placeholder.style.borderColor = '';
    placeholder.style.background = '';

    const file = e.dataTransfer.files[0];
    if (!file || !file.type.startsWith('image/')) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      const img = document.createElement('img');
      img.src = evt.target.result;
      img.alt = 'Truffle product';
      img.style.cssText = 'width:100%;height:100%;object-fit:cover;position:absolute;inset:0;';

      placeholder.style.position = 'relative';
      placeholder.querySelector('.placeholder-inner').style.display = 'none';
      placeholder.appendChild(img);
    };
    reader.readAsDataURL(file);
  });
});


/* ============================================================
   9. PACKAGE CARDS — Click to pre-fill quantity in the form
   ============================================================ */
(function initPackageCardLinks() {
  const quantitySelect = document.getElementById('quantity');
  const contactSection = document.getElementById('contact');
  const allCards = document.querySelectorAll('.product-card[data-qty]');

  /**
   * Select a package by qty value (e.g. '10kg', '25kg', '50kg'),
   * highlight the card, fill the dropdown, and scroll to the form.
   */
  function selectPackage(qty) {
    // 1. Highlight the chosen card, deselect others
    allCards.forEach(c => c.classList.toggle('selected', c.dataset.qty === qty));

    // 2. Set the dropdown value
    if (quantitySelect) {
      quantitySelect.value = qty;
      // Flash the select to draw the user's eye
      quantitySelect.style.transition = 'box-shadow 0.2s';
      quantitySelect.style.boxShadow = '0 0 0 3px rgba(184,150,62,0.45)';
      setTimeout(() => { quantitySelect.style.boxShadow = ''; }, 800);
    }

    // 3. Smooth-scroll to the contact section
    if (contactSection) {
      const navH = navbar ? navbar.offsetHeight : 0;
      const top = contactSection.getBoundingClientRect().top + window.scrollY - navH - 12;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

  // Wire up the "Order this package" buttons on each card
  document.querySelectorAll('.card-order-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation(); // don't bubble to the card itself
      selectPackage(btn.dataset.qty);
    });
  });

  // Also allow clicking anywhere on the card body as a shortcut
  allCards.forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      selectPackage(card.dataset.qty);
    });
  });
})();
