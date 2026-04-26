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
