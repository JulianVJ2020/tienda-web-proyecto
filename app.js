const productos = [
    { id: 1, nombre: "Auriculares Bluetooth", precio: 78000, img: "img/audifonos.jpg" },
    { id: 2, nombre: "Reloj Inteligente", precio: 120000, img: "img/watch.jpg" },
    { id: 3, nombre: "Teclado Mecánico", precio: 95000, img: "img/teclado.jpg" }
];

const contenedor = document.getElementById("lista-productos");

productos.forEach(item => {
    contenedor.innerHTML += `
        <div class="card">
            <img src="${item.img}" alt="${item.nombre}">
            <h3>${item.nombre}</h3>
            <p>$${item.precio.toLocaleString()}</p>
            <button onclick="agregarCarrito(${item.id})">Agregar al carrito</button>
        </div>
    `;
});

let carrito = [];

function agregarCarrito(id) {
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    alert("Producto agregado al carrito");
}
