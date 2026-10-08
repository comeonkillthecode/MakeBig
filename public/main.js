// =========================================
// MakeBig — Common JavaScript
// Mobile menu and footer year
// =========================================

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('menuToggle');
    const nav = document.getElementById('siteNav');

    if (toggle && nav) {
        const setOpen = (open) => {
            nav.classList.toggle('open', open);
            toggle.setAttribute('aria-expanded', String(open));
        };

        toggle.addEventListener('click', () => {
            setOpen(toggle.getAttribute('aria-expanded') !== 'true');
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') setOpen(false);
        });
    }

    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();
});
