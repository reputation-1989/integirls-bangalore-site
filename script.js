// ===================================
// INTEGIRLS Bangalore - Main Script
// Pure vanilla JavaScript
// ===================================

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile menu toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const mainNav = document.getElementById('mainNav');
    
    if (mobileToggle && mainNav) {
        mobileToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = this.querySelectorAll('span');
            if (mainNav.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(8px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close menu when clicking nav links
        const navLinks = mainNav.querySelectorAll('.nav-link');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                mainNav.classList.remove('active');
                const spans = mobileToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
    
    // Update copyright year in footer
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;
    }
    
    // Contact form placeholder handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('This is a placeholder form. Please email us directly at bangalore@integirls.org');
        });
    }
    
    // Add smooth scroll offset for fixed header
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight - 20;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Add active state to nav links based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function highlightNavLink() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(function(section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(function(link) {
                    link.style.color = '';
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.style.color = 'var(--color-primary)';
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavLink);
    
    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe cards, sections, and other elements
    const cards = document.querySelectorAll('.card');
    const sectionTitles = document.querySelectorAll('.section-title');
    const teamCards = document.querySelectorAll('.team-card');
    const resourceItems = document.querySelectorAll('.resource-item');
    const faqItems = document.querySelectorAll('.faq-item');
    
    // Add animation classes and observe
    cards.forEach(function(el, index) {
        el.classList.add('animate-on-scroll');
        el.style.transitionDelay = (index * 0.1) + 's';
        observer.observe(el);
    });
    
    sectionTitles.forEach(function(el) {
        observer.observe(el);
    });
    
    teamCards.forEach(function(el, index) {
        el.classList.add('animate-on-scroll');
        el.style.transitionDelay = (index * 0.15) + 's';
        observer.observe(el);
    });
    
    resourceItems.forEach(function(el, index) {
        el.classList.add('animate-on-scroll');
        el.style.transitionDelay = (index * 0.1) + 's';
        observer.observe(el);
    });
    
    faqItems.forEach(function(el, index) {
        el.classList.add('animate-on-scroll');
        el.style.transitionDelay = (index * 0.08) + 's';
        observer.observe(el);
    });
    
    console.log('INTEGIRLS Bangalore website loaded successfully!');
});
