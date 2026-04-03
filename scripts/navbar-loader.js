document.addEventListener('DOMContentLoaded', () => {
    const placeholder = document.getElementById('navbar-placeholder');
    if (!placeholder) return;

    fetch('navbar.html')
        .then(response => response.text())
        .then(html => {
            placeholder.innerHTML = html;
            highlightActiveLink();
            initMobileMenu();
        })
        .catch(err => console.error('Error loading navbar:', err));
});

function highlightActiveLink() {
    const path = window.location.pathname;
    const page = path.split("/").pop();
    
    // Default to index if empty
    const currentPage = page || 'index.html';
    
    if (currentPage === 'who-we-are.html') {
        const link = document.getElementById('nav-who-we-are');
        if (link) link.classList.add('active');
    } else if (currentPage === 'how-we-work.html') {
        const link = document.getElementById('nav-how-we-work');
        if (link) link.classList.add('active');
    } else if (currentPage === 'contact.html') {
        const link = document.getElementById('nav-contact');
        if (link) link.classList.add('active');
    }
}

function initMobileMenu() {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.site-nav');
    if (!toggle || !nav) return;

    const toggleMenu = (show) => {
        const isActive = show !== undefined ? show : !nav.classList.contains('is-active');
        nav.classList.toggle('is-active', isActive);
        toggle.setAttribute('aria-expanded', isActive);
        
        // Change icon
        const icon = toggle.querySelector('.material-symbols-outlined');
        if (icon) {
            icon.textContent = isActive ? 'close' : 'menu';
        }

        // Prevent body scroll when menu is open
        document.body.style.overflow = isActive ? 'hidden' : '';
    };

    toggle.addEventListener('click', () => toggleMenu());

    // Close menu when clicking links
    nav.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => toggleMenu(false));
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav.classList.contains('is-active')) {
            toggleMenu(false);
        }
    });

    // Close if clicking outside the menu
    document.addEventListener('click', (e) => {
        if (nav.classList.contains('is-active') && 
            !nav.contains(e.target) && 
            !toggle.contains(e.target)) {
            toggleMenu(false);
        }
    });
}
