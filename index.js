const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const amount = document.querySelector(".amount");
const cartBtn = document.querySelector(".add_to_cart");
const indicator = document.querySelector(".indicator");
const wrp = document.querySelector(".cart_content");
let count = 0;

let dec = () => {
  count--;
  amount.innerText = count;
  count < 0 ? (amount.innerText = 0) : (amount.innerText = count);
};

let inc = () => {
  count++;
  amount.innerText = count;
};

let addToCart = () => {
  indicator.innerText = amount.innerText;
  indicator.classList.remove("invisible");
  amount.innerText = 0;
  count = 0;
};

let deleteItem = () => {
  wrp.classList.add("empty");
  wrp.innerHTML = `<p>Your cart is empty</p>`;
  indicator.classList.add("invisible");
};

let clickCart = () => {
  indicator.classList.add("invisible");
  document.querySelector(".cart_wrap").classList.toggle("invisible");
  const total = 125.0 * indicator.innerHTML;
  if (indicator.innerHTML > 0) {
    wrp.innerHTML = `<div class="cart_content filled invisible">
    <img src="./images/image-product-1-thumbnail.jpg" alt="" id="cart-preview">
    <div class="details">
      <p>Fall Limited Edition Sneakers</p>
      <p>$125.00 X <span id="amt">${indicator.innerHTML}</span> = <span id="res">$${total}</span></p>
    </div>
    <img src="./images/icon-delete.svg" alt="" id="delete-icon" onClick="deleteItem()">
    <button class="checkoutBtn">Checkout</button>
  </div>`;
  }
};
