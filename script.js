
let cartCount = 0;

function addToCart() {
  cartCount++;

  document.getElementById("cart-count").textContent = cartCount;

  alert("Product added to your cart!");
}

function showOffer() {
  document.getElementById("offer-message").textContent =
    "Welcome! Explore our products and enjoy shopping at Bharat Bazar.";
}
