import { getProducts } from "./services/api.js";
import { addToCart, getCart, incrementQuantity, decrementQuantity, removeFromCart, clearCart } from "./services/cart.js";

const contenedorProductos = document.querySelector('#productos-lista');
const inputBuscador = document.querySelector('#input-buscador');
const modalElement = document.getElementById('detalleModal');
const modalInstancia = new bootstrap.Modal(modalElement); // Instancia de Bootstrap para controlarlo desde JS
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalPrice = document.getElementById('modal-price');
const btnAgregarCarrito = document.getElementById('btn-agregar-carrito');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartBadge = document.getElementById('cart-badge');
const cartTotals = document.getElementById('cart-totals');
const cartTotal = document.getElementById('cart-total');
const modalImg = document.getElementById('modal-img');
const toastEl = document.getElementById('toastCarrito');
const toastBody = document.getElementById('toast-body');
const toast = toastEl ? new bootstrap.Toast(toastEl, { delay: 2000 }) : null;
const cartIcon = document.getElementById('cart-icon');
const btnCheckout = document.getElementById('btn-checkout');
const btnClearCart = document.getElementById('btn-clear-cart');


let productosEnMemoria = [];
let productoActual = null;

function renderCart() {
    const cart = getCart();
    const cartIcon = document.getElementById('cart-icon'); 
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="text-muted">El carrito está vacío</p>';
        cartTotals.style.display = 'none';
        cartBadge.textContent = '0';
        cartBadge.style.display = 'none';

        if (cartIcon) {
            cartIcon.classList.remove('bi-cart-fill');
            cartIcon.classList.add('bi-cart3');
        }
        return; 
    }

    let template = '';
    let totalItems = 0;
    let totalPrice = 0;

    cart.forEach((item) => {
        totalItems += item.quantity;
        totalPrice += Number(item.price) * Number(item.quantity);
        template += `
            <div class="cart-item d-flex align-items-center mb-3">
                <img src="${item.image || ''}" alt="${item.title}" class="cart-item-image me-3" style="width: 50px; height: 50px; object-fit: contain;">
                <div class="cart-item-details flex-grow-1">
                    <div class="cart-item-title fw-bold" style="font-size: 0.9rem;">${item.title}</div>
                    <div class="cart-item-price text-muted">$${Number(item.price).toFixed(2)}</div>
                    <div class="cart-item-quantity d-flex align-items-center mt-1">
                        <button class="btn btn-sm btn-outline-secondary btn-decrement py-0 px-2" data-id="${item.id}">-</button>
                        <span class="px-2">${item.quantity}</span>
                        <button class="btn btn-sm btn-outline-secondary btn-increment py-0 px-2" data-id="${item.id}">+</button>
                    </div>
                </div>
                <div class="text-end">
                    <div class="mb-2 fw-bold">$${(item.price * item.quantity).toFixed(2)}</div>
                    <button class="btn btn-sm btn-danger btn-remove" data-id="${item.id}">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            </div>
        `;
    });

    cartItemsContainer.innerHTML = template;
    cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
    cartTotals.style.display = 'block';
    
    //actualizar badge 
    cartBadge.textContent = totalItems;
    cartBadge.style.display = 'flex'; 

    if (cartIcon) {
        cartIcon.classList.remove('bi-cart3');
        cartIcon.classList.add('bi-cart-fill');
    }
}

function renderizarCards(productosParaMostrar) {
    let template = '';

    if (productosParaMostrar.length === 0) {
        contenedorProductos.innerHTML = '<p class="text-center w-100">No se encontraron productos.</p>';
        return;
    }

    productosParaMostrar.forEach((p) => {
        template += `
            <div class="col d-flex justify-content-center">
                <div class="card h-100" style="width: 18rem;">
                    <img src="${p.image}" class="card-img-top p-3" alt="${p.title}" style="height: 250px; object-fit: contain;">
                    <div class="card-body d-flex flex-column">
                        <h2 class="h5 card-title text-truncate" title="${p.title}">${p.title}</h2>
                        <p class="card-text text-truncate">${p.description}</p>
                        <p class="text-center mt-auto">$${p.price}</p>
                        <button class="btn btn-primary btn-detalle mt-2" data-id="${p.id}">Ver producto</button>
                    </div>
                </div>
            </div>
        `;
    });

    contenedorProductos.innerHTML = template;
}

