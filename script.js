document.addEventListener('DOMContentLoaded', (event) => {
    const menuBtn = document.querySelector('#menu-btn');
    const closeBtn = document.querySelector('#close-btn');
    const navLinks = document.querySelector('.nav-links');
    const showDrop = document.querySelector('#showDrop');
    const showMega = document.querySelector('#showMega');
    const dropMenu = document.querySelector('.drop-menu');
    const megaBox = document.querySelector('.mega-box');
  
    // Toggle menu for mobile view
    menuBtn.addEventListener('change', () => {
      if (menuBtn.checked) {
        navLinks.style.left = '0';
      }
    });
  
    closeBtn.addEventListener('change', () => {
      if (closeBtn.checked) {
        navLinks.style.left = '-100%';
      }
    });
  
    // Toggle dropdown menu for mobile view
    showDrop.addEventListener('change', () => {
      if (showDrop.checked) {
        dropMenu.style.maxHeight = '100%';
      } else {
        dropMenu.style.maxHeight = '0';
      }
    });
  
    // Toggle mega menu for mobile view
    showMega.addEventListener('change', () => {
      if (showMega.checked) {
        megaBox.style.maxHeight = '100%';
      } else {
        megaBox.style.maxHeight = '0';
      }
    });
  
    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
      if (!navLinks.contains(event.target) && !menuBtn.contains(event.target)) {
        navLinks.style.left = '-100%';
        menuBtn.checked = false;
        closeBtn.checked = false;
      }
    });
  });
  /*-----------------------------------*/ 
  var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
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
