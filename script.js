// Scroll animation fallback for browsers that don't support AOS
const elements = document.querySelectorAll('.card, .project-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.2
});

elements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'all 0.6s ease-out';
  observer.observe(el);
});

// Smooth scroll to section on link click (fallback for older browsers)
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
