document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
    }

    // Close mobile menu when clicking a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Theme Toggle
    const themeBtns = document.querySelectorAll('.theme-btn');
    const body = document.body;

    // Function to update all theme icons
    const updateThemeIcons = (isLight) => {
        themeBtns.forEach(btn => {
            const icon = btn.querySelector('i');
            if (icon) {
                icon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
            }
        });
    };

    // Check for saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        updateThemeIcons(true);
    } else {
        updateThemeIcons(false);
    }

    themeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            const isLight = body.classList.contains('light-mode');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
            updateThemeIcons(isLight);
        });
    });

    // Back to Top functionality
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Fade In Animation on Scroll
    const fadeElems = document.querySelectorAll('.fade-in');

    // Create an intersection observer
    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    fadeElems.forEach(elem => {
        appearOnScroll.observe(elem);
    });
});
