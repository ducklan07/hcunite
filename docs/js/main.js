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
