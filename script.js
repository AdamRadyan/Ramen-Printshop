document.addEventListener("DOMContentLoaded", function() {

    // --- Logika untuk Menu Burger ---
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav ul li a');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        nav.classList.toggle('active');
        // Kunci atau buka scroll halaman utama
        document.body.classList.toggle('no-scroll'); 
    });

    // Menutup menu saat link diklik
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
            // Pastikan scroll kembali normal
            document.body.classList.remove('no-scroll');
        });
    });

    // --- Animasi Reveal on Scroll ---
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    revealElements.forEach(element => { revealObserver.observe(element); });

    // --- Fungsi Accordion ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentlyActive = document.querySelector('.accordion-header.active');
            if(currentlyActive && currentlyActive !== header) {
                currentlyActive.classList.remove('active');
                currentlyActive.nextElementSibling.style.maxHeight = 0;
            }

            header.classList.toggle('active');
            const accordionContent = header.nextElementSibling;
            if(header.classList.contains('active')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
            } else {
                accordionContent.style.maxHeight = 0;
            }
        });
    });
});