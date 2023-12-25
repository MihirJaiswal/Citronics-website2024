let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

function toggleButton() {
    navbar.classList.toggle('show');  
}

menu.addEventListener('click', toggleButton)
