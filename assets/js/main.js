  (function() {
    "use strict";

    /**
   * Header toggle
   */
    const headerToggleBtn = document.querySelector('.header-toggle');

    function headerToggle() {
      document.querySelector('#header').classList.toggle('active');
    }
    headerToggleBtn.addEventListener('click', headerToggle);

    /**
   * Close mobile menu when clicking outside
   */
    document.addEventListener('click', (e) => {
      if (!e.target.closest('#header') && !e.target.closest('.header-toggle')) {
        document.querySelector('#header').classList.remove('active');
      }
    });

    /**
   * Close mobile menu when clicking on nav links
   */
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        document.querySelector('#header').classList.remove('active');
      });
    });

    /**
   * Animation on scroll
   */
    window.addEventListener('DOMContentLoaded', function() {
      AOS.init({
        duration: 1000,
        once: true,
        mirror: false,
        disable: 'mobile'
      });
    
      new PureCounter();
    
      new Typed('.typed', {
        strings: document.querySelector('.typed').getAttribute('data-typed-items').split(','),
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    });

    /**
   * Skills animation
   */
    let skillsProgress = document.querySelectorAll('.progress-bar');
    skillsProgress.forEach(progress => {
      progress.style.width = progress.getAttribute('aria-valuenow') + '%';
    });

  })();