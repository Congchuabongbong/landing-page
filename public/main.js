//**Menu

const menu = document.querySelector('#menu');
const menuButton = document.querySelector('#menu-button');

menuButton.addEventListener('click', (e) => {
    menu.classList.toggle('invisible');
});
