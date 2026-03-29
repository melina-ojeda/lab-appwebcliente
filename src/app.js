import { getProducts } from "./services/api.js";


let productCard = document.querySelector('#product-card');

getProducts().then((products) => {
let template = '';
products.forEach((p) => {
    template += `
        <div class="card" style="width: 18rem;">
            <img src="${p.image}" class="card-img-top" alt="${p.title}">
            <div class="card-body">
                <h5 class="card-title">${p.title}</h5>
                <p class="card-text">${p.description}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    `;
});
    productCard.innerHTML += template;
});