getProducts().then((products) => {
    productosEnMemoria = products;
    renderizarCards(productosEnMemoria);
    renderCart();
});

inputBuscador.addEventListener('input', (evento) => {

    const textoBusqueda = evento.target.value.toLowerCase();

    const productosFiltrados = productosEnMemoria.filter((producto) => {
        return producto.title.toLowerCase().includes(textoBusqueda);
    });

    renderizarCards(productosFiltrados);
});

contenedorProductos.addEventListener('click', (evento) => {

    if (evento.target.classList.contains('btn-detalle')) {

        const productoId = parseInt(evento.target.getAttribute('data-id'));

        const productoSeleccionado = productosEnMemoria.find(producto => producto.id === productoId);

        if (productoSeleccionado) {
            productoActual = productoSeleccionado;
            modalTitle.textContent = productoSeleccionado.title;
            modalDescription.textContent = productoSeleccionado.description;
            modalPrice.textContent = `$${productoSeleccionado.price}`;
            modalImg.src = productoSeleccionado.image;

            // id de producto para el carrito
            btnAgregarCarrito.setAttribute('data-id', productoSeleccionado.id);

            modalInstancia.show();
        }
    }
});



btnAgregarCarrito.addEventListener('click', () => {
    if (!productoActual) return;
        addToCart(productoActual);
        renderCart();

        modalInstancia.hide();
        
        if (toast && toastBody) {
        toastBody.textContent = `${productoActual.title} agregado al carrito`;
        toast.show();
    }
});


cartItemsContainer.addEventListener('click', (evento) => {
    const button = evento.target.closest('button');
    if (!button) return;

    const productId = parseInt(button.getAttribute('data-id'));

    if (button.classList.contains('btn-increment')) {
        incrementQuantity(productId);
        renderCart();
    } else if (button.classList.contains('btn-decrement')) {
        decrementQuantity(productId);
        renderCart();
    } else if (button.classList.contains('btn-remove')) {
        removeFromCart(productId);
        renderCart();
    }
});
<<<<<<< HEAD
=======

btnCheckout.addEventListener('click', () => {
    const cart = getCart();
    if (cart.length === 0) {
        Swal.fire({
            title: 'Carrito vacío',
            text: 'Debes agregar productos antes de finalizar la compra',
            icon: 'warning',
            confirmButtonText: 'Aceptar'
        });
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    Swal.fire({
        title: '¿Finalizar compra?',
        html: `<p>Total a pagar: <strong>$${total.toFixed(2)}</strong></p>`,
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: 'Confirmar pedido',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            clearCart();
            renderCart();
            
            Swal.fire({
                title: '¡Compra realizada!',
                text: 'Tu pedido ha sido confirmado. Pronto recibirás detalles de envío.',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            });
        }
    });
});

btnClearCart.addEventListener('click', () => {
    const cart = getCart();
    if (cart.length === 0) {
        Swal.fire({
            title: 'Carrito vacío',
            text: 'No hay productos para eliminar',
            icon: 'info',
            confirmButtonText: 'Aceptar'
        });
        return;
    }

    Swal.fire({
        title: '¿Eliminar todo?',
        text: 'Se eliminarán todos los productos del carrito',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#dc3545'
    }).then((result) => {
        if (result.isConfirmed) {
            clearCart();
            renderCart();
            
            Swal.fire({
                title: 'Carrito vaciado',
                text: 'Se han eliminado todos los productos',
                icon: 'info',
                confirmButtonText: 'Aceptar'
            });
        }
    });
});
>>>>>>> fcbae9e28feb9daed8083e1489ca9dbc3f29015d
