const CART_KEY = "mecha-hangar-cart";

function getCart() {
    const saved = localStorage.getItem(CART_KEY);

    if (saved === null) {
        return [];
    }

    return JSON.parse(saved);
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function addToCart(productId, quantity) {
    const cart = getCart();

    let existingItem = null;
    for (const item of cart) {
        if (item.id === productId) {
            existingItem = item;
        }
    }

    if (existingItem === null) {
        cart.push({ id: productId, quantity: quantity });
    } else {
        existingItem.quantity += quantity;
    }

    saveCart(cart);
    updateCartCount();
}

function changeQuantity(productId, amount) {
    const cart = getCart();

    for (const item of cart) {
        if (item.id === productId) {
            const newQuantity = item.quantity + amount;
            if (newQuantity >= 1 && newQuantity <= 10) {
                item.quantity = newQuantity;
            }
        }
    }

    saveCart(cart);
    updateCartCount();
}

function removeFromCart(productId) {
    const cart = getCart();
    const newCart = [];

    for (const item of cart) {
        if (item.id !== productId) {
            newCart.push(item);
        }
    }

    saveCart(newCart);
    updateCartCount();
}

function updateCartCount() {
    const cart = getCart();

    let total = 0;
    for (const item of cart) {
        total += item.quantity;
    }

    const cartCount = document.getElementById("cart-count");
    if (cartCount !== null) {
        cartCount.textContent = total;
    }
}

updateCartCount();