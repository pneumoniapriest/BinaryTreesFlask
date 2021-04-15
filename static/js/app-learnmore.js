const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

var logo = document.getElementById("logo");
window.addEventListener('scroll', function() {
    if (window.pageYOffset >= 150) {
        logo.classList.add("moveleft");
        navMenu.classList.add("moveright");
    } else {
        logo.classList.remove("moveleft");
        navMenu.classList.remove("moveright");
    }
});