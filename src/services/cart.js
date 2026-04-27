function getCartFromStorage() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}

function saveCartToStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function getCart() {
    return getCartFromStorage();
}

export function addToCart(product) {
    const cart = getCartFromStorage();
    const existingProduct = cart.find(item => item.id === product.id);
    
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: 1,
            image: product.image
        });
    }
    
    saveCartToStorage(cart);
    return cart;
}

export function clearCart() {
    localStorage.removeItem('cart');
    return [];
}

export function incrementQuantity(productId) {
    const cart = getCartFromStorage();
    const product = cart.find(item => item.id === productId);
    
    if (product) {
        product.quantity += 1;
        saveCartToStorage(cart);
    }
    
    return cart;
}

export function decrementQuantity(productId) {
    const cart = getCartFromStorage();
    const product = cart.find(item => item.id === productId);
    
    if (product && product.quantity > 1) {
        product.quantity -= 1;
        saveCartToStorage(cart);
    }
    
    return cart;
}

export function removeFromCart(productId) {
    const cart = getCartFromStorage();
    const filteredCart = cart.filter(item => item.id !== productId);
    saveCartToStorage(filteredCart);
    return filteredCart;
}
