/**
 * script.js - Primary JavaScript for Macahl Jett Official Website
 * This file handles UI interactions like the mobile menu toggle.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Navigation Toggle (Hamburger Menu)
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            // Toggle visibility for the menu
            navMenu.classList.toggle('active');

            // Toggle an 'x' icon or a different visual cue for the button
            navToggle.classList.toggle('is-open');

            // Accessibility: Announce menu state change
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
            navToggle.setAttribute('aria-expanded', !isExpanded);
        });
    }

    // 2. Simple Scroll to Top Button (Example of a basic function)
    const scrollToTopButton = document.getElementById('scroll-to-top');

    if (scrollToTopButton) {
        // Show button when user scrolls down
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                scrollToTopButton.style.display = 'block';
            } else {
                scrollToTopButton.style.display = 'none';
            }
        });

        // Scroll to the top when button is clicked
        scrollToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    console.log("Website scripts loaded successfully.");
});
