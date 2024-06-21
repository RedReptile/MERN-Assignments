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
            leftContent.style.color = '#000000'; // Adjust text color in left-content for light mode
            exploreBtn.style.backgroundColor = '#000000'; // Adjust button background color for light mode
            exploreBtn.style.color = '#ffffff'; // Adjust text color for explore button in light mode
        } else {
            leftContent.style.color = '#ffffff'; // Adjust text color in left-content for dark mode
            exploreBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'; // Adjust button background color for dark mode
            exploreBtn.style.color = '#000000'; // Adjust text color for explore button in dark mode
        }
    }

    // Call adjustThemeElements when the page loads
    adjustThemeElements(currentTheme);
});


