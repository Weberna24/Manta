const menu = document.querySelector('#menu-bar');
const navbarEl = document.querySelector('.navbar-menu');
const body = document.querySelector('body')
const btnService = document.querySelector('.service-button');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    navbarEl.classList.toggle('active');
    slogoEl.classList.toggle('active');
    logoEl.classList.toggle('active');
    captionEl.classList.toggle('active');
})