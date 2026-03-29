import { getProducts } from "./services/api.js";

const contenedorProductos = document.querySelector('#productos-lista');
const inputBuscador = document.querySelector('#input-buscador');
const modalElement = document.getElementById('detalleModal');
const modalInstancia = new bootstrap.Modal(modalElement); // Instancia de Bootstrap para controlarlo desde JS
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalPrice = document.getElementById('modal-price');
const btnAgregarCarrito = document.getElementById('btn-agregar-carrito');

let productosEnMemoria = [];

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
                        <h5 class="card-title text-truncate" title="${p.title}">${p.title}</h5>
                        <p class="card-text text-truncate">${p.description}</p>
                        <h4 class="text-center mt-auto">$${p.price}</h4>
                        <button class="btn btn-primary btn-detalle mt-2" data-id="${p.id}">Ver Detalle</button>
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
            modalTitle.textContent = productoSeleccionado.title;
            modalDescription.textContent = productoSeleccionado.description;
            modalPrice.textContent = `$${productoSeleccionado.price}`;

            // id de producto para el carrito
            btnAgregarCarrito.setAttribute('data-id', productoSeleccionado.id);
            
            modalInstancia.show();
        }
    }
});