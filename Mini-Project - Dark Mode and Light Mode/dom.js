document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel-slides .card');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const dots = document.querySelectorAll('.dot');

    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
            dots[i].classList.toggle('active', i === index);
        });
        currentSlide = index;
    }

    function nextSlide() {
        showSlide((currentSlide + 1) % slides.length);
    }

    function prevSlide() {
        showSlide((currentSlide - 1 + slides.length) % slides.length);
    }

    next.addEventListener('click', nextSlide);
    prev.addEventListener('click', prevSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    /* --------- Initializes the first slide ---------- */
    showSlide(currentSlide);
});


/* ---------- Toggle Theme Switch -------- */

document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === 'light-mode') {
            themeToggle.checked = true;
            adjustThemeElements('light-mode');
        }
    } else {
        const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (userPrefersDark) {
            document.body.classList.add('dark-mode');
        }
    }

    themeToggle.addEventListener('change', function () {
        if (themeToggle.checked) {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
            adjustThemeElements('light-mode');
        } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
            adjustThemeElements('dark-mode');
        }
    });

    function adjustThemeElements(theme) {
        const leftContent = document.querySelector('.left-content');
        const exploreBtn = document.querySelector('.explore-btn');

        if (theme === 'light-mode') {
            leftContent.style.color = '#000000'; 
            exploreBtn.style.backgroundColor = '#000000'; 
            exploreBtn.style.color = '#ffffff';
        } else {
            leftContent.style.color = '#ffffff'; 
            exploreBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'; 
            exploreBtn.style.color = '#000000'; 
        }
    }

    adjustThemeElements(currentTheme);
});



document.addEventListener('DOMContentLoaded', function() {
    var menuBtn = document.getElementById('menu-btn');
    var menu = document.getElementById('menu');

    menuBtn.addEventListener('click', function() {
        menu.classList.toggle('active'); 
    });
});

