document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('nav ul');

    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('showing');
    });

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 60, // Adjust the offset to account for the fixed header
            behavior: 'smooth'
        });

        // Close the menu after clicking on a link (for mobile view)
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('showing');
        }
    }
});