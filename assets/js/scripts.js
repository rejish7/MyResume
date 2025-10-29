window.addEventListener('DOMContentLoaded', event => {
    let scrollToTopVisible = false;

    // Add page load animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);

    // Navigation menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('#sidebar-wrapper');
    
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            sidebar.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Close sidebar when clicking on a link
        const sidebarLinks = document.querySelectorAll('.sidebar-nav-item a');
        sidebarLinks.forEach(link => {
            link.addEventListener('click', () => {
                sidebar.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });

        // Close sidebar when clicking outside
        document.addEventListener('click', (e) => {
            if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
                sidebar.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }

    // Scroll to top button appear and functionality
    const scrollToTop = document.body.querySelector('.scroll-to-top');
    
    document.addEventListener('scroll', () => {
        if (scrollToTop) {
            if (document.documentElement.scrollTop > 100) {
                if (!scrollToTopVisible) {
                    fadeIn(scrollToTop);
                    scrollToTopVisible = true;
                }
            } else {
                if (scrollToTopVisible) {
                    fadeOut(scrollToTop);
                    scrollToTopVisible = false;
                }
            }
        }
        
        // Active nav highlighting
        highlightActiveSection();
    });

    // Highlight active section in navigation
    function highlightActiveSection() {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector(`.sidebar-nav a[href*="${sectionId}"]`);
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                if (navLink) {
                    document.querySelectorAll('.sidebar-nav a').forEach(link => {
                        link.classList.remove('active');
                    });
                    navLink.classList.add('active');
                }
            }
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#!') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 50;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Initialize AOS with optimized settings
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            mirror: false,
            offset: 100,
            easing: 'ease-in-out',
            disable: function() {
                return window.innerWidth < 768;
            }
        });
    }

    // Initialize PureCounter
    if (typeof PureCounter !== 'undefined') {
        new PureCounter({
            selector: '.stat-number',
            once: true,
            duration: 2
        });
    }

    // Initialize Typed.js with better settings
    const typedElement = document.querySelector('.typed');
    if (typedElement && typeof Typed !== 'undefined') {
        const typedStrings = typedElement.getAttribute('data-typed-items');
        if (typedStrings) {
            new Typed('.typed', {
                strings: typedStrings.split(','),
                loop: true,
                typeSpeed: 80,
                backSpeed: 50,
                backDelay: 2000,
                startDelay: 500,
                smartBackspace: true
            });
        }
    }

    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Performance optimization: Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(() => {
            // Your scroll-dependent code here
        });
    }, { passive: true });
});

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};