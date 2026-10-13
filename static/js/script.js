document.addEventListener('DOMContentLoaded', function() {
    // Collapsible sidebar (initial state is set by the inline script in base.html's <head>)
    const root = document.documentElement;
    const navToggle = document.querySelector('.nav-toggle');
    if (navToggle) {
        const sync = () => {
            const collapsed = root.classList.contains('nav-collapsed');
            navToggle.setAttribute('aria-expanded', String(!collapsed));
            navToggle.setAttribute('aria-label', collapsed ? 'Show menu' : 'Hide menu');
            navToggle.title = collapsed ? 'Show menu' : 'Hide menu';
        };
        sync();
        // enable the slide transition only after first paint, so a saved state doesn't animate on load
        requestAnimationFrame(() => requestAnimationFrame(() => root.classList.add('nav-animate')));
        navToggle.addEventListener('click', () => {
            const collapsed = root.classList.toggle('nav-collapsed');
            try { localStorage.setItem('nav-collapsed', collapsed ? '1' : '0'); } catch (e) {}
            sync();
        });
    }

    // Mobile dropdown toggle
    const dropdown = document.querySelector('.dropdown');
    const dropdownLink = dropdown?.querySelector('a');
    
    if (dropdown && dropdownLink) {
        dropdownLink.addEventListener('click', function(e) {
            e.preventDefault();
            dropdown.classList.toggle('active');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href === '#') return;  // e.g. the "Misc." dropdown toggle; '#' isn't a valid selector
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});