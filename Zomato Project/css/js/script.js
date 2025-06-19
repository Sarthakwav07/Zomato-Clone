// Animation for Search Input Focus
const searchInput = document.querySelector('main input');

searchInput.addEventListener('focus', () => {
    searchInput.style.transform = 'scale(1.05)';
    searchInput.style.transition = 'transform 0.3s ease';
});

searchInput.addEventListener('blur', () => {
    searchInput.style.transform = 'scale(1)';
});

// Sticky Header on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 50);
});

// Mobile Navigation Toggle (if you plan to add mobile functionality)
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});
