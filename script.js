document.addEventListener('DOMContentLoaded', (event) => {
    const menuBtn = document.querySelector('#menu-btn');
    const closeBtn = document.querySelector('#close-btn');
    const navLinks = document.querySelector('.nav-links');
    const showDrop = document.querySelector('#showDrop');
    const showMega = document.querySelector('#showMega');
    const dropMenu = document.querySelector('.drop-menu');
    const megaBox = document.querySelector('.mega-box');

    // Toggle menu for mobile view
    menuBtn.addEventListener('click', () => {
        navLinks.style.left = '0';
    });

    closeBtn.addEventListener('click', () => {
        navLinks.style.left = '-100%';
    });

    // Toggle dropdown menu for mobile view
    showDrop.addEventListener('click', () => {
        if (dropMenu.style.maxHeight === '100%') {
            dropMenu.style.maxHeight = '0';
        } else {
            dropMenu.style.maxHeight = '100%';
        }
    });

    // Toggle mega menu for mobile view
    showMega.addEventListener('click', () => {
        if (megaBox.style.maxHeight === '100%') {
            megaBox.style.maxHeight = '0';
        } else {
            megaBox.style.maxHeight = '100%';
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!navLinks.contains(event.target) && !menuBtn.contains(event.target)) {
            navLinks.style.left = '-100%';
        }
    });
});

/* Accordion Logic */
var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
