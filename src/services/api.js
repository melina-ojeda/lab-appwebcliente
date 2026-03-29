const API_URL = 'https://api.ejemplo.com/productos';

export async function getProducts() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Error en la red');
        return await response.json();
    } catch (error) {
        console.error("Error al obtener productos:", error);
        return [];
    }
}