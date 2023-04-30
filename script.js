const homeLink =document.querySelector('index.html');
const aboutLink =document.querySelector('about.html');
const servicesLink = document.querySelector('service.html');
const contactLink = document.querySelector('contact.html');

const Checkout =document.querySelector('service.html');

homeLink.addEventListener('click', function () {
    window.location.href ='index.html'
});

aboutLink.addEventListener('click', function () {
window.location.href ='about.html'
});

servicesLink.addEventListener('click', function () {
    window.location.href ='service.html'
});

contactLink.addEventListener('click', function () {
    window.location.href ='contact.html'
});




Checkout.addEventListener('click', function() {
    window.location.href ='service.html'
});


const form = document.querySelector('form');
const submitbtn = document.querySelector('submitbtn');

submitbtn.addEventListener('click', function(event) {
    event.preventDefault();
    console.log(form.elements['name'].value);
});
