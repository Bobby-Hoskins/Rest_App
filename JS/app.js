const mobileHamburger = document.querySelector(".mobile-hamburger");
const navMenu = document.querySelector(".nav-menu");

mobileHamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    mobileHamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    mobileHamburger.classList.remove("active");
    navMenu.classList.remove("active");
}