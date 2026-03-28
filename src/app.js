import { getProducts } from "./api.js";

getProducts().then((products) => {
console.log(products);
});