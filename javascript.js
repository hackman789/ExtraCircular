const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');
const header = document.getElementById('header');

// Toggle Mobile Menu
menuIcon.onclick = () => {
    navbar.classList.toggle('active');
};

// Change background on scroll
window.onscroll = () => {
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
};
