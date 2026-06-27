const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
navToggle.addEventListener('click', () => navMenu.classList.toggle('active'));
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => navMenu.classList.remove('active'));
});
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.style.background = window.scrollY > 50 ? 'rgba(255,249,240,0.98)' : 'rgba(255,249,240,0.95)';
});
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.15 });
document.querySelectorAll('.product-card, .about-content, .gallery-item, .contact-content').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});
const form = document.getElementById('contactForm');
form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.btn');
    const t = btn.textContent;
    btn.textContent = '¡Mensaje enviado!';
    btn.style.background = 'linear-gradient(135deg, #43a047, #66bb6a)';
    setTimeout(() => { btn.textContent = t; btn.style.background = ''; form.reset(); }, 2500);
});
