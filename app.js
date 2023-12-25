let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => { 
    menu.classList.toggle('fas-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times'); 
    navbar.classList.remove('active'); 
}

const observers = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('visi');
        } else {
            entry.target.classList.remove('visi');
        }
    })
})

const hiddenElements = document.querySelectorAll('.notv');
hiddenElements.forEach((el) => {
    observers.observe(el);
})