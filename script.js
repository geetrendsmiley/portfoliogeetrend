// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // also allow keyboard toggling for accessibility
    menuToggle.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            navLinks.classList.toggle('active');
        }
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Portfolio Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(button => button.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Form Submission (improved, uses FormData and named inputs)
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const name = formData.get('name') || 'Friend';
        const email = formData.get('email') || '';
        const subject = formData.get('subject') || '';
        const message = formData.get('message') || '';
        
        // If you want to send to Formspree or another service, set the form's action attribute and use fetch.
        // For this example, we'll show a friendly confirmation.
        alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
        
        this.reset();
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        // ensure we only intercept internal anchors
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        e.preventDefault();
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Sticky header on scroll (keep existing visual behavior)
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (!header) return;
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});