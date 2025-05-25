// Hamburger Menu Functionality
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
  
  // Prevent/allow scrolling when menu is open/closed
  document.body.classList.toggle('no-scroll');
});

// Close menu when clicking on a nav link (mobile)
navLinks.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    // Re-enable scrolling
    document.body.classList.remove('no-scroll');
  }
});

// Close menu when clicking outside (mobile)
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    // Re-enable scrolling
    document.body.classList.remove('no-scroll');
  }
});

const observer = new IntersectionObserver(
entries => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('scroll-visible');
        observer.unobserve(entry.target); // Only trigger once
    }
    });
},
{
    threshold: 0.3 // Start animation when 30% is in view
}
);

const target = document.querySelector('#instagram-section');
if (target) observer.observe(target);