// Smooth scrolling for menu links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });

    // Close mobile menu after clicking
    nav.classList.remove('active');
  });
});

// Mobile menu toggle
const toggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Scroll reveal animations
const appearElements = document.querySelectorAll('.service-box, .card, .hero-content, section h2');

const revealOnScroll = () => {
  appearElements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener('scroll', revealOnScroll);

// Initial hidden state
appearElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "0.8s ease";
});
