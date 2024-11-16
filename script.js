document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    let isMenuOpen = false;

    // Toggle menu
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        isMenuOpen = !isMenuOpen;
        nav.classList.toggle('nav--open');
        hamburger.innerHTML = isMenuOpen ? '×' : '☰';
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    });

    // Close menu when clicking a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (isMenuOpen) {
                isMenuOpen = false;
                nav.classList.remove('nav--open');
                hamburger.innerHTML = '☰';
                document.body.style.overflow = '';
            }
        });
    });

    // Close menu when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isMenuOpen) {
            isMenuOpen = false;
            nav.classList.remove('nav--open');
            hamburger.innerHTML = '☰';
            document.body.style.overflow = '';
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && isMenuOpen) {
            isMenuOpen = false;
            nav.classList.remove('nav--open');
            hamburger.innerHTML = '☰';
            document.body.style.overflow = '';
        }
    });
});