// =========================================
// MakeBig — Common JavaScript
// Navbar, mobile menu, scroll reveal
// =========================================

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    // Navbar scroll effect — add blur background on scroll
    if (navbar) {
        const checkScroll = () => {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        };
        window.addEventListener('scroll', checkScroll);
        checkScroll();
    }

    // Mobile hamburger menu
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navbar.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }

    // Scroll reveal animations via IntersectionObserver
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length > 0 && 'IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach(el => {
            revealObserver.observe(el);
        });
    } else {
        // Fallback if IntersectionObserver is unsupported
        revealElements.forEach(el => el.classList.add('visible'));
    }
});
