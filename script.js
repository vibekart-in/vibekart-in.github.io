// ===== NAVBAR SCROLL SHADOW =====
// Adds a subtle shadow to navbar when user scrolls down
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 20) {
    navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});


// ===== SMOOTH FADE IN ON SCROLL =====
// Makes sections fade in as user scrolls down
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.product-card, .team-card, .trust-card, .contact-card, .about-stat-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});


// ===== BUY BUTTON CLICK EFFECT =====
// Adds a small animation when Buy button is clicked
document.querySelectorAll('.buy-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    this.textContent = 'Redirecting... ↗';
    setTimeout(() => {
      this.textContent = 'Buy ↗';
    }, 2000);
  });
});


// ===== ACTIVE NAV LINK =====
// Highlights the current page's nav link
const currentPage = window.location.pathname.split('/').pop();
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.style.color = '#1a1a1a';
    link.style.fontWeight = '700';
  }
});