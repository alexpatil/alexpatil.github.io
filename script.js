/* =========================================================
   PORTFOLIO — script.js
   Vanilla JS only. No dependencies.
   ========================================================= */

(function () {
  'use strict';

  /* ---- Navbar: scrolled class + border ---- */
  const navbar = document.getElementById('navbar');

  function onScroll() {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run on load

  /* ---- Mobile nav toggle ---- */
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.querySelector('.nav-links');

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    // Animate hamburger to X
    navToggle.classList.toggle('active');
  });

  // Close mobile nav when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('active');
    });
  });

  /* ---- Scroll reveal ---- */
  const revealTargets = document.querySelectorAll(
    '.section-title, .section-label, .project-card, .exp-block, ' +
    '.about-body p, .about-stats, .stack-category, ' +
    '.hero-label, .hero-title, .hero-sub, .hero-actions, .hero-meta, ' +
    '.contact-title, .contact-sub, .contact-links'
  );

  // Add reveal class to all targets
  revealTargets.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // reveal once
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealTargets.forEach(el => observer.observe(el));

  /* ---- Active nav link highlight on scroll ---- */
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-links a');

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          links.forEach(link => {
            link.classList.remove('active-link');
            if (link.getAttribute('href') === '#' + entry.target.id) {
              link.classList.add('active-link');
            }
          });
        }
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach(s => sectionObserver.observe(s));

})();
