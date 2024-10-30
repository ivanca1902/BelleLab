const cartItems = [];
let cartTotal = 0;

function addToCart(item, price) {
    cartItems.push({ item, price });
    cartTotal += price;
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartList = document.getElementById("cart-items");
    cartList.innerHTML = cartItems
        .map(cartItem => `<li>${cartItem.item} - $${cartItem.price.toFixed(2)}</li>`)
        .join("");
    document.getElementById("cart-total").textContent = cartTotal.toFixed(2);
}

function clearCart() {
    cartItems.length = 0;
    cartTotal = 0;
    updateCartDisplay();
}
