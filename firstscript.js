const toggleBtn = document.querySelector('.toggle-btn');
const navLinks = document.querySelector('.nav-links');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
//To toggle a responsive navigation menu on small screens:

const ctaBtn = document.querySelector('.cta');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-btn');

ctaBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
//To display a modal window when a user clicks on a CTA button:

const form = document.querySelector('.newsletter-form');
const emailInput = document.querySelector('#email');
const error = document.querySelector('.error');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!isValidEmail(emailInput.value)) {
    error.textContent = 'Please enter a valid email address.';
  } else {
    error.textContent = '';
    // Submit form to server
  }
});

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
//To validate a newsletter signup form:

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
//Making the navigation bar functional

const addToCartButtons = document.querySelectorAll(".add-to-cart");
const cartItems = [];

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const product = {
      name: button.dataset.name,
      price: button.dataset.price,
    };
    cartItems.push(product);
    updateCartUI();
  });
});

function updateCartUI() {
  const cartItemCount = document.querySelector(".cart-item-count");
  cartItemCount.textContent = cartItems.length;
  
  const cartTotal = document.querySelector(".cart-total");
  const total = cartItems.reduce((accumulator, item) => accumulator + parseFloat(item.price), 0);
  cartTotal.textContent = `$${total.toFixed(2)}`;
}
//Adding products to cart functional