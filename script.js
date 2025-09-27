/**
 * script.js - Primary JavaScript for Macahl Jett Official Website
 * This file handles UI interactions like the mobile menu toggle and the mini-player controls.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Navigation Toggle (Hamburger Menu)
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const mainHeader = document.getElementById('main-header');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            // Toggle visibility/styling
            navMenu.classList.toggle('active');

            // Change the hamburger icon to an 'X'
            navToggle.innerHTML = navMenu.classList.contains('active') ? '&#x2715;' : '&#9776;';

            // Accessibility: Announce menu state change
            const isExpanded = navMenu.classList.contains('active');
            navToggle.setAttribute('aria-expanded', isExpanded);

            // Hide the main header elements when the menu is open (optional)
            mainHeader.classList.toggle('menu-open', isExpanded);
        });

        // Close menu when a link is clicked (for single-page navigation)
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.innerHTML = '&#9776;';
                navToggle.setAttribute('aria-expanded', 'false');
                mainHeader.classList.remove('menu-open');
            });
        });
    }

    // 2. Mini Audio Player Controls (Simulated)
    const playPauseBtn = document.getElementById('play-pause-btn');
    const volumeSlider = document.getElementById('volume-slider');
    
    // NOTE: This is a simulation. For actual playback, you need a full Audio API or an iframe player.
    // For this example, we will just change the button icon and the text state.
    
    if (playPauseBtn) {
        let isPlaying = false;

        playPauseBtn.addEventListener('click', () => {
            isPlaying = !isPlaying;
            if (isPlaying) {
                playPauseBtn.innerHTML = '&#9616;&#9616;'; // Pause icon
                playPauseBtn.setAttribute('aria-label', 'Pause');
                console.log("Audio: Playing");
            } else {
                playPauseBtn.innerHTML = '&#9654;'; // Play icon
                playPauseBtn.setAttribute('aria-label', 'Play');
                console.log("Audio: Paused");
            }
        });
    }

    if (volumeSlider) {
        volumeSlider.addEventListener('input', (e) => {
            const volume = e.target.value;
            console.log(`Volume changed to: ${volume}`);
            // In a real player, you would set: audioElement.volume = volume;
        });
    }
});
