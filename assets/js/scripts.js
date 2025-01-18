window.addEventListener('DOMContentLoaded', event => {
    let scrollToTopVisible = false;

    // Scroll to top button appear
    document.addEventListener('scroll', () => {
        const scrollToTop = document.body.querySelector('.scroll-to-top');
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
    })

    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        mirror: false,
        disable: 'mobile'
    });

    // Initialize PureCounter
    new PureCounter();

    // Initialize Typed.js
    new Typed('.typed', {
        strings: document.querySelector('.typed').getAttribute('data-typed-items').split(','),
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    });
})

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