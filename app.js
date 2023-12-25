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

const productButtons = document.querySelectorAll(".eventSelected");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");
const services = document.querySelectorAll(".service-info");

productButtons.forEach(button => {
  button.addEventListener("click", () => {
    payment.style.display = "flex";
    services.forEach(service => {
      service.style.filter = "blur(8px)";
    });
  });
});

close.addEventListener("click", () => {
  payment.style.display = "none";
  services.forEach(service => {
    service.style.filter = "blur(0px)";
  });
});


