const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login');
const registerLink = document.querySelector('.register');
const btnPopup = document.querySelector('.loginBtn');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});


loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});