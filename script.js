const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const body = document.querySelector('body');

// Toggle menu
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile when click nav-link

document.querySelectorAll('.nav-link').forEach(link=> {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});



window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if(window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled')
    }
})

// Fungsi menutup navbar
body.addEventListener('click', (e)=> {
    if(!navMenu.contains(e.target) && !hamburger.contains(e.target)){
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
})

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 100){
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
})

// CONTACT SUBMIT
function sendMessage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const url = "https://api.whatsapp.com/send?phone=6287889050056&text=Halo%20Admin%0ASaya%20*"+ name +"*%0AEmail%20saya%20*"+ email +"*%0A%0A*"+ message +"*"

    window.open(url)
}
