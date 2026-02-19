// Fade-in scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .hero-img').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.6s ease-out";
    observer.observe(el);
});

// Contact Form Success Logic
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.innerHTML = `<div style="text-align:center; padding:2rem; border:1px solid var(--primary); border-radius:12px;">
            <h3 style="color:var(--primary)">Message Sent!</h3>
            <p>We will get back to you shortly.</p>
        </div>`;
    });
}