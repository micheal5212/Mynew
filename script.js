let cartCount = 0;

function updateCartCount() {
  const cartLink = document.getElementById('cart-link');
  const cartCountElement = document.createElement('span');
  cartCountElement.id = 'cart-count';
  cartCountElement.textContent = cartCount;
  
  // Verificăm dacă există deja un element de cart count și îl eliminăm
  const existingCartCount = document.getElementById('cart-count');
  if (existingCartCount) {
    existingCartCount.remove();
  }
  
  // Adăugăm noul cart count
  cartLink.appendChild(cartCountElement);
}

// Funcția de adăugare în coș
function addToCart(productId) {
  cartCount++;
  updateCartCount();
  alert(`Product ${productId} added to cart!`);
}

// Funcția de eliminare din coș (simplă, doar pentru demo)
function removeFromCart(productId) {
  if (cartCount > 0) {
    cartCount--;
    updateCartCount();
    alert(`Product ${productId} removed from cart!`);
  } else {
    alert("Cart is already empty!");
  }
}

// Inițializăm cart count
updateCartCount();
